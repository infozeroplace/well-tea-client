"use client";

import React, { useState } from "react";
import GiftItemCard from "./GiftItemCard";
import { productList } from "@/data/products";
import { SectionButton, SectionLinkButton, SectionTitle } from "@/components/shared";

const newitems = [
  {
    id: "1",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05_square.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "2",
    designation: "best sellar",
    discount: "",
    image: "/products/product_07_square.jpg",
    hoverImage: "/products/product_08.jpg",
    type: "Ginger Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "3",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05_square.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "4",
    designation: "best sellar",
    discount: "",
    image: "/products/product_07_square.jpg",
    hoverImage: "/products/product_08.jpg",
    type: "Yellow Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
];
const GiftItems = () => {
  return (
    <div className="section-gap py-10">
      <div className="container px-4 md:px-20">
        <div className="">
          <div className="lg:ml-10 mb-10 ">
            <p className="text-center md:text-left uppercase text-xs md:text-base mb-2">
            Gift Products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 lg:gap-4 mx-auto">
            {newitems.map((item, idx) => (
              <GiftItemCard key={item?.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center md:justify-center text-lg">
            <SectionLinkButton title="See More" url="/tea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftItems;
