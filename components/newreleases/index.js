"use client";

import React, { useState } from "react";
import NewItemCard from "./NewItemCard";
import { SectionButton } from "../shared";
import { productList } from "@/data/products";

const newitems = [
  {
    id: "1",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05.jpg",
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
    image: "/products/product_07.jpg",
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
    image: "/products/product_05.jpg",
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
    image: "/products/product_07.jpg",
    hoverImage: "/products/product_08.jpg",
    type: "Yellow Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "5",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "6",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_07.jpg",
    hoverImage: "/products/product_08.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "7",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "8",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_07.jpg",
    hoverImage: "/products/product_08.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "9",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "10",
    designation: "best sellar",
    discount: "40",
    image: "/products/product_05.jpg",
    hoverImage: "/products/product_06.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
];
const NewReleases = () => {
  const size = newitems.length;
  const [itemLimit, setItemLimit] = useState(5);

  const handleLimit = () => {
    if (itemLimit < size) setItemLimit(itemLimit + 5);
    else {
      console.log("No More Items");
      alert("No More Items");
    }
  };
  return (
    <div className="section-gap bg-teagreen-100 py-1">
      <div className="ml-[76px] py-5 ">
        <p className="text-center md:text-left uppercase text-x">
          shop our tea
        </p>
        <h4 className="text-center md:text-left text-4xl">New Releases</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-2">
        {newitems.map(
          (item, idx) =>
            idx < itemLimit && <NewItemCard key={item?.id} item={item} />
        )}
      </div>
      <div className="flex justify-center md:justify-center text-lg">
        <SectionButton title="See More" onClick={handleLimit} />
      </div>
    </div>
  );
};

export default NewReleases;
