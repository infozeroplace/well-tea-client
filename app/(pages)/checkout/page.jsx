"use client";

import AddressSelection from "@/components/AddressSelection";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutPreview from "@/components/CheckoutPreview";
import { env } from "@/config/env";
import useToast from "@/hooks/useToast";
import { useGetAddressQuery } from "@/services/features/address/addressApi";
import { useCreatePaymentIntentMutation } from "@/services/features/orders/ordersApi";
import { useGetShippingMethodsQuery } from "@/services/features/shipping/shippingApi";
import { useAppSelector } from "@/services/hook";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";

let stripePromise;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(env.stripe_publishable_key);
  }
};

const CheckoutScreen = () => {
  const { handleError } = useToast();

  const {
    auth: { user, token },
    carts: { carts },
  } = useAppSelector((state) => state);

  const [email, setEmail] = useState();

  // Billing & Shipping Address State
  const [shippingAddress, setShippingAddress] = useState(null);
  const [userCountry, setUserCountry] = useState("united kingdom"); // Default fallback

  // Fetch saved addresses
  const { data: { data: addresses = [] } = {}, isLoading: addressLoading } =
    useGetAddressQuery({}, { skip: !token });

  // Get user's geolocation if no saved address is available
  useEffect(() => {
    if (!shippingAddress) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await response.json();
              setUserCountry(data.countryName || "United Kingdom"); // Fallback if undefined
            } catch (error) {
              console.error("Error fetching geolocation:", error);
            }
          },
          (error) => console.error("Geolocation error:", error)
        );
      }
    }
  }, [shippingAddress]);

  // Fetch shipping methods based on the country
  const { data: { data: { methods = [] } = {} } = {} } =
    useGetShippingMethodsQuery({
      country: shippingAddress?.country || userCountry,
    });

  // Selected shipping method
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Set default shipping method when methods are fetched
  useEffect(() => {
    if (methods.length > 0) {
      setSelectedMethod(methods[0]);
    }
  }, [methods]);

  // Set default shipping address
  useEffect(() => {
    if (addresses.length > 0) {
      const defaultShipping =
        addresses.find((addr) => addr.isDefault) || addresses[0];
      setShippingAddress(defaultShipping);
    }
  }, [addresses]);

  // Handle shipping address change
  const handleShippingAddressChange = (selectedId) => {
    const selectedAddress = addresses.find((addr) => addr._id === selectedId);
    setShippingAddress(selectedAddress);
  };

  // Handle shipping method change
  const handleMethodChange = (event) => {
    const method = methods.find((m) => m._id === event.target.value);
    setSelectedMethod(method);
  };

  // Calculate total price
  const totalPrice = carts?.totalPrice || 0;
  const shippingCost = selectedMethod?.cost || 0;
  const grandTotal = (totalPrice + shippingCost).toFixed(2);

  const effectExecuted = useRef(false);
  const [clientSecret, setClientSecret] = useState("");
  const [stripe, setStripe] = useState(null);

  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();

  useEffect(() => {
    const setupStripe = async () => {
      await initializeStripe();
      setStripe(stripePromise);
    };

    setupStripe();
  }, []);

  useEffect(() => {
    const loadPaymentIntent = async () => {
      if (!carts?._id || effectExecuted.current) return;

      // Check if there's a stored payment intent
      const storedIntent = localStorage.getItem("paymentIntent");
      const parsedIntent = storedIntent ? JSON.parse(storedIntent) : null;

      if (
        parsedIntent &&
        parsedIntent.clientSecret &&
        parsedIntent.expiry > Date.now()
      ) {
        setClientSecret(parsedIntent.clientSecret);
        return;
      }

      if (
        user?.email &&
        carts?._id &&
        shippingAddress?._id &&
        selectedMethod?._id &&
        !effectExecuted.current
      ) {
        effectExecuted.current = true;
        try {
          const { data } = await createPaymentIntent({
            data: {
              email: user?.email,
              cartId: carts._id,
              shippingAddressId: shippingAddress._id,
              shippingMethodId: selectedMethod._id,
            },
          }).unwrap();

          // Store the new payment intent with an expiry (e.g., 30 minutes)
          localStorage.setItem(
            "paymentIntent",
            JSON.stringify({
              id: data.id,
              clientSecret: data,
              expiry: Date.now() + 7 * 24 * 60 * 60 * 1000,
            })
          );

          setClientSecret(data);
        } catch (error) {
          handleError(error?.data?.message || "Something went wrong!");
        }
      }
    };

    loadPaymentIntent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts?._id, shippingAddress?._id, selectedMethod?._id]);

  return (
    <div className="container px-5 sm:px-10 md:px-14 lg:px-10 w-full h-full flex flex-col xl:flex-row justify-between gap-5 p-5">
      <div className="w-full h-full md:flex justify-center md:justify-end items-center py-10">
        <CheckoutPreview
          carts={carts}
          totalPrice={totalPrice}
          shippingCost={shippingCost}
          grandTotal={grandTotal}
        />
      </div>

      <div className="hidden xl:block w-px bg-gray-300"></div>

      <div className="w-full h-full py-10 flex flex-col gap-4">
        <div className="xl:max-w-[500px] w-full h-full flex flex-col gap-4">
          {user?.email ? (
            <div className="flex flex-col text-brand__font__size__sm border-b pb-2">
              <span className="text-gray-500">Account</span>
              <span>{user?.email}</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Contact</span>
              <div className="flex border border-gray-300 rounded-md overflow-hidden w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="flex-grow px-3 py-2 text-gray-700 outline-none placeholder:text-brand__font__size__sm"
                />
              </div>
            </div>
          )}

          <AddressSelection
            methods={methods}
            selectedMethod={selectedMethod}
            addresses={addresses}
            shippingAddress={shippingAddress}
            handleMethodChange={handleMethodChange}
            handleShippingAddressChange={handleShippingAddressChange}
          />

          {clientSecret && stripe && (
            <Elements
              stripe={stripe}
              options={{
                clientSecret,
                appearance: {
                  variables: {
                    colorPrimary: "#13a800",
                  },
                },
              }}
            >
              <CheckoutForm grandTotal={grandTotal} />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
