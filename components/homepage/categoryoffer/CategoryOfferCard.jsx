import Link from "next/link";
import React from "react";

const CategoryOfferCard = ({ title }) => {
  return (
    <Link href={`/${title}`} className="bg-cover aspect-square bg-teagreen-600 rounded-lg group">
      <div className="text-white flex flex-col justify-center items-center text-center h-full">
        <div className="text-4xl lg:text-3xl group-hover:text-5xl lg:group-hover:text-4xl xl:group-hover:text-5xl duration-300 font-semibold capitalize">{title}</div>
      </div>
    </Link>
  );
};

export default CategoryOfferCard;
