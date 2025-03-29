"use client";

import CategorySlider from "../category/CategorySlider";
import { SectionTitle } from "../../shared";

const BestSellers = ({ initialProducts }) => {
  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10">
        <div className="content-gap">
          <SectionTitle title="Best Sellers" />
        </div>

        <CategorySlider products={initialProducts} />
      </div>
    </div>
  );
};

export default BestSellers;
