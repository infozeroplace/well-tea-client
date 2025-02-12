"use client";

import CategorySlider from "@/components/category/CategorySlider";
import { useState } from "react";

function RelatedProducts({ relatedProductsData, title }) {
  const relatedProducts = relatedProductsData.slice(0, 7);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="my-10">
      <h3 className="text-4xl text-teagreen-800 mb-10">{title || "Related Products"}</h3>
      <CategorySlider products={relatedProducts} />
    </div>
  );
}

export default RelatedProducts;
