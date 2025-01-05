import React from "react";
import { SectionTitle } from "@/components/shared";
import CategoryOfferCard from "./CategoryOfferCard";

const CategoryOffer = () => {
  return (
    <div className="container px-4 lg:px-20 section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        <SectionTitle title="The Well Tea" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 md:mx-5 lg:mx-2 gap-5">
        <CategoryOfferCard title="tea" />
        <CategoryOfferCard title="teawares" />
        <CategoryOfferCard title="gifts" />
        <CategoryOfferCard title="sales" />
      </div>
    </div>
  );
};

export default CategoryOffer;
