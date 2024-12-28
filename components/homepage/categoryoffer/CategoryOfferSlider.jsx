"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useSwiper } from "swiper/react";
import CategoryOfferCard from "./CategoryOfferCard";

function CategoryOfferSlider({ }) {
    const offerProducts = [
      {
        id: 1,
        name: "Black Tea",
        discount: "15%",
        image: "/products/product_01.jpg",
      },
      {
        id: 2,
        name: "Green Tea",
        discount: "25",
        image: "/products/product_02.jpg",
      },
      {
        id: 3,
        name: "White Tea",
        discount: "10%",
        image: "/products/product_03.jpg",
      },
      {
        id: 4,
        name: "Oolong Tea",
        discount: "20%",
        image: "/products/product_04.jpg",
      },
      {
        id: 5,
        name: "Herbal Tea",
        discount: "30%",
        image: "/products/product_05.jpg",
      },
      {
        id: 6,
        name: "Yellow Tea",
        discount: "10%",
        image: "/products/product_06.jpg",
      },
      {
        id: 7,
        name: "White Tea",
        discount: "15%",
        image: "/products/product_07.jpg",
      },
      {
        id: 8,
        name: "Green Tea",
        discount: "25%",
        image: "/products/product_08.jpg",
      },
    ];

    const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  const handleSlideChange = (swiper) => {
    setFirstSlide(swiper.isBeginning);
    setLastSlide(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={25}
        speed={500}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        slidesPerView={5}
        slidesPerGroup={1}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".second-swiper-prev", // Unique class
          nextEl: ".second-swiper-next", // Unique class
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1680: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
      >
        {offerProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryOfferCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`second-swiper-prev z-10 absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
          firstSlide ? "hidden" : ""
        }`}
      >
        &#x276E;
      </button>
      <button className="second-swiper-next z-10 absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg">
        &#x276F;
      </button>
    </div>
  );
}

export default CategoryOfferSlider;
