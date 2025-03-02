"use client";

import { env } from "@/config/env";

const CheckoutPreview = ({
  user,
  carts,
  totalPrice,
  shippingCost,
  grandTotal,
  methods,
  selectedMethod,
  coupon,
  discountAmount,
  applyCouponLoading,
  onChangeMethod,
  onChangeCoupon,
  onApplyCoupon,
}) => {
  const cartItems = carts?.items || [];

  return (
    <div className="xl:max-w-[500px] w-full h-full">
      <div className="flex flex-col gap-4">
        {/* Cart Items */}
        <div className="flex flex-col gap-5">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="max-w-[64px] max-h-[64px] h-full w-full border rounded relative bg-teagreen-200">
                <img
                  src={env.app_url + item.thumbnail.filepath}
                  alt={item.thumbnail.alternateText}
                  className="h-full w-full"
                />
                <div className="bg-teagreen-700 w-5 h-5 rounded-full flex justify-center items-center text-brand__font__size__xs text-white absolute -top-2 -right-2">
                  {item.quantity}
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <p>{item.title}</p>
                  <p>{item.unit}</p>
                </div>
                <div className="px-2 font-semibold">
                  <p>£{item.totalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {user && (
          <div className="flex border border-gray-300 rounded-md overflow-hidden w-full">
            <input
              value={coupon}
              onChange={(e) => onChangeCoupon(e.target.value)}
              type="text"
              placeholder="Discount code or gift card"
              className="flex-grow px-3 py-2 text-gray-700 outline-none placeholder:text-brand__font__size__sm"
            />
            <button
              onClick={onApplyCoupon}
              disabled={!coupon || discountAmount}
              className={`w-[100px] px-4 py-2 text-sm font-semibold ${
                !coupon || discountAmount
                  ? "cursor-not-allowed bg-gray-200 text-gray-500 "
                  : "bg-blue-500 text-white"
              } `}
            >
              {applyCouponLoading ? "Loading..." : "Apply"}
            </button>
          </div>
        )}

        {/* Summary Section */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex gap-2 justify-between items-center">
            <span>Subtotal - {carts?.totalQuantity || 0} items</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-2 justify-between items-center">
            <span>Shipping</span>
            <span>£{shippingCost.toFixed(2)}</span>
          </div>

          <div className="flex gap-2 justify-between items-center text-brand__font__size__md font-brand__font__500">
            <span>Total</span>
            <span>£{grandTotal}</span>
          </div>
        </div>

        {/* Shipping Method Selection */}
        <div className="flex flex-col gap-2 border-t pt-4">
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
                  onChange={onChangeMethod}
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
    </div>
  );
};

export default CheckoutPreview;
