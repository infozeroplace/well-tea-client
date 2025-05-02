"use client";

import AddressSelection from "@/components/AddressSelection";
import CheckoutPreview from "@/components/CheckoutPreview";
import EmailSelection from "@/components/EmailSelection";
import EmptyBasket from "@/components/EmptyBasket";
import StripePayment from "@/components/StripePayment";
import { useGetAddressQuery } from "@/services/features/address/addressApi";
import { useApplyCouponMutation } from "@/services/features/coupon/couponApi";
import { useGetShippingMethodsQuery } from "@/services/features/shipping/shippingApi";
import { useAppSelector } from "@/services/hook";
import { Alert } from "@heroui/react";
import { useEffect, useState } from "react";

const CheckoutTestScreen = () => {
  const {
    auth: { user, token },
    carts: { carts },
  } = useAppSelector((state) => state);

  const [email, setEmail] = useState(user?.email || null);
  const [alertData, setAlertData] = useState({ isShow: false, message: "" });
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [useSameShipping, setUseSameShipping] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Fetch saved addresses
  const { data: { data: addresses = [] } = {}, isLoading: addressLoading } =
    useGetAddressQuery({}, { skip: !token });

  // Fetch shipping methods based on the country
  const { data: shippingMethodQuery, isLoading: methodLoading } =
    useGetShippingMethodsQuery({
      country: shippingAddress?.country,
    });

  const [
    applyCoupon,
    {
      data: applyCouponData,
      error: applyCouponError,
      isLoading: applyCouponFetch,
    },
  ] = useApplyCouponMutation();

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

  const subtotal = (carts?.totalPrice || 0) - discountPrice;
  const shipping = selectedMethod?.cost || 0;
  const grandTotal = Number((subtotal + shipping).toFixed(2));

  return (
    <div className="container px-5 sm:px-10 md:px-14 lg:px-10 w-full h-full">
      {carts?._id && carts?.items?.length ? (
        <div className="w-full flex flex-col xl:flex-row justify-center gap-5 py-10">
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
              loading={addressLoading || methodLoading}
              onChangeMethod={handleMethodChange}
              onChangeCoupon={handleSetCoupon}
              onApplyCoupon={handleApplyCoupon}
            />

            <StripePayment grandTotal={grandTotal} />
          </div>
        </div>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
};

export default CheckoutTestScreen;
