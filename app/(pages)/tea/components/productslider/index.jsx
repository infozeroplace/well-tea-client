"use client";

import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function ProductSlider({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setIctiveIndex] = useState(0);

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, EffectFade]}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setIctiveIndex(swiper.activeIndex)}
          className="w-full mb-4 relative bg-teagreen-100 "
        >
          {product?.isMultiDiscount && (
            <span className="absolute top-0 left-0 z-30 p-1 m-5 uppercase text-lg font-brand__font__light bg-red-100 text-red-600">
              Save up to £{product?.multiDiscountAmount} when you buy more than{" "}
              {product?.multiDiscountAmount} items
            </span>
          )}
          {product?.slideImages?.map((image) => (
            <SwiperSlide key={image} className="flex justify-center items-center bg-teagreen-100">
              <Image
                src={`${env.image_path}/${image}`}
                alt={extractAlterText(image)}
                width={600}
                height={600}
                // objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={4}
          modules={[Thumbs]}
          // watchSlidesProgress={true}
          className="w-full"
        >
          {product?.slideImages?.map((image, index) => (
            <SwiperSlide
              key={image}
              className={`cursor-pointer bg-teagreen-100 rounded-2xl ${
                activeIndex === index ? "border-1 border-primary" : ""
              }`}
            >
              <Image
                src={`${env.image_path}/${image}`}
                alt={extractAlterText(image)}
                width={200}
                height={200}
                // onClick={() => setIctiveIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
