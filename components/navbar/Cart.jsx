import React, { useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { SectionButton } from "../shared";

const Cart = ({ buttonClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Palazzo Tea",
      category: "Green Tea",
      price: 21.82,
      originalPrice: 40.0,
      quantity: 1,
      image: "/products/product_01.jpg",
    },
    {
      id: 2,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 15.0,
      originalPrice: 23.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
  ];

  const shippingCost = 35.0;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={buttonClass}>
        <PiShoppingCartThin />
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>

      {/* Sliding Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center py-5 border-b hover:bg-teagreen-100 bg-opacity-10 duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-sm font-semibold">
                    ${item.price.toFixed(2)} AUD
                    <span className="text-xs line-through text-gray-400">
                      Was: ${item.originalPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-base">
                  <button className="px-2 py-1 border">-</button>
                  <span className="">{item.quantity}</span>
                  <button className="px-2 py-1 border">+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t text-sm mb-auto">
            <div className="flex justify-between text-sm">
              <span>Items ({totalItems})</span>
              <span>${subtotal.toFixed(2)} AUD</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)} AUD</span>
            </div>
            <div className="flex justify-between font-semibold mb-5">
              <span>Total</span>
              <span>${total.toFixed(2)} AUD</span>
            </div>
            {/* <button className="mt-4 px-10 bg-black text-white py-2 rounded">
            View basket and checkout
          </button> */}
            <SectionButton
              title="View basket and checkout"
              buttonClass="!w-full px-10"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Cart;
