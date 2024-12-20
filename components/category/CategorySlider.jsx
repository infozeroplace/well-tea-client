"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useSwiper } from "swiper/react";

function CategorySlider({ filteredProducts }) {
  // const swiper = useSwiper();
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        // effect={"fade"}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        // navigation
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
      >
        {filteredProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="!mr-0">
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center bg-blue-100">
            <h3 className="text-lg font-semibold text-blue-600">
              See All Products
            </h3>
            <a href="/products" className="text-blue-500 underline mt-2">
              Browse All
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        className={`swiper-button-next absolute !top-1/2 !transform !-translate-y-1/2 !right-0 px-4 py-2 rounded-lg ${
          isLastSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLastSlide}
      >
      </button>
    </div>
  );
}

export default CategorySlider;
