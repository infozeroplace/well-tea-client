"use client";

import CategorySlider from "../category/CategorySlider";

const BestSellers = ({ initialProducts }) => {
  return (
    <div className="section-gap">
      <div className="container px-4 md:px-20">
        <div className="content-gap">
          <p className="text-center md:text-left uppercase text-xs md:text-base">
            Best Sellers
          </p>
        </div>

        <CategorySlider products={initialProducts} />
      </div>
    </div>
  );
};

export default BestSellers;
