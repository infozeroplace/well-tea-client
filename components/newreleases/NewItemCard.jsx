import Image from "next/image";
import React from "react";

const NewItemCard = ({ item }) => {
  if (!item) return null;
  return (
    <div className="felx flex-col text-center items-center relative aspect-[362/482] mb-4 cursor-pointer group mx-auto">
      <div className="overflow-hidden">
        <img
          src="/images/product_2nd_01.jpg"
          className="opacity-0 group-hover:opacity-100 h-full group-hover:scale-150 duration-400"
        />
      </div>
      <div className="absolute inset-0">
        <div className="flex justify-center items-center text-white text-sm gap-2">
          {item?.designation && <div className="uppercase  bg-teagreen-600 w-fit px-2">
            {item?.designation}
          </div>}
          {item?.discount && (
            <div className=" bg-teagreen-500 w-fit px-2">
              -{item?.discount}%
            </div>
          )}
        </div>
        <div className="aspect-square">
          <img
            src={item?.image}
            alt="New Product"
            className="w-full opacity-100 group-hover:opacity-0 group-hover:scale-110 duration-400"
          />
        </div>
        <div className="group-hover:bg-white group-hover:w-[90%] group-hover:-translate-y-16 duration-400 mx-auto">
          <h5 className="text-sm lg:text-base text-teagreen-500">{item?.type}</h5>
          <h4 className="md:text-base lg:text-lg">{item?.title}</h4>
          <h5 className="text-xs">{item?.rating}</h5>
          {item?.discount && (
            <div className="flex justify-center gap-2 mb-1 text-xs lg:text-sm font-semibold">
              <div>${item?.discountPrice}</div> <del>${item?.price}</del>
            </div>
          )}
          {!item?.discount && <div className="mb-1">${item?.price}</div>}
          <div className="hidden group-hover:flex bg-white border-t py-1 opacity-0 group-hover:opacity-100 mt-5 transition duration-400 group-hover:mt-0">
            <div className="uppercase text-xs text-center w-full border-r flex justify-center items-center">add to cart</div>
            <div className="w-full flex justify-center items-center">icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItemCard;
