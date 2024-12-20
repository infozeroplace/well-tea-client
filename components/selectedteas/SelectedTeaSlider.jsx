"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { FaStar } from "react-icons/fa6";

function SelectedTeaSlider() {
    const selectedItems = [
      {
        id: 1,
        image: "/images/product_2nd_01.jpg",
        name: "Green Tea",
        price: 10,
        discount: 25,
        discountedPrice: 7,
      },
      {
        id: 2,
        image: "/images/product_3rd_01.jpg",
        name: "Black Tea",
        price: 15,
        discount: 30,
        discountedPrice: 7,
      },
      {
        id: 3,
        image: "/images/product_2nd_01.jpg",
        name: "White Tea",
        price: 20,
        discount: 1,
        discountedPrice: 7,
      },
      {
        id: 4,
        image: "/images/product_3rd_01.jpg",
        name: "Oolong Tea",
        price: 25,
        discount: 20,
        discountedPrice: 7,
      },
      {
        id: 5,
        image: "/images/product_2nd_01.jpg",
        name: "Herbal Tea",
        price: 30,
        discount: 40,
        discountedPrice: 7,
      },
    ];
    
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {selectedItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-[500px] h-[80vh] overflow-hidden mx-auto">
              <Image src={item.image} alt="Offer" layout="fill" />
              <div className="absolute bottom-0 z-30 bg-[#131B14] bg-opacity-60 p-3 w-full flex flex-col justify-center text-center text-teagreen-100">
                <div className="z-20">
                  <h4 className="uppercase text-md font-semibold tracking-widest">
                    Save Up To {item.discount}%
                  </h4>
                  <h3 className="text-5xl font-extralight">{item.name}</h3>
                  <p className="font-light p-2 rounded-md text-xl text-white w-fit mx-auto">
                    Price: <del>£{item.price}</del> £{item.discountedPrice}
                  </p>
                  <div className="text-2xl mb-4 text-yellow-400 flex items-center justify-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <button className="uppercase text-xs font-semibold tracking-widest text-teagreen-100">
                    See More
                  </button>
                </div>
                <div className="z-10 custom-gradient opacity-0 group-hover:opacity-60 absolute left-0 bottom-0 w-full h-0 group-hover:h-[80vh] transition-all duration-500 ease-in-out"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SelectedTeaSlider