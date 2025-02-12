"use client";

import { env } from "@/config/env";
import { addToCart } from "@/services/features/cart/cartSlice";
import {
  useAddToWishlistMutation,
  useGetWtwQuery,
} from "@/services/features/wishlist/wishlistApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import useToast from "@/hooks/useToast";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const [addButtonClicked, setAddButtonClicked] = useState(false);

  const [addToWishlist, { data: addToWishlistData, isLoading }] = useAddToWishlistMutation();
  const { data: { data: { wishlist } = {} } = {} } = useGetWtwQuery();
  // const { data } = useGetWtwQuery();
  // const wishlist = data?.data?.items;

  // console.log(addToWishlistData);

  const thumbnail1 = env.app_url + product?.thumbnails?.[0]?.filepath;
  const thumbnail2 = env.app_url + product?.thumbnails?.[1]?.filepath;
  const productId = product._id;


  const handleAddToCart = (unitObj) => {
    dispatch(
      addToCart({
        product,
        unitObj,
        quantity: 1,
        productPrice: product?.isSale ? unitObj.salePrice : unitObj.price,
        addOns: [],
      })
    );
  };

  const handleAddToWishlist = async () => {
    await addToWishlist({ data: { productId } });

  };

  useEffect(() => {
    if (addToWishlistData?.message) {
      toast.success(addToWishlistData?.message);
    }
  }, [addToWishlistData]);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setAddButtonClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full bg-[#F8F8F8] relative overflow-hidden shadow-md flex flex-col justify-between"
    >
      {/* Top Section: Labels & Wishlist */}
      <div className="h-16 flex justify-between items-center text-brand__font__size__xs px-3">
        {product?.isSale ? (
          <div className="relative z-[1] top-0 left-0 w-[4rem] h-[4rem] mt-8 rounded-full">
            <div className="absolute top-0 left-0 w-full h-full bg-red-500 text-white rounded-full text-brand__font__size__xs font-brand__font__500 leading-tight border border-white flex flex-col justify-center items-center shadow-lg">
              <div className="w-[3.4rem] h-[3.4rem] rounded-full border-2 border-dotted border-white flex flex-col items-center justify-center">
                <span>{product.sale || 0}%</span>
                <span className="uppercase">OFF</span>
              </div>
            </div>
          </div>
        ) : (
          product?.isNewProduct && (
            <div className="uppercase text-brand__font__size__xs bg-teagreen-600 text-white px-1.5 py-0.5">
              New
            </div>
          )
        )}

        <button onClick={handleAddToWishlist} className="">
          {wishlist?.items?.some((item) => item?._id === productId) ? (
            <MdFavorite className="overflow-hidden text-brand__font__size__md cursor-pointer text-gray-600 transition-all" />
          ) : (
            <MdFavoriteBorder className="overflow-hidden text-brand__font__size__md cursor-pointer text-gray-600 transition-all" />
          )}
        </button>
      </div>

      {/* Product Image Section */}
      <Link href={`/${product?.urlParameter}`} className="px-3 block">
        <div className="relative w-full aspect-square group overflow-hidden">
          <Image
            src={env.app_url + product?.thumbnails[0]?.filepath}
            className="mx-auto transition-opacity duration-300 group-hover:opacity-0 object-contain w-full h-full"
            height={316}
            width={316}
            alt={product?.thumbnails[0]?.alternateText}
          />
          <Image
            src={env.app_url + product?.thumbnails[1]?.filepath}
            className="mx-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 object-contain w-full h-full"
            height={316}
            width={316}
            alt={product?.thumbnails[1]?.alternateText}
          />
        </div>
      </Link>

      {/* Product Details */}
      <div
        className={`px-3 py-3 transition-all duration-300 text-teagreen-700 ${
          addButtonClicked ? "opacity-0" : "opacity-100"
        }`}
      >
        <h4 className="text-brand__font__size__base font-brand__font__500 truncate">
          {product?.title}
        </h4>
        {product?.teaFormat?.length ? (
          <p className="text-brand__font__size__xs font-brand__font__500 capitalize">
            {product?.teaFormat.join(",")}
          </p>
        ) : (
          <p className="text-brand__font__size__xs font-brand__font__500 capitalize">
            {product?.category.join(", ")}
          </p>
        )}
      </div>

      {/* Price & Add to Cart Button */}
      <div
        className={`border-t transition-all duration-300 ${
          addButtonClicked ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setAddButtonClicked(true)}
          className="relative text-sm py-3 px-5 w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400 gap-2"
        >
          <img
            src="/icons/shopping-bag.svg"
            className="absolute top-1/2 left-4 -translate-y-1/2 w-5"
            alt="Cart Icon"
          />
          {product?.isSale ? (
            <div className="flex items-center gap-2">
              <span className="font-brand__font__500 text-brand__font__size__sm">
                £{product?.unitPrices?.[0]?.salePrice} GBP
              </span>
              <span className="text-gray-500 text-brand__font__size__xs">
                was £{product?.unitPrices?.[0]?.price} GBP
              </span>
            </div>
          ) : (
            <span className="font-brand__font__500">
              £{product?.unitPrices?.[0]?.price} GBP
            </span>
          )}
        </button>
      </div>

      {/* Weight Selection (Only when Add to Cart is Clicked) */}
      {addButtonClicked && (
        <div className="absolute bottom-0 left-0 w-full bg-white shadow-lg z-20 transition-all duration-300">
          <p className="uppercase text-center py-2 text-brand__font__size__xs font-brand__font__500 border-b">
            Choose weight for cart
          </p>
          <div className="flex justify-between px-4 py-2">
            {product?.unitPrices?.slice(0, 3).map((item, index) => (
              <button
                key={index}
                onClick={() => handleAddToCart(item)}
                className={`flex flex-col items-center w-full py-2 text-teagreen-600 hover:text-teagreen-800 duration-300 ${
                  index !== product.unitPrices?.length - 1 ? "border-r" : ""
                }`}
              >
                <span className="font-brand__font__500">{item?.unit}</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="font-semibold">
                  £{product?.isSale ? item?.salePrice : item?.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
