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
import TestimonialsCard from "./TestimonialsCard";

function TestimonialSlider({}) {

    const testimonials = [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "John Doe",
        date: "December 25, 2024",
        rating: 4.5,
        title: "Great Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
        name: "Jane Doe",
        date: "December 25, 2024",
        rating: 5,
        title: "Excellent Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
      },
      {
        id: 3,
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        name: "John Doe",
        date: "December 25, 2024",
        rating: 4.5,
        title: "Great Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
      },
      {
        id: 4,
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
        name: "Jane Doe",
        date: "December 25, 2024",
        rating: 5,
        title: "Excellent Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
      },
      {
        id: 5,
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        name: "John Doe",
        date: "December 25, 2024",
        rating: 4.5,
        title: "Great Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
      },
      {
        id: 6,
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        name: "Jane Doe",
        date: "December 25, 2024",
        rating: 5,
        title: "Excellent Service!",
        message:
          "I had an amazing experience with this service. The team was professional, and the quality exceeded my expectations!",
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
        spaceBetween={5}
        speed={500}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".second-swiper-prev", // Unique class
          nextEl: ".second-swiper-next", // Unique class
        }}
        breakpoints={{
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
          1536: { slidesPerView: 5.5, spaceBetween: 25 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialsCard item={item} />
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

export default TestimonialSlider;
