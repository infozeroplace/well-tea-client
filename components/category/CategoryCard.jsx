"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";
import StarRatingDisplay from "../shared/StarRatingDisplay";

const CategoryCard = ({ item, url }) => {
  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        weight: 5,
        quantity: 1,
        addOns: [],
      })
    );
  };

  if (!item) return null;

  return (
    <div className="relative w-full aspect-[362/482] mb-4 group">
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
          src={item?.hoverImage}
          alt="New Product"
          className="w-full opacity-100 group-hover:opacity-0 group-hover:scale-y-110 duration-400"
        />
      </div>

      <div className="absolute inset-0">
        {/* Product image and descriptions */}
        <Link href={CardUrl}>
          {/* Product Image */}
          <div className="overflow-hidden">
            <img
              src={item?.image}
              className="opacity-0 group-hover:opacity-100 h-full group-hover:scale-80 group-hover:-translate-y-10 2xl:group-hover:-translate-y-16 duration-400"
            />
          </div>
          {/* Product Content */}
          <div className="text-center opacity-0 group-hover:opacity-100 group-hover:bg-teagreen-100 group-hover:w-[80%] group-hover:-translate-y-36 duration-400 mx-auto">
            <div className="pt-3">
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
                  <div>${item?.discountPrice}</div> <del>${item?.price}</del>
                </div>
              )}
              {!item?.discount && (
                <div className="text-teagreen-800">${item?.price}</div>
              )}
            </div>
          </div>
        </Link>
        {/* Add to card */}
        <div className="flex justify-center border-t opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:-translate-y-36 group-hover:bg-teagreen-100 group-hover:w-[80%] mx-auto transition-all duration-400">
          <button onClick={handleAddToCart} className="uppercase text-xs py-2 text-center w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
