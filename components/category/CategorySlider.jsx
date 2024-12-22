"use client"
import React, { useState } from "react";
import Link from "next/link";
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

function CategorySlider({ visibleProducts }) {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
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
        slidesPerView={4}
        spaceBetween={30}
        speed={1000}
        slidesPerGroup={2}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {visibleProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="!mr-0 w-full h-full flex flex-col items-center justify-center">
          <div className="p-4 flex flex-col items-center justify-center text-center mt-[50%]">
            <h3 className="text-lg font-semibold text-teagreen-600">
              See All Products
            </h3>
            <Link
              href="/products"
              className="text-teagreen-500 hover:text-teagreen-600 font-light underline"
            >
              Browse All
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        className={"swiper-button-prev " + (isFirstSlide ? "!hidden" : "")}
      ></button>
      <button className="swiper-button-next"></button>
    </div>
  );
}

export default CategorySlider;
