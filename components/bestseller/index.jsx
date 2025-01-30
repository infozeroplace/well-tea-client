"use client";

import CategorySlider from "../category/CategorySlider";
import { SectionTitle } from "../shared";

const BestSellers = ({ initialProducts }) => {
  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="content-gap">
          {/* <p className="text-center md:text-left uppercase text-xs md:text-base">
            Best Sellers
          </p> */}
          <SectionTitle title="Best Sellers" />
        </div>

        <CategorySlider products={initialProducts} />
      </div>
    </div>
  );
};

export default BestSellers;
