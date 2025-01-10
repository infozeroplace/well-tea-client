"use client";

import { env } from "@/config/env";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[800px] w-full">
      <div className="flex flex-col items-center">
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, EffectFade]}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full max-w-xl mb-4"
        >
          {images.map((image) => (
            <SwiperSlide key={image.uid}>
              <img
                src={`${env.app_url}${image.path}`}
                alt={image.alt}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={4}
          modules={[Thumbs]}
          watchSlidesProgress={true}
          className="w-full max-w-xl"
        >
          {images.map((image) => (
            <SwiperSlide key={image.uid}>
              <img
                src={`${env.app_url}${image.path}`}
                alt={image.alt}
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
