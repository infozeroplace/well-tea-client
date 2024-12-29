import React from "react";
import CategoryOfferSlider from "./CategoryOfferSlider";

const CategoryOffer = () => {
  return (
    <div className="container px-20 section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        <h1 className="uppercase text-center text-4xl text-teagreen-800">
          The Well Tea
        </h1>
        <h5 className="text-center text-x my-4">Sharing our heritage</h5>
      </div>

      <CategoryOfferSlider />
    </div>
  );
};

export default CategoryOffer;
