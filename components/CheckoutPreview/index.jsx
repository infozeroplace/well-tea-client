"use client";

import { env } from "@/config/env";
import useToast from "@/hooks/useToast";
import { useApplyCouponMutation } from "@/services/features/coupon/couponApi";
import { AiOutlineTag } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import NextImage from "../shared/NextImage";

const CheckoutPreview = ({
  cartId,
  cartItems,
  totalProductQnt,
  subtotal,
  shippingCost,
  grandTotal,
  methods,
  selectedMethod,
  coupon,
  discount,
  discountPrice,
  onSelectMethod,
  onChangeCoupon,
  onDiscount,
  onRemoveDiscount,
}) => {
  const { handleSuccess, handleError } = useToast();

  const [applyCoupon, { isLoading }] = useApplyCouponMutation();

  const handleApplyCoupon = async () => {
    if (!cartId || !coupon || discount) return;

    try {
      const { data } = await applyCoupon({
        data: {
          cartId,
          coupon,
        },
      }).unwrap();

      handleSuccess("Congratulations you got discount");
      onDiscount(data);
      onChangeCoupon("");
    } catch (error) {
      handleError(error?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {discount ? (
        <div className="uppercase bg-gray-200 font-brand__font__500 w-fit py-1 px-2 rounded text-brand__font__size__xs flex items-center gap-1 border">
          <AiOutlineTag size={16} /> <span>{discount?.coupon}</span>{" "}
          <button onClick={onRemoveDiscount}>
            <IoIosClose size={20} />
          </button>
        </div>
      ) : (
        <div className="flex border rounded w-full">
          <input
            value={coupon}
            onChange={(e) => onChangeCoupon(e.target.value)}
            type="text"
            placeholder="Discount code or gift card"
            className="flex-grow px-3 py-2 text-gray-700 outline-none placeholder:text-brand__font__size__sm"
          />
          <button
            onClick={handleApplyCoupon}
            disabled={!coupon || discount}
            className={`w-[100px] px-4 py-2 text-sm font-semibold ${
              !coupon || discount
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : "bg-blue-500 text-white"
            } `}
          >
            {isLoading ? "Checking..." : "Apply"}
          </button>
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-col gap-5">
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="max-w-[64px] max-h-[64px] h-full w-full border rounded relative bg-teagreen-200">
              <NextImage
                img={env.app_url + item.thumbnail.filepath}
                presets={{ width: 50, height: 50 }}
                alt={item.thumbnail.alternateText}
                className="h-full w-full"
              />
              <div className="bg-teagreen-700 w-5 h-5 rounded-full flex justify-center items-center text-brand__font__size__xs text-white absolute -top-2 -right-2">
                {item.quantity}
              </div>
            </div>
            <div className="flex justify-between w-full gap-2">
              <div className="h-fit">
                <p>{item.title}</p>
                <p>{item.unit}</p>
              </div>
              <div className="font-semibold h-fit">
                <p>£{item.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex gap-2 justify-between items-center">
          <span>Subtotal - ({totalProductQnt})</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>

        {discount && (
          <div className="flex gap-2 justify-between items-center">
            <span className="text-[#12A000] text-brand__font__size__xs block max-w-[125px] leading-tight">
              Discounts applied for subtotal above.
            </span>
            <span className="text-[#12A000]">-£{discountPrice.toFixed(2)}</span>
          </div>
        )}

        <div className="flex gap-2 justify-between items-center">
          <span>Shipping</span>
          <span>£{shippingCost.toFixed(2)}</span>
        </div>

        <div className="flex gap-2 justify-between items-center text-brand__font__size__md font-brand__font__500 border-t pt-3">
          <span>Total</span>
          <span>£{grandTotal}</span>
        </div>
      </div>

      {/* Shipping Method Selection */}
      <div className="flex flex-col gap-2">
        <span>Shipping Method</span>
        <div className="flex flex-col gap-2">
          {methods?.map((method) => (
            <label
              key={method._id}
              className={`flex items-center gap-2 cursor-pointer text-brand__font__size__sm w-fit`}
            >
              <input
                type="radio"
                name="shippingMethod"
                value={method._id}
                checked={selectedMethod?._id === method._id}
                onChange={onSelectMethod}
                className="cursor-pointer"
              />
              <span>
                {method.title} - £{method.cost.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPreview;
