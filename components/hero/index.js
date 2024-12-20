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
import { useState } from 'react';

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

  const [isChange, setIsChange] = useState(false);

  const handleChange = () => {
    setIsChange(!isChange);
    console.log(isChange);
  }

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        speed={2000}
        onSlideChange={() => handleChange()}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {heroSilderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[60vh]">
              <Image src={item.image} alt="Hero Image" fill />
            </div>

            <div className="absolute left-20 top-[50%] bg-teagreen-600 p-20">
              <h1 className="text-teagreen-300 text-4xl transition-all duration-300">
                {item.title}
              </h1>
              <p className="text-teagreen-300">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero