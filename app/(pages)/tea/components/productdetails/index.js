"use client"

import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "@/services/features/cart/cartSlice";
import StarRatingDisplay from "./StarRatingDisplay";

const ProductDetails = ({ product }) => {
  const addOns = [
    { id: 1, name: "Tea Timer", price: 11.6 },
    { id: 2, name: "Glass Cup & Saucer, 300ml", price: 58.3 },
    { id: 3, name: "One Cup Teapot, 250ml", price: 27.9 },
  ];
  const availableOptions = ["Loose Leaf", "Tea Bags", "Tea Caddy"];

  const cartItems = useSelector((state) => state.cart.itmes);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto pr-10 py-8">
      <div className="">
        <div className="mb-6">
          <h4 className="text-green-800 font-semibold">{product.type}</h4>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2">Floral, Edamame, Cut Grass</p>
          <p className="">From Hunan, China</p>
          <div className="">
            <StarRatingDisplay rating={product.rating} />
          </div>
          <p className=" mt-4">
            Adipisicing aliqua consequat aliqua amet aliquip tempor elit Lorem
            eiusmod veniam amet. Laboris sunt aliqua ut cillum ipsum sint.
            Incididunt aute sint elit voluptate ut deserunt nulla laborum. Duis
            deserunt cillum velit occaecat excepteur eu aliquip anim eu. Id nisi
            aute magna cillum magna qui quis et ea officia eiusmod exercitation.
            Id fugiat cupidatat qui voluptate reprehenderit nisi aute elit
            ullamco enim culpa elit aliquip minim.
          </p>
        </div>

        <div className="my-5">
          <h3 className="mb-4 font-normal">Available As</h3>
          <div className="flex gap-4">
            {availableOptions.map((item) => (
              <Link
                href="/"
                key={item}
                className=" py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-5">
          <h3 className="mb-4 font-normal">Product Weight</h3>
          <div className="flex gap-4">
            {product.weight.map((item) => (
              <button
                key={item}
                className=" py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="my-5">Subscribe Section</div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Helpful Add-Ons</h3>
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4"
            >
              <div className="flex items-center">
                <img
                  src={product.hoverImage}
                  alt={addOn.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="text-teagreen-800 font-normal">{addOn.name}</p>
                  <p className="">£{addOn.price.toFixed(2)}</p>
                </div>
              </div>
              <input
                type="checkbox"
                className="w-5 h-5"
                // checked={addOns.includes(addOn.id)}
                // onChange={() => handleAddOnChange(addOn.id)}
              />
            </div>
          ))}
        </div>

        <div className="flex mb-6">
          <div className="flex items-center bg-teagreen-600 text-white py-1">
            <button
              className="w-10 h-10 text-xl flex items-center justify-center"
              // onClick={() => handleQuantityChange("decrement")}
            >
              -
            </button>
            <span className="px-4 text-lg"></span>
            <button
              className="w-10 h-10 text-xl flex items-center justify-center"
              // onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>
          <button className="bg-teagreen-700 text-white py-2 px-6 text-lg">
            Add to Cart - £{product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
