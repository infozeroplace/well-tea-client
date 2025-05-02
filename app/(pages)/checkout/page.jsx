"use client";

import axios from "@/api/axios";
import AddressSelection from "@/components/AddressSelection";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutPreview from "@/components/CheckoutPreview";
import EmailSelection from "@/components/EmailSelection";
import EmptyBasket from "@/components/EmptyBasket";
import { env } from "@/config/env";
import useToast from "@/hooks/useToast";
import { useGetAddressQuery } from "@/services/features/address/addressApi";
import { useApplyCouponMutation } from "@/services/features/coupon/couponApi";
import {
  useCreatePaymentIntentMutation,
  useUpdatePaymentIntentMutation,
} from "@/services/features/payment/paymentApi";
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

  const effectExecuted = useRef(false);
  const [email, setEmail] = useState(user?.email || null);
  const [useSameShipping, setUseSameShipping] = useState(true);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [stripe, setStripe] = useState(null);
  const [alertData, setAlertData] = useState({ isShow: false, message: "" });

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
      setDiscount(applyCouponData?.data);
    }
  }, [applyCouponData?.data, applyCouponData?.message]);

  useEffect(() => {
    if (applyCouponError?.data?.message) {
      toast.error(applyCouponError?.data?.message);
    }
  }, [applyCouponError?.data?.message]);

  const [updatePaymentIntent, { isLoading: updatePaymentIntentFetch }] =
    useUpdatePaymentIntentMutation();

  // Need to run every data change UseEffect
  useEffect(() => {
    const load = async () => {
      const cartId = carts?._id || null;
      const shippingMethodId = selectedMethod?._id || null;

      if (!cartId || !shippingMethodId) return;

      const {
        data: { data: paymentIntent },
      } = await axios.get(
        `/public/payment/get-payment-intent?cartId=${cartId}`
      );

      if (paymentIntent && paymentIntent.id && paymentIntent.clientSecret) {
        await updatePaymentIntent({
          data: {
            cartId,
            id: paymentIntent.id,
            coupon,
            email,
            billingAddress: useSameShipping ? shippingAddress : billingAddress,
            shippingAddress,
            shippingMethodId,
          },
        });
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
    const load = async () => {
      const cartId = carts?._id || null;
      const isItemsExists = carts?.items?.length > 0;
      const shippingMethodId = selectedMethod?._id || null;

      if (
        !cartId ||
        !isItemsExists ||
        !shippingMethodId ||
        effectExecuted.current
      ) {
        return;
      }

      // Ensure the selected method is actually loaded
      if (!methods.length || !selectedMethod) return;

      const {
        data: { data: paymentIntent },
      } = await axios.get(
        `/public/payment/get-payment-intent?cartId=${cartId}`
      );

      if (paymentIntent && paymentIntent.id && paymentIntent.clientSecret) {
        setClientSecret(paymentIntent.clientSecret);
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

        setClientSecret(data);
      } catch (error) {
        handleError(error?.data?.message || "Something went wrong!");
      }
    };

    load();
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
    const cartId = carts?._id || null;

    const {
      data: { data: paymentIntent },
    } = await axios.get(`/public/payment/get-payment-intent?cartId=${cartId}`);

    if (paymentIntent.id) {
      await applyCoupon({
        data: {
          coupon,
          paymentIntent: paymentIntent.id,
        },
      });
    }
  };

  let discountPrice = 0;

  if (discount) {
    discountPrice =
      discount?.discountType === "percent"
        ? (carts?.totalPrice / 100) * discount.discount
        : discount.discount;
  }

  const subtotal = carts?.totalPrice - discountPrice;
  const shipping = selectedMethod?.cost || 0;
  const grandTotal = (subtotal + shipping).toFixed(2);

  return (
    <>
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10 w-full h-full">
        {carts?._id && carts?.items?.length ? (
          <div className="w-full flex flex-col xl:flex-row justify-center gap-4 py-10">
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
            </div>

            <div className="xl:max-w-[500px] w-full h-full flex flex-col gap-4">
              <CheckoutPreview
                carts={carts}
                totalPrice={subtotal}
                shippingCost={shipping}
                grandTotal={grandTotal}
                methods={methods}
                selectedMethod={selectedMethod}
                coupon={coupon}
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
        ) : (
          <EmptyBasket />
        )}
      </div>
    </>
  );
};

export default CheckoutScreen;
