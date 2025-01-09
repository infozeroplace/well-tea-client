"use client"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SectionButton } from "@/components";
import { updateQuantity, removeFromCart } from "@/services/features/cart/cartSlice";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const CartPage = () => {
  // const cartItems =[
  //   {
  //     id: 1,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_01.jpg",
  //     category: "Green Tea",
  //     weight: 42,
  //     price: 20.5,
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_03.jpg",
  //     category: "Black Tea",
  //     weight: 42,
  //     price: 30.5,
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_01.jpg",
  //     category: "Black Tea",
  //     weight: 42,
  //     price: 30.5,
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_03.jpg",
  //     category: "Black Tea",
  //     weight: 42,
  //     price: 30.5,
  //     quantity: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_01.jpg",
  //     category: "Black Tea",
  //     weight: 42,
  //     price: 30.5,
  //     quantity: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "White Tera Rose Melange",
  //     image: "/products/product_03.jpg",
  //     category: "Black Tea",
  //     weight: 42,
  //     price: 30.5,
  //     quantity: 1,
  //   },
  // ];
  
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  const shippingCost = totalQuantity > 0 ? 20.0 : 0;

  const handleIncreaseQuantity = (productId, unit, currentQuantity, purchaseType) => {
      dispatch(
        updateQuantity({
          productId,
          unit,
          quantity: currentQuantity + 1,
          purchaseType,
        })
      )
    }
  
    const handleDecreaseQuantity = (productId, unit, currentQuantity, purchaseType) => {
      if(currentQuantity > 1){
        dispatch(
          updateQuantity({
            productId,
            unit,
            quantity: currentQuantity - 1,
            purchaseType,
          })
        )
      } else {
        dispatch(
          removeFromCart({ productId, unit, purchaseType })
        )
      }
    }
  
    const handleRemoveItem = (productId, unit, purchaseType) => {
      dispatch(
        removeFromCart({ productId, unit, purchaseType })
      )
    }
  
    const handleEmptyCart = () => {
      return (
        <div className="flex items-center justify-center h-96">
          <h3>Your cart is empty!</h3>
        </div>
      )
    }

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="flex gap-10">
        {/* Cart Section */}
        <div className="w-4/6 bg-white rounded-lg shadow-md overflow-y-auto">
          <div className="p-5">
            <h2 className="text-2xl font-normal mb-4">Cart</h2>
            <p className="mb-6">{cartItems.length} items in your cart.</p>
          </div>
          <div className="">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-left text-base">
                  <th className="py-3 font-medium pl-5">Product</th>
                  <th className="py-3 font-medium">Price</th>
                  <th className="py-3 font-medium text-center">Quantity</th>
                  <th className="py-3 font-medium text-right pr-5">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-teagreen-100"
                  >
                    <td className="py-4 flex items-center gap-4 pl-5">
                      <img
                        // src={item.thumbnails[0].path}
                        src="/products/product_01.jpg"
                        alt={item.product.title}
                        className="w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-light">{item.product.title}</h4>
                        <p className="text-sm text-gray-500">
                          Weight: {item.unitObj.unit}
                        </p>
                        {item.purchaseType === "subscribe" && (
                          <p className="text-sm text-gray-500">
                            Subscription: {item.subObj?.weeks}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 font-light">
                      £{toNumber(item.productPrice).toFixed(2)}
                    </td>
                    <td className="py-4 text-center font-light">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            handleDecreaseQuantity(
                              item.product._id,
                              item.unitObj.unit,
                              item.quantity,
                              item.purchaseType
                            )
                          }
                          className="w-8 h-8 border rounded bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleIncreaseQuantity(
                              item.product._id,
                              item.unitObj.unit,
                              item.quantity,
                              item.purchaseType
                            )
                          }
                          className="w-8 h-8 border rounded bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right font-light pr-5">
                      £{(item.productPrice * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cartItems.length < 1 && (
              <div className="flex items-center justify-center h-96">
                <h3>Your cart is empty!</h3>
              </div>
            )}
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-2/6 sticky top-0 h-screen">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-light mb-4">Coupon Code</h3>
            <p className="text-sm mb-4">
              Enter a coupon code to get a discount.
            </p>
            <input
              type="text"
              placeholder="Coupon Code"
              //   value={coupon}
              className="w-full border rounded-lg px-4 py-2 mb-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-teagreen-600 text-white rounded-lg px-4 py-2 w-full">
              Apply
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-normal mb-4">Cart Total</h3>
            <div className="flex justify-between font-light mb-2">
              <span>Total Items</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between font-light mb-2">
              <span>Sub Total</span>
              <span>£{toNumber(totalCost).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-light mb-2">
              <span>Shipping Cost</span>
              <span>£{toNumber(shippingCost).toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-md mt-2">
              <span>Total</span>
              <span>£{toNumber(totalCost + shippingCost).toFixed(2)}</span>
            </div>
            <div className="w-full mt-10">
              <SectionButton title="Checkout" buttonClass="!w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
