"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

function SocialImages() {
    const socialImages = [
      {
        image: "/products/product_01.jpg",
        title: "Tea 1",
      },
      {
        image: "/products/product_02.jpg",
        title: "Tea 2",
      },
      {
        image: "/products/product_03.jpg",
        title: "Tea 3",
      },
      {
        image: "/products/product_04.jpg",
        title: "Tea 4",
      },
      {
        image: "/products/product_05.jpg",
        title: "Tea 5",
      },
      {
        image: "/products/product_06.jpg",
        title: "Tea 6",
      },
      {
        image: "/products/product_07.jpg",
        title: "Tea 7",
      },
      {
        image: "/products/product_08.jpg",
        title: "Tea 8",
      },
    ];
  return (
    <div className="section-gap">
      <div className="container px-20">
        <h1 className="text-4xl mb-5">Social Images</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={5}
          spaceBetween={25}
          speed={1000}
          loop={true}
          autoplay
        //   slidesPerGroup={2}
          // onSlideChange={handleSlideChange}
        //   navigation={{
        //     prevEl: ".category-swiper-prev",
        //     nextEl: ".category-swiper-next",
        //   }}
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
          }}
        >
          {socialImages.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href="">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SocialImages;
