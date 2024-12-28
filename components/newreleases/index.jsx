"use client";

import React, { useState } from "react";
import NewItemCard from "./NewItemCard";
import { SectionButton, SectionLinkButton } from "../shared";
import { productList } from "@/data/products";

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
const NewReleases = () => {
  return (
    <div className="section-gap bg-teagreen-100 py-10">
      <div className="container">
        <div className="mx-16">
          <div className="ml-[80px] mb-10 ">
            <p className="text-center md:text-left uppercase text-x">
              shop our tea
            </p>
            <h4 className="text-center md:text-left text-4xl">New Releases</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2 lg:gap-4">
            {newitems.map((item, idx) => (
              <NewItemCard key={item?.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center md:justify-center text-lg">
            {/* <SectionButton title="See More" /> */}
            <SectionLinkButton title="See More" url="/tea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
