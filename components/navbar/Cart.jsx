import React, { useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { SectionButton } from "../shared";
import { PiTrashSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const Cart = ({ buttonClass }) => {
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
      price: 34.30,
      originalPrice: 23.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 3,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 15.0,
      originalPrice: 21.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 4,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 22.08,
      originalPrice: 28.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 5,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 35.76,
      originalPrice: 43.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 6,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 15.0,
      originalPrice: 24.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 7,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 12.30,
      originalPrice: 18.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
    {
      id: 8,
      name: "Breakfast Tea Bag",
      category: "Black Tea",
      price: 15.0,
      originalPrice: 23.0,
      quantity: 2,
      image: "/products/product_03.jpg",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const cartItemss = useSelector((state) => state.cart.items);

  const cartItemsCount = cartItemss.length;

  console.log(cartItemss);

  const shippingCost = 20.0;

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
        {cartItemsCount > 0 && (
          <span className="absolute top-2 right-2 z-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemsCount}
          </span>
        )}
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>

      {/* ------ Cart -------- */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[450px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b h-14">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            <RxCross1 />
          </button>
        </div>
        {/* ------ Cart Items ------ */}
        <div className="flex flex-col">
          <div className="overflow-y-auto h-[calc(100vh-15rem)]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-2 py-3 border-b hover:bg-teagreen-100 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-3"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-sm font-light">{item.name}</h3>
                  <p className="text-sm">{item.category}</p>
                  <p className="text-sm font-normal">
                    ${item.price.toFixed(2)} AUD
                  </p>
                </div>
                <div className="flex items-center border text-base font-light">
                  <button className="px-2 py-2 bg-gray-50 hover:bg-gray-100">
                    <PiTrashSimpleLight className="" />
                  </button>
                  <button className="px-2 py-1 bg-gray-50 hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button className="px-2 py-1 bg-gray-50 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* --------- Cart Bottom --------- */}
          <div className="p-4 border-t text-sm mt-auto">
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
            <SectionButton
              title="View basket and checkout"
              buttonClass="!w-full px-10"
            />
          </div>
        </div>
      </div>
      {/* -------- Mask -------- */}
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
