"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const CategoryCard = ({ item, url }) => {
  if (!item) return null;

  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();
  const isFavorite = false;

  const [addButtonClicked, setAddButtonClicked] = useState(false);

  const handleAddToCart = (weight) => {
    dispatch(
      addToCart({
        product: item,
        weight: weight,
        quantity: 1,
        addOns: [],
      })
    );
  };

  const handleWeight = () => {
    setAddButtonClicked(true);
  };

  return (
    <div
      onMouseLeave={() => {
        setAddButtonClicked(false);
      }}
      className=" max-w-[380px] bg-teagreen-100 p-4 mx-auto overflow-hidden"
    >
      {/* Sell and Favorite Section */}
      <div className="flex justify-between text-sm px-3">
        <div className="w-8">
          <img src="/products/label-sale.png" alt="Sale" />
        </div>
        {isFavorite ? (
          <div className="relative text-3xl cursor-pointer mr-3">
            <MdFavorite className="absolute" />
          </div>
        ) : (
          <div className="relative text-3xl cursor-pointer mr-3">
            <MdFavoriteBorder className="absolute transition-opacity duration-300 hover:opacity-0" />
            <MdFavorite className="absolute opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </div>
        )}
      </div>
     
      <div className="">
        {/* Product image and descriptions */}
        <Link href={CardUrl}>
          {/* Product Image */}
          <div className="relative group">
            <Image
              src="/products/product-front.png"
              className="mx-auto transition-opacity duration-300 group-hover:opacity-0"
              height={316}
              width={316}
              alt="Product Front"
            />
            <Image
              src="/products/product-back2.png"
              className="mx-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              height={316}
              width={316}
              alt="Product Back"
            />
          </div>
          
          {/* Product Content */}
          <div
            style={{ display: addButtonClicked ? "none" : "block" }}
            className="text-center bg-teagreen-100 w-full duration-400 mx-auto"
          >
            <div className="pb-3">
              <h4 className="md:text-sm lg:text-base font-normal text-teagreen-800">
                {item?.title}
              </h4>
              <div className="flex justify-between">
                <p>Format</p>

                {item?.discount && (
                  <div className="flex justify-center gap-2 text-xs lg:text-sm font-semibold text-teagreen-800">
                    <div>£{item?.discountPrice}</div> <del>£{item?.price}</del>
                  </div>
                )}
                {!item?.discount && (
                  <div className="text-xs lg:text-sm font-semibold text-teagreen-800">
                    £{item?.price}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
        {/* Add to card */}
        <div
          className={`border-t transform bg-teagreen-100 w-full mx-auto transition-all duration-400 ${
            addButtonClicked ? "hidden" : "block"
          }`}
        >
          <button
            onClick={handleWeight}
            className="uppercase text-xs py-4 text-center w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400"
          >
            add to cart
          </button>
        </div>

        {/* Weight Selection*/}
        <div
          className={` ${
            addButtonClicked
              ? "block bg-teagreen-100 transition-transform duration-400 -mt-[18px] py-1"
              : "hidden transition-transform duration-400"
          }`}
        >
          <p className="uppercase text-center py-1 text-sm border-b">
            Choose weight for cart
          </p>
          <div className="flex justify-between px-4 py-1">
            {item?.weight?.map((singleWeight, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAddToCart(singleWeight);
                }}
                className={`flex flex-col items-center ${
                  index <= singleWeight.length ? "border-r" : ""
                } w-full py-1 text-teagreen-400 hover:text-teagreen-600`}
              >
                <div>{singleWeight}</div>
                <div>|</div>
                <div>£{item?.discount ? item?.discountPrice : item?.price}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
