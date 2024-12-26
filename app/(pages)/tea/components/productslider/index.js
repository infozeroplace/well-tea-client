"use client"

import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade } from "swiper/modules";

function ProductSlider() {
  const sliderImages = [
    "/products/product_01.jpg",
    "/products/product_02.jpg",
    "/products/product_03.jpg",
    "/products/product_04.jpg",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, EffectFade]}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full max-w-lg mb-4"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Main Image ${index}`} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Thumbs]}
          watchSlidesProgress={true}
          className="w-full max-w-lg"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;