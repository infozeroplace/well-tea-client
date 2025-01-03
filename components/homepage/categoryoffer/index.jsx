import React from "react";
import CategoryOfferSlider from "./CategoryOfferSlider";
import { SectionTitle } from "@/components/shared";

const CategoryOffer = () => {
  return (
    <div className="container px-4 lg:px-20 section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        {/* <h1 className="uppercase text-center text-4xl text-teagreen-800">
          The Well Tea
        </h1> */}
        <SectionTitle title="The Well Tea" />
        <h5 className="text-center text-xs md:text-base">Sharing our heritage</h5>
      </div>

      <CategoryOfferSlider />
    </div>
  );
};

export default CategoryOffer;
