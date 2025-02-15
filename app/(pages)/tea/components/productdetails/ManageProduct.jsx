"use client";

import { env } from "@/config/env";
import { addToCart } from "@/services/features/cart/cartSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/services/hook";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import { toast } from "react-hot-toast";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function ManageProduct({ product }) {
  const [addToCart, { data: addToCartData, isLoading: addToCartLoading }] = useAddToCartMutation();
  const [purchaseType, setPurchaseType] = useState("one_time");
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
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

  const dispatch = useAppDispatch();
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
      if (prevAddOns.some((a) => a._id === addOn._id)) {
        return prevAddOns.filter((a) => a._id !== addOn._id);
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

  const handleAddToCart = async () => {
    await addToCart({
      data: {
        productId: product?._id,
        unitPriceId: selectedUnitObj?._id,
        actionType: "plus",
        purchaseType: purchaseType,
        subscriptionId: selectedSubObj?._id ? selectedSubObj?._id : "",
        quantity: quantity,
      },
    });

    if (selectedAddOns.length > 0) {
      const addOnPromises = selectedAddOns.map((addOn) =>
        addToCart({
          data: {
            productId: addOn?._id,
            unitPriceId: addOn?.unitPrices[0]?._id,
            actionType: "plus",
            purchaseType: purchaseType,
            subscriptionId: selectedSubObj?._id || "",
            quantity: 1,
          },
        })
      );
      await Promise.all(addOnPromises);
    }

  };

  useEffect(() => {
    if (addToCartData?.message) {
      toast.success(addToCartData?.message);
    }
    setSelectedAddOns([]);
    setQuantity(1);
  }, [addToCartData]);

  return (
    <>
      <div className="mt-4 text-brand__font__size__base">
        <h3 className="text-teagreen-700 mb-1 font-normal text-brand__font__size__sm">
          Choose type:
        </h3>
        <div className="flex flex-wrap gap-2">
          {product?.unitPrices?.map((item, index) => (
            <button
              key={item?.unit}
              onClick={() => handleUnitSelect(item)}
              className={`py-1.5 px-10 text-teagreen-600 text-brand__font__size__sm font-brand__font__500 border ${
                selectedUnitObj === item
                  ? "border-teagreen-800"
                  : "border-teagreen-400 hover:border-teagreen-600 duration-300"
              }`}
            >
              {item?.unit}
            </button>
          ))}
        </div>
      </div>
      {/* --------------- Subscription Options -------------- */}
      <div className="my-10">
        <div className="space-y-2">
          {/* ----------- One-Time Purchase Option ------------- */}
          <label className="border flex items-center px-4 py-3 rounded-md bg-teagreen-100 text-teagreen-600">
            <input
              type="radio"
              name="purchaseType"
              value="one_time"
              checked={purchaseType === "one_time"}
              onChange={() => setPurchaseType("one_time")}
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
                <span>{toNumber(selectedUnitObj?.price).toFixed(2)}</span>
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
                  className="form-radio h-5 w-5 text-teagreen-600 mr-3"
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

      {/* --------------- Helpful Addons --------------- */}
      {product?.addOns?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-brand__font__regular mb-4">
            Helpful Add-Ons
          </h3>
          {product?.addOns?.map((addOn, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between hover:bg-teagreen-300 duration-300 ${
                idx !== product?.addOns.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <Link
                href={addOn?.urlParameter || ""}
                className="flex items-center"
              >
                <img
                  src={`${env.app_url}${addOn?.thumbnails[0]?.filepath}`}
                  alt={addOn?.thumbnails[0]?.alternateText}
                  className="max-w-[80px] w-full h-[80px] object-cover mr-4"
                />
                <div>
                  <p className="text-teagreen-800 font-brand__font__light text-brand__font__size__sm">
                    {addOn?.title}
                  </p>

                  {addOn?.isSale ? (
                    <span className="font-brand__font__regular text-brand__font__size__sm">
                      £{toNumber(addOn?.unitPrices[0]?.salePrice).toFixed(2)}{" "}
                      <span className="text-gray-500">
                        was £{toNumber(addOn?.unitPrices[0]?.price).toFixed(2)}
                      </span>
                    </span>
                  ) : (
                    <span className="font-brand__font__regular text-brand__font__size__sm">
                      £{toNumber(addOn?.unitPrices[0]?.price).toFixed(2)}
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-teagreen-800 cursor-pointer"
                  checked={selectedAddOns.some((a) => a._id === addOn._id)}
                  onChange={() => handleAddOnSelect(addOn)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {/* ------------ Add to cart Button ----------- */}
      <div className="flex mb-6 gap-1 text-brand__font__size__base">
        <div className="max-w-[100px] w-full flex items-center justify-center bg-teagreen-200 text-teagreen-800 py-2.5 border border-teagreen-600">
          <button
            className=" text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("decrement")}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d+$/.test(value) || value === "") {
                setQuantity(value === "" ? 1 : Number(value));
              }
            }}
            onBlur={() => {
              if (!quantity || quantity < 1) setQuantity(1);
            }}
            className="w-10 text-center bg-transparent border-none outline-none"
          />

          <button
            className="text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>
        <button
          className="w-full bg-teagreen-800 hover:bg-teagreen-600 duration-300 text-white py-2 px-6 border border-teagreen-600"
          onClick={handleAddToCart}
        >
          Add to Cart - £{toNumber(totalPrice).toFixed(2)}
        </button>
      </div>
      
      <LoadingOverlay isLoading={addToCartLoading} />
    </>
  );
}

export default ManageProduct;
