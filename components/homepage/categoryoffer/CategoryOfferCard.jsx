import Image from "next/image";
import React from "react";

const CategoryOfferCard = ({ item }) => {
  return (
    <div className="relative bg-cover h-[241px] w-[241px] bg-teagreen-600 rounded-lg backdrop-opacity-10">
      <div className="z-20 text-white flex flex-col justify-center items-center text-center h-full">
        <div className="text-3xl font-semibold">{item.discount} off for <br />{item.name}</div>
        <p className="text-xs">T&Cs Aapply.</p>
      </div>
      <div
        style={{ backgroundImage: `url("/products/product_07_square.jpg")` }}
        // style={{ backgroundImage: `url("/images/about-image-8.jpg")` }}
        className="absolute inset-0 bg-cover opacity-20 -z-10"
      ></div>
    </div>
  );
};

export default CategoryOfferCard;
