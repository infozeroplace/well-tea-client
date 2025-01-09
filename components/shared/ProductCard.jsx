"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const ProductCard = ({ url }) => {
  const product = {
    _id: "677997c91f208bbbe5ee9ee2",
    productId: "organic-jade-sword-tea-bags",
    title: "Jade Sword™ Green Tea, Tea Bags",
    description:
      "Grown among misty mountains in a remote part of Hunan province, our Organic Jade Sword™️ is spring-picked at an altitude of 800m, from a garden rich with biodiversity. The garden had been abandoned in the early '90s and was revived in 2007 by tea master Zhou Wei, when he saw an opportunity to help the local minority ethnic people. He has been producing organic tea ever since, providing locals with the chance to build a community and a home. Please dispose of your used tea bags in your council food waste bin.",
    shortDescription:
      "Bursting with sweet spring flavour, and selected for its succulent fresh taste, this is our introduction to exceptional green tea in biodegradable tea bags. A refreshing infusion with sappy top notes.",
    thumbnails: [
      {
        alt: "product_03",
        uid: "product_03__1736021927304_c13d94d15baee7a9.jpg",
        path: "/public/image/upload/product_03__1736021927304_c13d94d15baee7a9.jpg",
        _id: "677997c91f208bbbe5ee9ee3",
      },
      {
        alt: "product_04",
        uid: "product_04__1736021942633_5441fcfeae82710d.jpg",
        path: "/public/image/upload/product_04__1736021942633_5441fcfeae82710d.jpg",
        _id: "677997c91f208bbbe5ee9ee4",
      },
    ],
    slideImages: [
      {
        alt: "product_03",
        uid: "product_03__1736021927304_c13d94d15baee7a9.jpg",
        path: "/public/image/upload/product_03__1736021927304_c13d94d15baee7a9.jpg",
        _id: "677997c91f208bbbe5ee9ee5",
      },
      {
        alt: "product_04",
        uid: "product_04__1736021942633_5441fcfeae82710d.jpg",
        path: "/public/image/upload/product_04__1736021942633_5441fcfeae82710d.jpg",
        _id: "677997c91f208bbbe5ee9ee6",
      },
    ],
    type: ["green tea"],
    format: ["loose leaf"],
    flavour: ["floral"],
    ingredient: ["cacao", "cardamom", "carob", "ginger"],
    benefit: ["energy", "gut health", "immunity"],
    originName: "japan",
    originAddress: "from baotian garden, hunan",
    isSale: true,
    isNew: true,
    isSubscription: true,
    sale: 5,
    subscriptionSale: 10,
    ratings: 2,
    reviews: [],
    howToMakeTea: [
      {
        title: "A hot cup",
        requirements: ["Tea leaves", "Hot water"],
        steps: ["Boil water", "Add tea leaves", "Steep for 5 minutes"],
        _id: "677997c91f208bbbe5ee9ee7",
      },
      {
        title: "An iced cup",
        requirements: ["Tea leaves", "Hot water"],
        steps: ["Boil water", "Add tea leaves", "Steep for 5 minutes"],
        _id: "677997c91f208bbbe5ee9ee8",
      },
    ],
    unitPrices: [
      {
        unit: "50gm",
        price: 4,
        salePrice: 3.8,
        subscriptionPrice: 3.6,
      },
      {
        unit: "125gm",
        price: 8.45,
        salePrice: 8.2,
        subscriptionPrice: 7.6,
      },
      {
        unit: "250gm",
        price: 15.5,
        salePrice: 14.9,
        subscriptionPrice: 13.95,
      },
      {
        unit: "1kg",
        price: 42.75,
        salePrice: 40.6,
        subscriptionPrice: 38.48,
      },
    ],
    subscriptions: [
      {
        weeks: "2 week",
        days: 14,
        _id: "677997c91f208bbbe5ee9eed",
      },
      {
        weeks: "4 week",
        days: 28,
        _id: "677997c91f208bbbe5ee9eee",
      },
      {
        weeks: "6 week",
        days: 42,
        _id: "677997c91f208bbbe5ee9eef",
      },
      {
        weeks: "8 week",
        days: 56,
        _id: "677997c91f208bbbe5ee9ef0",
      },
    ],
    createdAt: "2025-01-04T20:19:21.525Z",
    updatedAt: "2025-01-04T20:19:21.525Z",
    __v: 0,
  };
  if (!product) return null;

  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();

  const [addButtonClicked, setAddButtonClicked] = useState(false);
  // const [selectedUnitObj, setSelectedObj] = useState(item.unitPrices[0]);

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

  return (
    <div
      onMouseLeave={() => {
        setAddButtonClicked(false);
      }}
      className=" max-w-[380px] bg-[#F8F8F8] px-4 pb-1 mx-auto overflow-hidden"
    >
      {/* Sell and Favorite Section */}
      <div className="flex justify-between text-sm pt-2">
        <div className="h-12">
          {product?.isSale ? (
            <div className="w-8">
              <img src="/products/label-sale.png" alt="Sale" />
            </div>
          ) : product?.isNew ? (
            <div className="uppercase text-sm bg-teagreen-500 text-white px-1 mt-2 mb-[2px]">
              new
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
        {product?.isWishListed ? (
          <div className="relative text-3xl cursor-pointer mr-7">
            <MdFavorite className="absolute" />
          </div>
        ) : (
          <div className="relative text-3xl cursor-pointer mr-7">
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
            className="text-center w-full duration-400 mx-auto"
          >
            <div className="pb-3">
              <h4 className="md:text-sm lg:text-base font-normal text-teagreen-800">
                {product?.title}
              </h4>
              <div className="flex justify-between">
                <p className="capitalize">{product?.format}</p>

                {product?.isSale ? (
                  <div className="flex justify-center gap-2 text-xs lg:text-sm font-semibold text-teagreen-800">
                    <div>£{product?.unitPrices[0]?.salePrice}</div>{" "}
                    <del>£{product?.unitPrices[0]?.price}</del>
                  </div>
                ) : (
                  <div className="text-xs lg:text-sm font-semibold text-teagreen-800">
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
            className="uppercase text-xs py-3 text-center w-full flex items-center justify-center text-teagreen-800 hover:bg-teagreen-400 transition-all duration-400"
          >
            add to cart
          </button>
        </div>

        {/* Weight Selection*/}
        <div
          className={` ${
            addButtonClicked
              ? "block transition-transform duration-400 -mt-[24px] py-1"
              : "hidden transition-transform duration-400"
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
      </div>
    </div>
  );
};

export default ProductCard;
