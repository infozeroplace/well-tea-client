"use client";

import { env } from "@/config/env";
import { addToCart } from "@/services/features/cart/cartSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function ManageProduct({ product }) {
  const [purchaseType, setPurchaseType] = useState("one-time");

  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const dispatch = useDispatch();
  const [selectedUnitObj, setSelectedUnitObj] = useState(
    product?.unitPrices?.[0]
  );
  const [selectedSubObj, setSelectedSubObj] = useState(
    product?.subscriptions?.[0]
  );
  const [productPrice, setProductPrice] = useState(
    product.isSale
      ? toNumber(selectedUnitObj?.salePrice)
      : selectedUnitObj?.price
  );
  const [totalPrice, setTotalPrice] = useState(productPrice);

  // ---------- Handle Quantity Change ---------- //
  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increment" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  // ---------- Handle Unit Selection ---------- //
  const handleUnitSelect = (unitObj) => {
    setSelectedUnitObj(unitObj);
  };

  const handleSubscriptionChange = (e) => {
    const selectedSubscription = product?.subscriptions?.find(
      (sub) => sub._id === e.target.value
    );
    setSelectedSubObj(selectedSubscription);
  };

  // ---------- Handle Add-On Selection ---------- //
  const handleAddOnSelect = (addOn) => {
    setSelectedAddOns((prevAddOns) => {
      if (prevAddOns.some((a) => a.id === addOn.id)) {
        return prevAddOns.filter((a) => a.id !== addOn.id);
      } else {
        return [...prevAddOns, addOn];
      }
    });
  };

  // ---------- Calculate Total Price ---------- //
  useEffect(() => {
    const calculateProductPrice =
      product?.isSubscription && purchaseType === "subscribe"
        ? selectedUnitObj?.subscriptionPrice
        : product.isSale
        ? selectedUnitObj?.salePrice
        : selectedUnitObj?.price;

    const totalProductPrice =
      product?.isMultiDiscount && quantity >= product?.multiDiscountQuantity
        ? calculateProductPrice * quantity - product?.multiDiscountAmount
        : calculateProductPrice * quantity;

    const addOnPrice = selectedAddOns.reduce(
      (sum, addOn) =>
        sum +
        toNumber(
          addOn.isSale
            ? addOn.unitPrices[0]?.salePrice
            : addOn.unitPrices[0]?.price
        ),
      0
    );

    setTotalPrice(totalProductPrice + addOnPrice);
    setProductPrice(calculateProductPrice);
  }, [quantity, selectedUnitObj, purchaseType, selectedAddOns]);

  // ---------- Handle Add To Cart ---------- //
  const handleAddToCart = () => {
    const itemsToAdd = [
      {
        product,
        unitObj: selectedUnitObj,
        purchaseType,
        subObj: purchaseType === "subscribe" && selectedSubObj,
        quantity,
        productPrice: productPrice,
        addOns: [],
      },
      ...selectedAddOns.map((addOn) => ({
        product: addOn,
        productPrice: toNumber(
          addOn.isSale
            ? addOn.unitPrices[0]?.salePrice
            : addOn.unitPrices[0]?.price
        ),
        quantity: 1,
        addOns: [],
      })),
    ];
    itemsToAdd.forEach((item) => dispatch(addToCart(item)));

    // dispatch(
    //   addToCart({
    //     product,
    //     unitObj: selectedUnitObj,
    //     purchaseType,
    //     subObj: purchaseType === "subscribe" && selectedSubObj,
    //     quantity,
    //     productPrice: totalPrice / quantity,
    //     addOns: [],
    //   })
    // );
  };

  return (
    <div>
      <div className="my-5 text-brand__font__size__base">
        <h3 className="mb-4 font-normal">Product Unit</h3>
        <div className="flex gap-4">
          {product?.unitPrices?.map((item, index) => (
            <button
              key={item?.unit}
              onClick={() => handleUnitSelect(item)}
              className={`py-2 px-10 rounded-full ${
                selectedUnitObj === item
                  ? "bg-teagreen-600 text-white"
                  : "text-teagreen-600 bg-teagreen-100"
              }`}
            >
              {item?.unit}
            </button>
          ))}
        </div>
      </div>
      {/* --------------- Subscription Options -------------- */}
      <div className="my-10">
        <div className="">
          <div className="space-y-2">
            {/* ----------- One-Time Purchase Option ------------- */}
            <label className="flex items-center p-4 rounded-md bg-teagreen-100 text-teagreen-600">
              <input
                type="radio"
                name="purchaseType"
                value="one-time"
                checked={purchaseType === "one-time"}
                onChange={() => setPurchaseType("one-time")}
                className="form-radio h-5 w-5 text-green-600 mr-3"
              />
              <span className="">One-Time Purchase</span>
              <span className="ml-auto font-normal">
                £
                {product?.isSale ? (
                  <span>
                    <del>{toNumber(selectedUnitObj?.price).toFixed(2)}</del> £
                    {toNumber(selectedUnitObj?.salePrice).toFixed(2)}
                  </span>
                ) : (
                  toNumber(selectedUnitObj?.price).toFixed(2)
                )}
              </span>
            </label>

            {/* ------------ Subscribe and Save Option ------------- */}
            {product?.isSubscription && (
              <div className="border rounded-md px-4 py-3 bg-teagreen-100 text-teagreen-600">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="purchaseType"
                    value="subscribe"
                    checked={purchaseType === "subscribe"}
                    onChange={() => setPurchaseType("subscribe")}
                    className="form-radio h-5 w-5 text-green-600 mr-3"
                  />
                  <span className="">Subscribe and Save</span>
                  <span className="ml-auto">
                    <del>{toNumber(selectedUnitObj?.price).toFixed(2)}</del> £
                    {toNumber(selectedUnitObj?.subscriptionPrice).toFixed(2)}
                  </span>
                </label>

                {/* -------------- Subscription Frequency Options ------------- */}
                {purchaseType === "subscribe" && (
                  <div className="mt-4 space-y-2">
                    <select
                      value={selectedSubObj?._id}
                      onChange={handleSubscriptionChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teagreen-600"
                    >
                      {product?.subscriptions?.map((item) => (
                        <option
                          key={item?._id}
                          value={item?._id}
                          className="p-2 bg-white "
                        >
                          {item?.weeks}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* --------------- Subscribe and Save Description -------------- */}
          {purchaseType === "subscribe" && (
            <div className="mt-5">
              <h3 className="font-normal">Subscribe and Save</h3>
              <p className="mt-4 text-brand__font__size__sm text-gray-600">
                You're subscribing to receive this item multiple times, on a
                recurring basis (according to the frequency you select) with a
                discount on every recurring order. You may cancel or change your
                subscription at any time.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --------------- Helpful Addons --------------- */}
      {product?.addOns && (
        <div className="mb-6">
          <h3 className="text-lg font-brand__font__regular mb-4">
            Helpful Add-Ons
          </h3>
          {product?.addOns?.map((addOn) => (
            <div
              key={addOn._id}
              className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4"
            >
              <Link href={addOn.urlParameter} className="flex items-center">
                <img
                  src={`${env.image_path}/${addOn?.thumbnails[0]}`}
                  alt={addOn?.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="text-teagreen-800 font-brand__font__light">
                    {addOn?.title}
                  </p>
                  {addOn?.isSale ? (
                    <p>
                      £{toNumber(addOn?.unitPrices[0]?.salePrice).toFixed(2)}
                    </p>
                  ) : (
                    <p>{toNumber(addOn?.unitPrices[0]?.price).toFixed(2)}</p>
                  )}
                </div>
              </Link>
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={selectedAddOns.some((a) => a._id === addOn._id)}
                onChange={() => handleAddOnSelect(addOn)}
              />
            </div>
          ))}
        </div>
      )}
      {/* ------------ Add to cart Button ----------- */}
      <div className="flex mb-6 border text-brand__font__size__base">
        <div className="max-w-[100px] w-full flex items-center justify-center bg-teagreen-600 text-white py-2.5">
          <button
            className=" text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("decrement")}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>
        <button
          className="w-full bg-teagreen-700 text-white py-2 px-6"
          onClick={handleAddToCart}
        >
          Add to Cart - £{toNumber(totalPrice).toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default ManageProduct;
