"use client"

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";

const CategoryCard = ({ item, url }) => {
  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();

  console.log(url);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      weight: 5,
      quantity: 1,
      addOns: [],
    }))
  }
  
  if (!item) return null;

  return (
    <Link href={CardUrl}>
      <div className="relative w-full aspect-[362/482] mb-4 group">
        <div className="aspect-square">
          <img
            src={item?.hoverImage}
            alt="New Product"
            className="w-full opacity-100 group-hover:opacity-0 group-hover:scale-110 duration-400"
          />
        </div>
        <div className="absolute inset-0">
          <div className="flex justify-center items-center text-white text-sm gap-2 mt-2">
            {item?.designation && (
              <div className="uppercase  bg-teagreen-600 w-fit px-2">
                {item?.designation}
              </div>
            )}
            {item?.discount && (
              <div className=" bg-teagreen-500 w-fit px-2">
                -{item?.discount}%
              </div>
            )}
          </div>

          <div className="overflow-hidden">
            <img
              src={item?.image}
              className="opacity-0 group-hover:opacity-100 h-full group-hover:scale-100 duration-400"
            />
          </div>
          {/* Product Content */}
          <div className="text-center opacity-0 group-hover:opacity-100 group-hover:bg-teagreen-100 group-hover:w-[90%] group-hover:-translate-y-36 duration-400 mx-auto">
            <div className="pt-3">
              <h5 className="text-sm lg:text-base text-teagreen-800">
                {item?.type}
              </h5>
              <h4 className="md:text-base lg:text-lg font-extralight text-teagreen-800">
                {item?.title}
              </h4>
              <h5 className="text-xs text-teagreen-800">{item?.rating}</h5>
              {item?.discount && (
                <div className="flex justify-center gap-2 mb-1 text-xs lg:text-sm font-semibold text-teagreen-800">
                  <div>${item?.discountPrice}</div> <del>${item?.price}</del>
                </div>
              )}
              {!item?.discount && (
                <div className="mb-1 text-teagreen-800">${item?.price}</div>
              )}
            </div>
            <div className="hidden group-hover:flex border-t opacity-0 group-hover:opacity-100 mt-5 transition duration-400 group-hover:mt-0">
              <button onClick={handleAddToCart} className="uppercase text-xs py-2 text-center w-full group-hover:flex items-center justify-center border-r text-teagreen-800 hover:bg-teagreen-400 duration-400">
                add to cart
              </button>
              {/* <button className="uppercase text-xs py-2 w-full flex justify-center items-center text-teagreen-800 hover:bg-teagreen-400 duration-400">
              Add to wishlist
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
