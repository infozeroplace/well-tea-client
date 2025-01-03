"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";
import StarRatingDisplay from "../shared/StarRatingDisplay";
import { useState } from "react";

const CategoryCard = ({ item, url }) => {
  if (!item) return null;

  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();

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
      className="relative w-full aspect-[362/482] group overflow-hidden"
    >
      {/* Discount Section */}
      <div className="absolute z-10 inset-x-0 flex justify-center items-center text-white text-sm gap-2">
        {item?.designation && (
          <div className="uppercase bg-teagreen-600 w-fit px-2 py-1">
            {item?.designation}
          </div>
        )}
        {item?.discount && (
          <div className=" bg-teagreen-500 w-fit px-2 py-1">
            -{item?.discount}%
          </div>
        )}
      </div>
      <div className="aspect-square">
        {/* Background Image */}
        <img
          src={item?.image}
          alt="New Product"
          className="w-full opacity-100 group-hover:opacity-0 duration-400"
        />
      </div>

      <div className="absolute inset-0 -mt-[13px]">
        {/* Product image and descriptions */}
        <Link href={CardUrl}>
          {/* Product Image */}
          <div className="overflow-hidden">
            <img
              src={item?.hoverImage}
              className="opacity-0 group-hover:opacity-100 h-full duration-400"
            />
          </div>
          {/* Product Content */}
          <div style={{ display: addButtonClicked ? "none" : "block"}} className="text-center opacity-0 group-hover:opacity-100 group-hover:bg-teagreen-100 w-full group-hover:-translate-y-40 duration-400 mx-auto">
            <div className="py-3">
              <h5 className="text-sm lg:text-base text-teagreen-800">
                {item?.type}
              </h5>
              <h4 className="md:text-base lg:text-lg font-extralight text-teagreen-800">
                {item?.title}
              </h4>
              <h5 className="flex items-center justify-center">
                <StarRatingDisplay rating={item?.rating} />
              </h5>
              {item?.discount && (
                <div className="flex justify-center gap-2 text-xs lg:text-sm font-semibold text-teagreen-800">
                  <div>£{item?.discountPrice}</div> <del>£{item?.price}</del>
                </div>
              )}
              {!item?.discount && (
                <div className="text-xs lg:text-sm font-semibold text-teagreen-800">£{item?.price}</div>
              )}
            </div>
          </div>
        </Link>
        {/* Add to card */}
        <div className={`border-t opacity-0 transform group-hover:opacity-100 group-hover:-translate-y-40 group-hover:bg-teagreen-100 w-full mx-auto transition-all duration-400 ${
              addButtonClicked ? "hidden" : "block"
            }`}>
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
              addButtonClicked ? "block group-hover:-translate-y-40 group-hover:bg-teagreen-100 transition-transform duration-400 py-1 mt-4" : "hidden transition-transform duration-400"
            }`}
          >
            <p className="uppercase text-center py-2 text-sm border-b">Choose weight for cart</p>
            <div className="flex justify-between px-4 py-2">
              <button
                onClick={() => {
                  handleAddToCart(50);
                }}
                className="flex flex-col items-center border-r w-full py-3 text-teagreen-400 hover:text-teagreen-600"
              >
                <div>50g</div>
                <div>|</div>
                <div>£{item?.discount?item?.discountPrice:item?.price}</div>
              </button>
              <button
                onClick={() => {
                  handleAddToCart(100);
                }}
                className="w-full py-3 text-teagreen-400 hover:text-teagreen-600"
              >
                <div>100g</div>
                <div>|</div>
                <div>£{item?.discount?item?.discountPrice*2:item?.price*2}</div>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CategoryCard;
