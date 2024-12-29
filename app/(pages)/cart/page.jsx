"use client"
import { SectionButton } from "@/components";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "White Tera Rose Melange",
      image: "/products/product_01.jpg", // Replace with actual URLs
      category: "Green Tea",
      weight: 42,
      price: 20.5,
      quantity: 1,
    },
    {
      id: 2,
      name: "White Tera Rose Melange",
      image: "/products/product_03.jpg", // Replace with actual URLs
      category: "Black Tea",
      weight: 42,
      price: 30.5,
      quantity: 1,
    },
    {
      id: 3,
      name: "White Tera Rose Melange",
      image: "/products/product_01.jpg", // Replace with actual URLs
      category: "Black Tea",
      weight: 42,
      price: 30.5,
      quantity: 1,
    },
    {
      id: 4,
      name: "White Tera Rose Melange",
      image: "/products/product_03.jpg", // Replace with actual URLs
      category: "Black Tea",
      weight: 42,
      price: 30.5,
      quantity: 1,
    },
    {
      id: 5,
      name: "White Tera Rose Melange",
      image: "/products/product_01.jpg", // Replace with actual URLs
      category: "Black Tea",
      weight: 42,
      price: 30.5,
      quantity: 1,
    },
    {
      id: 6,
      name: "White Tera Rose Melange",
      image: "/products/product_03.jpg", // Replace with actual URLs
      category: "Black Tea",
      weight: 42,
      price: 30.5,
      quantity: 1,
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="flex gap-10">
        {/* Cart Section */}
        <div className="w-4/6 bg-white rounded-lg shadow-md">
          <div className="p-5">
            <h2 className="text-2xl font-normal mb-4">Cart</h2>
            <p className="mb-6">{cartItems.length} items in your cart.</p>
          </div>
          <div className="px-5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-left text-base">
                  <th className="py-3 font-medium">Product</th>
                  <th className="py-3 font-medium">Price</th>
                  <th className="py-3 font-medium text-center">Quantity</th>
                  <th className="py-3 font-medium text-right">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-light">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          Weight: {item.weight}g
                        </p>
                      </div>
                    </td>
                    <td className="py-4 font-light">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-4 text-center font-light">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 border rounded bg-gray-100 hover:bg-gray-200">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="w-8 h-8 border rounded bg-gray-100 hover:bg-gray-200">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right font-light">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-2/6">
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
              <span>Subtotal</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between font-light mb-2">
              <span>Shipping Cost</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between font-light mb-2">
              <span>Discount</span>
              <span>$10</span>
            </div>
            <hr />
            <div className="flex justify-between text-md mt-2">
              <span>Total</span>
              <span>$30</span>
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
