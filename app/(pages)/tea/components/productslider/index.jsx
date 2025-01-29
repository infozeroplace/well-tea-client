"use client";

import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
            <SwiperSlide key={image} className="bg-white">
                <Image
                  src={`${env.image_path}/${image}`}
                  alt={extractAlterText(image)}
                  width={800}
                  height={800}
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
            <SwiperSlide key={image} className="cursor-pointer">
                <Image
                  src={`${env.image_path}/${image}`}
                  alt={extractAlterText(image)}
                  width={200}
                  height={200}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
