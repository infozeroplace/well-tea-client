"use client";

import React, { useState } from "react";
import NewItemCard from "./NewItemCard";

const newitems = [
  {
    id: "1",
    designation: "best sellar",
    discount: "40",
    image: "/images/newproduct_one.jpg",
    type: "Organic Teas",
    title: "White Tera Rose Melange",
    rating: "4",
    price: "50",
    discountPrice: "20",
  },
  {
    id: "2",
    designation: "best sellar",
    discount: "40",
    image: "/images/newproduct_two.jpg",
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
    image: "/images/newproduct_one.jpg",
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
    image: "/images/product_two.jpg",
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
    image: "/images/newproduct_two.jpg",
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
    image: "/images/product_two.jpg",
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
    image: "/images/product_two.jpg",
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
    image: "/images/product_two.jpg",
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
    image: "/images/product_two.jpg",
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
    image: "/images/product_two.jpg",
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
    <div className="my-14">
      <p className="uppercase text-xs ml-5">shop our tea</p>
      <h4 className="text-4xl ml-5 mb-8">New Realeases</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-1">
        {newitems.map(
          (item, idx) =>
            idx < itemLimit && <NewItemCard key={item?.id} item={item} />
        )}
      </div>
      <div className="flex justify-end text-lg">
        <div
          onClick={handleLimit}
          className="bg-teagreen-600 hover:bg-teagreen-700 hover:underline w-fit mr-2 px-2 text-white cursor-pointer"
        >
          See More...
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
