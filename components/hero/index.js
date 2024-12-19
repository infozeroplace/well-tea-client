"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Keyboard,
  Virtual,
  Parallax,
} from "swiper/modules";

function Hero() {
  const heroSilderItems = [
    {
      title: "Premium Tea",
      description: "Discover our wide variety of premium tea products",
      image: "/images/welltea_hero.png",
    },
    {
      title: "Organic Tea",
      description: "Experience the purest and most natural flavors of tea",
      image: "/images/welltea_hero_2.jpg",
    },
    {
      title: "Healthy Tea",
      description: "Get the best care for your body and mind",
      image: "/images/welltea_hero_3.jpg",
    }
  ]
  return (
    <div>
      {/* <Image src="/images/welltea_hero.png" alt="Hero Image" width={2400} height={800}/> */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {heroSilderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[600px]">
              <Image
                src={item.image}
                alt="Hero Image"
                layout="fill"
              />
            </div>
            
            <div className="absolute left-20 top-[50%]">
              <h1 className="">{item.title}</h1>
              <p className="">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero