"use client";

import AddressSelection from "@/components/AddressSelection";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutPreview from "@/components/CheckoutPreview";
import EmailSelection from "@/components/EmailSelection";
import EmptyBasket from "@/components/EmptyBasket";
import { env } from "@/config/env";
import useToast from "@/hooks/useToast";
import { useGetAddressQuery } from "@/services/features/address/addressApi";
import {
  useApplyCouponMutation,
  useCreatePaymentIntentMutation,
  useUpdatePaymentIntentMutation,
} from "@/services/features/orders/ordersApi";
import { useGetShippingMethodsQuery } from "@/services/features/shipping/shippingApi";
import { useAppSelector } from "@/services/hook";
import { Alert } from "@heroui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

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

  const [email, setEmail] = useState(user?.email || null);
  const [useSameShipping, setUseSameShipping] = useState(true);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const [stripe, setStripe] = useState(null);
  const [alertData, setAlertData] = useState({ isShow: false, message: "" });
  const effectExecuted = useRef(false);

  // Fetch saved addresses
  const { data: { data: addresses = [] } = {}, isLoading: addressLoading } =
    useGetAddressQuery({}, { skip: !token });

  // Fetch shipping methods based on the country
  const { data: shippingMethodQuery, isLoading: methodLoading } =
    useGetShippingMethodsQuery({
      country: shippingAddress?.country,
    });

  const methods = shippingMethodQuery?.data?.methods || [];

  // Set default shipping address
  useEffect(() => {
    if (addresses.length > 0) {
      const defaultShipping =
        addresses.find((addr) => addr.isDefault) || addresses[0];
      setShippingAddress(defaultShipping);
      setBillingAddress(defaultShipping);
    }
  }, [addresses.length]);

  // Set default shipping method when methods are fetched
  useEffect(() => {
    if (methods?.length > 0) {
      setSelectedMethod(methods[0]);
    }
  }, [methods.length]);

  useEffect(() => {
    const setupStripe = async () => {
      await initializeStripe();
      setStripe(stripePromise);
    };

    setupStripe();
  }, []);

  useEffect(() => {
    setEmail(user?.email || null);
  }, [user?.email]);

  const [
    applyCoupon,
    {
      data: applyCouponData,
      error: applyCouponError,
      isLoading: applyCouponFetch,
    },
  ] = useApplyCouponMutation();

  useEffect(() => {
    if (applyCouponData?.data) {
      toast.success(applyCouponData?.message);
      setDiscountAmount(applyCouponData?.data || 0);
    }
  }, [applyCouponData?.data, applyCouponData?.message]);

  useEffect(() => {
    if (applyCouponError?.data?.message) {
      toast.error(applyCouponError?.data?.message);
      setCoupon("");
    }
  }, [applyCouponError?.data?.message]);

  const [updatePaymentIntent, { isLoading: updatePaymentIntentFetch }] =
    useUpdatePaymentIntentMutation();

  // Need to run every data change UseEffect
  useEffect(() => {
    const load = async () => {
      const storedIntent = localStorage.getItem("paymentIntent");
      const parsedIntent = storedIntent ? JSON.parse(storedIntent) : null;

      if (
        parsedIntent &&
        parsedIntent.id &&
        parsedIntent.clientSecret &&
        parsedIntent.expiry > Date.now()
      ) {
        const cartId = carts?._id || null;
        const shippingMethodId = selectedMethod?._id || null;

        await updatePaymentIntent({
          data: {
            id: parsedIntent.id,
            coupon,
            email,
            billingAddress: useSameShipping ? shippingAddress : billingAddress,
            shippingAddress,
            shippingMethodId,
          },
        });

        localStorage.setItem(
          "paymentIntent",
          JSON.stringify({
            ...parsedIntent,
            coupon,
            shippingMethodId,
          })
        );
      }
    };

    load();
  }, [
    email,
    selectedMethod,
    useSameShipping,
    applyCouponData?.data,
    billingAddress ? Object.values(billingAddress).join() : null,
    shippingAddress ? Object.values(shippingAddress).join() : null,
  ]);

  const [createPaymentIntent, { isLoading: createPaymentIntentFetch }] =
    useCreatePaymentIntentMutation();

  useEffect(() => {
    const loadPaymentIntent = async () => {
      // predefined ids/email
      const cartId = carts?._id || null;
      const isItemsExists = carts?.items?.length > 0;
      const shippingMethodId = selectedMethod?._id || null;

      if (
        !shippingMethodId ||
        !cartId ||
        !isItemsExists ||
        effectExecuted.current
      ) {
        return;
      }
      // Ensure the selected method is actually loaded
      if (!methods.length || !selectedMethod) return;

      // Check if there's a stored payment intent
      const storedIntent = localStorage.getItem("paymentIntent");
      const parsedIntent = storedIntent ? JSON.parse(storedIntent) : null;

      if (
        parsedIntent &&
        parsedIntent.id &&
        parsedIntent.clientSecret &&
        parsedIntent.expiry > Date.now()
      ) {
        setClientSecret(parsedIntent.clientSecret);
        return;
      }

      effectExecuted.current = true;

      try {
        const { data } = await createPaymentIntent({
          data: {
            email,
            cartId,
            billingAddress: useSameShipping ? shippingAddress : billingAddress,
            shippingAddress,
            shippingMethodId,
          },
        }).unwrap();

        // Store the new payment intent with an expiry (e.g., 7 days)
        localStorage.setItem(
          "paymentIntent",
          JSON.stringify({
            id: data.id,
            shippingMethodId,
            clientSecret: data.clientSecret,
            expiry: Date.now() + 7 * 24 * 60 * 60 * 1000,
          })
        );

        setClientSecret(data.clientSecret);
      } catch (error) {
        handleError(error?.data?.message || "Something went wrong!");
      }
    };

    loadPaymentIntent();
  }, [carts, shippingAddress, selectedMethod]);

  // Handle shipping address change
  const handleShippingAddressChange = (event) => {
    const selectedAddress = addresses.find(
      (addr) => addr._id === event.target.value
    );
    setShippingAddress(selectedAddress);
  };

  const handleChangeShippingAddressFields = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeBillingAddressFields = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Handle shipping method change
  const handleMethodChange = (event) => {
    const method = methods.find((m) => m._id === event.target.value);
    setSelectedMethod(method);
  };

  const handleChangeSameShipping = (val) => setUseSameShipping(val);

  const handleShowAlert = (message) => {
    setAlertData({ isShow: true, message });

    setTimeout(() => {
      setAlertData({ isShow: false, message: "" });
    }, 5000);
  };

  const handleSetCoupon = (val) => setCoupon(val);

  const handleApplyCoupon = async () => {
    const storedIntent = localStorage.getItem("paymentIntent");
    const parsedIntent = storedIntent ? JSON.parse(storedIntent) : null;

    if ((parsedIntent.id && !coupon) || !discountAmount) {
      await applyCoupon({
        data: {
          coupon,
          paymentIntent: parsedIntent.id,
        },
      });
    }
  };

  // Calculate total price
  const totalPrice = carts?.totalPrice || 0;
  const shippingCost = selectedMethod?.cost || 0;
  const grandTotal = (totalPrice + shippingCost - discountAmount).toFixed(2);

  return (
    <>
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10 w-full h-full flex flex-col xl:flex-row justify-between gap-5 p-5">
        {carts?._id && carts?.items?.length ? (
          <>
            <div className="w-full h-full md:flex justify-center md:justify-end items-center py-10">
              <CheckoutPreview
                user={user}
                carts={carts}
                totalPrice={totalPrice}
                shippingCost={shippingCost}
                grandTotal={grandTotal}
                methods={methods}
                selectedMethod={selectedMethod}
                coupon={coupon}
                discountAmount={discountAmount}
                applyCouponLoading={applyCouponFetch}
                loading={
                  addressLoading ||
                  methodLoading ||
                  createPaymentIntentFetch ||
                  updatePaymentIntentFetch
                }
                onChangeMethod={handleMethodChange}
                onChangeCoupon={handleSetCoupon}
                onApplyCoupon={handleApplyCoupon}
              />
            </div>

            <div className="w-full h-full py-10 flex flex-col gap-4">
              <div className="xl:max-w-[500px] w-full h-full flex flex-col gap-4">
                {alertData.isShow && (
                  <Alert
                    color="danger"
                    description={alertData.message}
                    title="Warning!"
                  />
                )}

                <EmailSelection
                  user={user}
                  email={email}
                  onChangeEmail={setEmail}
                />

                <AddressSelection
                  user={user}
                  addresses={addresses}
                  shippingAddress={shippingAddress}
                  billingAddress={billingAddress}
                  useSameShipping={useSameShipping}
                  onSameShipping={handleChangeSameShipping}
                  onChangeShippingFields={handleChangeShippingAddressFields}
                  onChangeBillingFields={handleChangeBillingAddressFields}
                  onChangeShippingAddress={handleShippingAddressChange}
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
                    <CheckoutForm
                      grandTotal={grandTotal}
                      user={user}
                      email={email}
                      shippingAddress={shippingAddress}
                      billingAddress={billingAddress}
                      useSameShipping={useSameShipping}
                      onShowAlert={handleShowAlert}
                      loading={
                        addressLoading ||
                        methodLoading ||
                        createPaymentIntentFetch ||
                        updatePaymentIntentFetch
                      }
                    />
                  </Elements>
                )}
              </div>
            </div>
          </>
        ) : (
          <EmptyBasket />
        )}
      </div>
    </>
  );
};

export default CheckoutScreen;
