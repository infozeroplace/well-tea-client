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

  const handleWeight = () => {
    setAddButtonClicked(true);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setAddButtonClicked(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])

  console.log(cardRef);

  return (
    <div
      // onMouseLeave={() => {
      //   setAddButtonClicked(false);
      // }}
      ref={cardRef}
      className="max-w-[380px] w-full h-full bg-[#F8F8F8] relative"
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
            style={{ display: addButtonClicked ? "none" : "block" }}
            className="text-center w-full duration-400 mx-auto px-3"
          >
            <div className="">
              <h4 className="md:text-sm lg:text-base text-start font-normal text-teagreen-800 h-10 overflow-hidden text-ellipsis whitespace-nowrap">
                {product?.title}
              </h4>
              <div className="flex justify-between items-center py-1">
                <p className="capitalize text-sm">{product?.format}</p>

                {product?.isSale ? (
                  <div className="flex justify-center gap-2 font-semibold text-teagreen-800">
                    <div>£{product?.unitPrices[0]?.salePrice}</div>
                    <del>£{product?.unitPrices[0]?.price}</del>
                  </div>
                ) : (
                  <div className="font-semibold text-teagreen-800">
                    £{product?.unitPrices[0]?.price}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
        {/* Add to card */}
        <div
          className={`border-t transform w-full mx-auto transition-all duration-400 ${
            addButtonClicked ? "hidden" : "block"
          }`}
        >
          <button
            onClick={handleWeight}
            className="uppercase text-xs py-3 text-center w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400 gap-2"
          >
            <CiShoppingCart size={20} />
            <span>add to cart</span>
          </button>
        </div>

        {/* Weight Selection*/}
        <div
          className={`absolute botton-0 left-0 w-full bg-inherit overflow-hidden transition-height duration-500 ${
            addButtonClicked ? "h-fit" : "h-0"
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
                } w-full py-1 text-teagreen-400 hover:text-teagreen-600`}
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
