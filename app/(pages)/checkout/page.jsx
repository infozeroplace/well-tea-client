"use client";

import AddressSelection from "@/components/AddressSelection";
import CheckoutPreview from "@/components/CheckoutPreview";
import EmailSelection from "@/components/EmailSelection";
import EmptyBasket from "@/components/EmptyBasket";
import StripePayment from "@/components/StripePayment";
import { useAddressQuery } from "@/services/features/address/addressApi";
import { useSMethodsQuery } from "@/services/features/shipping/shippingApi";
import { useAppSelector } from "@/services/hook";
import detectCountry from "@/utils/getCountry";
import { useEffect, useMemo, useState } from "react";

const errors = {
  email: "",
  sFirstName: "",
  sLastName: "",
  sAddress: "",
  sCity: "",
  sPostalCode: "",
  sPhone: "",
  bFirstName: "",
  bLastName: "",
  bAddress: "",
  bCity: "",
  bPostalCode: "",
  bPhone: "",
};

const CheckoutTestScreen = () => {
  const {
    auth: { user },
    carts: { carts },
  } = useAppSelector((state) => state);

  const [email, setEmail] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [isShipping, setIsShipping] = useState(true);
  const [defaultCountry, setDefaultCountry] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [requiredErrors, setRequiredErrors] = useState(errors);

  // Fetch saved addresses
  const { data: { data: savedAddresses = [] } = {} } = useAddressQuery(
    {},
    { skip: !user }
  );

  // Fetch shipping methods based on the country
  const { data: sm } = useSMethodsQuery({
    country: shippingAddress?.country || defaultCountry,
  });

  // Memoized values
  const methods = useMemo(() => sm?.data?.methods || [], [sm]);

  const cartId = useMemo(() => carts?._id || null, [carts]);
  const cartItems = useMemo(() => carts?.items || [], [carts]);
  const totalProductQnt = useMemo(() => carts?.totalQuantity || 0, [carts]);

  const shippingMethodId = useMemo(
    () => selectedMethod?._id || null,
    [selectedMethod]
  );

  // Calculated values
  const { discountPrice, subtotal, shippingCost, grandTotal } = useMemo(() => {
    let discountPrice = 0;

    if (discount && !coupon) {
      discountPrice =
        discount?.discountType === "percent"
          ? (carts?.totalPrice / 100) * discount.discount
          : discount.discount;
    }

    const subtotal = (carts?.totalPrice || 0) - discountPrice;
    const shippingCost = selectedMethod?.cost || 0;
    const grandTotal = Number((subtotal + shippingCost).toFixed(2));

    return { discountPrice, subtotal, shippingCost, grandTotal };
  }, [carts, discount, selectedMethod]);

  // Set default shipping method when methods are fetched
  useEffect(() => {
    if (methods?.length > 0) {
      setSelectedMethod(methods[0]);
    }
  }, [methods?.length]);

  // Set user email if logged-in
  useEffect(() => {
    if (user?.email) setEmail(user?.email);
  }, [user?.email]);

  // Set default shipping address
  useEffect(() => {
    if (savedAddresses?.length > 0) {
      const defaultShipping =
        savedAddresses.find((addr) => addr?.isDefault) || savedAddresses[0];
      setShippingAddress(defaultShipping);
      setBillingAddress(defaultShipping);
    } else {
      detectCountry().then((country) => {
        if (country) {
          setDefaultCountry(country.toLowerCase());
          setShippingAddress((prev) => ({
            ...prev,
            country: country.toLowerCase(),
          }));
          setBillingAddress((prev) => ({
            ...prev,
            country: country.toLowerCase(),
          }));
        }
      });
    }
  }, [savedAddresses?.length]);

  useEffect(() => {
    const fields = [
      { value: email, key: "email" },
      { value: shippingAddress?.firstName, key: "sFirstName" },
      { value: shippingAddress?.lastName, key: "sLastName" },
      { value: shippingAddress?.address1, key: "sAddress" },
      { value: shippingAddress?.city, key: "sCity" },
      { value: shippingAddress?.postalCode, key: "sPostalCode" },
      { value: shippingAddress?.phone, key: "sPhone" },
      ...(!isShipping
        ? [
            { value: billingAddress?.firstName, key: "bFirstName" },
            { value: billingAddress?.lastName, key: "bLastName" },
            { value: billingAddress?.address1, key: "bAddress" },
            { value: billingAddress?.city, key: "bCity" },
            { value: billingAddress?.postalCode, key: "bPostalCode" },
            { value: billingAddress?.phone, key: "bPhone" },
          ]
        : []),
    ];

    fields.forEach(({ value, key }) => {
      if (value) {
        handleRequiredErrors(key, "");
      }
    });
  }, [
    email,
    shippingAddress?.firstName,
    shippingAddress?.lastName,
    shippingAddress?.address1,
    shippingAddress?.city,
    shippingAddress?.postalCode,
    shippingAddress?.phone,
    billingAddress?.firstName,
    billingAddress?.lastName,
    billingAddress?.address1,
    billingAddress?.city,
    billingAddress?.postalCode,
    billingAddress?.phone,
  ]);

  // Handle shipping address change
  const handleShippingAdd = (event) => {
    const selectedAddress = savedAddresses.find(
      (addr) => addr._id === event.target.value
    );
    setShippingAddress(selectedAddress);
  };

  const handleChangeShippingAdd = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeBillingAdd = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Handle shipping method change
  const handleSelectMethod = (event) => {
    const method = methods.find((m) => m._id === event.target.value);
    setSelectedMethod(method);
  };

  const handleChangeIsShipping = (val) => setIsShipping(val);

  const handleChangeCoupon = (val) => setCoupon(val);

  const handleDiscount = (dis) => setDiscount(dis);

  const handleRemoveDiscount = () => setDiscount(null);

  const handleChangeEmail = (val) => setEmail(val);

  const handleRequiredErrors = (key, value) =>
    setRequiredErrors((prev) => ({ ...prev, [key]: value }));

  const props = {
    user,
    email,
    isShipping,
    savedAddresses,
    defaultCountry,
    coupon,
    cartId,
    shippingAddress,
    billingAddress: isShipping ? shippingAddress : billingAddress,
    shippingMethodId,
    grandTotal,
    cartItems,
    totalProductQnt,
    subtotal,
    shippingCost,
    methods,
    selectedMethod,
    discount,
    discountPrice,
    requiredErrors,
    onChangeEmail: handleChangeEmail,
    onSelectShippingAdd: handleShippingAdd,
    onChangeBillingAdd: handleChangeBillingAdd,
    onChangeIsShipping: handleChangeIsShipping,
    onChangeShippingAdd: handleChangeShippingAdd,
    onChangeCoupon: handleChangeCoupon,
    onSelectMethod: handleSelectMethod,
    onDiscount: handleDiscount,
    onRemoveDiscount: handleRemoveDiscount,
    onRequiredErrors: handleRequiredErrors,
  };

  if (!cartId || !cartItems.length) {
    return <EmptyBasket />;
  } else {
    return (
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10 w-full h-full">
        <div className="w-full flex flex-col xl:flex-row justify-center gap-5 py-10">
          <div className="xl:max-w-[500px] w-full h-full flex flex-col gap-4">
            <EmailSelection {...props} />

            <AddressSelection {...props} />
          </div>

          <div className="xl:max-w-[500px] w-full h-full flex flex-col gap-4">
            <CheckoutPreview {...props} />

            <StripePayment {...props} />
          </div>
        </div>
      </div>
    );
  }
};

export default CheckoutTestScreen;
