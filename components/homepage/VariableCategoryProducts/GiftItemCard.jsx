import NextImage from "@/components/shared/NextImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="relative max-w-[380px] mx-auto">
      <div className="z-10 absolute flex text-white text-sm gap-2 -top-2 left-1/2 transform -translate-x-1/2">
        {item?.designation && (
          <div className="uppercase bg-teagreen-600 px-2 whitespace-nowrap">
            {item?.designation}
          </div>
        )}
        {item?.discount && (
          <div className="bg-teagreen-500 px-2 whitespace-nowrap">
            -{item?.discount}%
          </div>
        )}
      </div>
      <div className="bg-white flex flex-col text-center items-center relative mb-12 group px-6 overflow-hidden">
        {/* Background Image */}
        <Link
          href={`/tea/${item?.type}/${item?.id}`}
          className="absolute inset-0 z-0 bg-cover bg-center h-full transition-transform duration-500 ease-out transform scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100"
          style={{ backgroundImage: `url(${item?.hoverImage})` }}
        ></Link>
        {/* Product Image */}
        <Link
          href={`/tea/${item?.type}/${item?.id}`}
          className="aspect-square lg:mt-5 xl:mt-6"
        >
          <NextImage
            presets={{ width: 220, height: 220 }}
            img={item?.image}
            alt="New Product"
            className="w-full opacity-100 group-hover:opacity-0 group-hover:scale-110 duration-400"
          />
        </Link>
        {/* Product Details */}
        <div className="group-hover:bg-white group-hover:-translate-y-6 duration-400 w-full">
          <div className="px-1">
            <h5 className="text-[10px] lg:text-xs xl:text-base text-teagreen-500">
              {item?.type}
            </h5>
            <h4 className="text-xs lg:text-sm 2xl:text-lg">{item?.title}</h4>
            <h5 className="text-xs">{item?.rating}</h5>
            {item?.discount ? (
              <div className="flex justify-center gap-2 mb-1 text-xs lg:text-sm font-semibold">
                <div>${item?.discountPrice}</div> <del>${item?.price}</del>
              </div>
            ) : (
              <div className="flex justify-center gap-2 mb-1 text-xs lg:text-sm font-semibold">
                ${item?.price}
              </div>
            )}
          </div>
          <div className="flex bg-white border-t opacity-0 group-hover:opacity-100 transition duration-400">
            <div className="uppercase text-xs text-center w-full py-2 flex justify-center items-center hover:bg-teagreen-400 duration-400">
              add to cart
            </div>
            {/* <div className="w-full flex justify-center py-2 items-center uppercase text-xs hover:bg-teagreen-400 duration-400">Add to wishlist</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftItemCard;
