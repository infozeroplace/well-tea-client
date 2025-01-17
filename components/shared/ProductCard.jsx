"use client";

import { env } from "@/config/env";
import { addToCart } from "@/services/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const [addButtonClicked, setAddButtonClicked] = useState(false);

  const thumbnail1 = product?.thumbnails[0]?.path
    ? `${env.app_url}${product?.thumbnails[0]?.path}`
    : "/products/product-back2.png";

  const thumbnail2 = product?.thumbnails[1]?.path
    ? `${env.app_url}${product?.thumbnails[1]?.path}`
    : "/products/product-back2.png";

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
      className="max-w-[380px] w-full h-full bg-[#F8F8F8] relative overflow-hidden"
    >
      {/* Sell and Favorite Section */}
      <div className="h-16 flex justify-between items-center text-sm px-3">
        <div>
          {product?.isSale ? (
            <div className="w-8">
              <img src="/products/label-sale.png" alt="Sale" />
            </div>
          ) : product?.isNewProduct ? (
            <div className="uppercase text-sm bg-teagreen-500 text-white px-2 py-1">
              new
            </div>
          ) : null}
        </div>
        <div className="text-3xl cursor-pointer">
          <MdFavoriteBorder />
        </div>
      </div>

      <>
        {/* Product image and descriptions */}
        <Link
          href={`/${product?.urlParameter}`}
          className="px-3 flex flex-col justify-between w-full"
        >
          {/* Product Image */}
          <div className="relative group w-full">
            <Image
              src={thumbnail1}
              className="mx-auto transition-opacity duration-300 group-hover:opacity-0"
              height={316}
              width={316}
              alt="Product Front"
            />
            <Image
              src={thumbnail2}
              className="mx-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              height={316}
              width={316}
              alt="Product Back"
            />
          </div>

          {/* Product Content */}
          <div
            // style={{ display: addButtonClicked ? "none" : "block" }}
            className={`flex flex-col justify-center w-full h-[60px] transition-all duration-300 mx-auto px-3 ${
              addButtonClicked ? "opacity-0" : "opacity-1"
            }`}
          >
            <h4 className="md:text-sm lg:text-base text-start font-normal text-teagreen-800 overflow-hidden text-ellipsis whitespace-nowrap">
              {product?.title}
            </h4>
            <p className="capitalize text-sm">{product?.format}</p>
          </div>
        </Link>
        {/* Add to card */}
        <div
          className={`border-t transform w-full mx-auto transition-all duration-300 ${
            addButtonClicked ? "opacity-0" : "opacity-1"
          }`}
        >
          <button
            onClick={() => setAddButtonClicked(true)}
            className="text-xs py-3 px-5 w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400 gap-2"
          >
            <img
              src="/icons/shopping-bag.svg"
              className="absolute top-1/2 left-[22px] -translate-y-1/2 w-5"
            />
            <div className="text-sm">
              {product?.isSale ? (
                <div className="flex justify-center text-center gap-2 text-teagreen-800">
                  <span className="font-brand__font__500">
                    £{product?.unitPrices[0]?.salePrice} GBP
                  </span>
                  <span className="font-light">
                    was £{product?.unitPrices[0]?.price}
                  </span>
                </div>
              ) : (
                <span className="font-brand__font__500 text-teagreen-800">
                  £{product?.unitPrices[0]?.price} GBP
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Weight Selection*/}
        <div
          className={`absolute botton-0 h-fit left-0 z-10 w-full transform transition-all duration-300 ${
            addButtonClicked
              ? "-translate-y-full opacity-1"
              : "translate-y-0 opacity-0"
          }`}
        >
          <p className="uppercase text-center py-1 text-sm border-b">
            Choose weight for cart
          </p>
          <div className="flex justify-between px-4 py-1">
            {product?.unitPrices?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAddToCart(item);
                }}
                className={`flex flex-col items-center ${
                  index !== product.unitPrices?.length - 1 ? "border-r" : ""
                } w-full py-1 text-teagreen-500 hover:text-teagreen-700`}
              >
                <div>{item?.unit}</div>
                <div>|</div>
                <div>£{product?.isSale ? item?.salePrice : item?.price}</div>
              </button>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
