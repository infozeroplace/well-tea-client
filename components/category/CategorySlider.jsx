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
        slidesPerView={3.5}
        spaceBetween={25}
        speed={1000}
        slidesPerGroup={2}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
        }}
      >
        {visibleProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} url={`tea/${item.type}/${item.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={"swiper-button-prev " + (isFirstSlide ? "!hidden" : "")}
      ></button>
      <button className="swiper-button-next"></button>
    </div>
  );
}

export default CategorySlider;
