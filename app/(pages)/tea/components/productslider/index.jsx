"use client";

import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import { useState, useEffect } from "react";
import { EffectFade, Thumbs, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function ProductSlider({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSlider, setMainSlider] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isFirstThumb, setIsFirstThumb] = useState(true);
  const [isLastThumb, setIsLastThumb] = useState(false);

  useEffect(() => {
    if (mainSlider) {
      setIsFirstSlide(mainSlider.isBeginning);
      setIsLastSlide(mainSlider.isEnd);
    }
    if (thumbsSwiper) {
      setIsFirstThumb(thumbsSwiper.isBeginning);
      setIsLastThumb(thumbsSwiper.isEnd);
    }
  }, [mainSlider, thumbsSwiper]);

  return (
    <div className="">
      {product?.isMultiDiscount && (
        <div className="mb-2 uppercase text-lg font-brand__font__light text-gray-600">
          Save up to{" "}
          <span className="text-red-600">£{product?.multiDiscountAmount}</span>{" "}
          when you buy more than{" "}
          <span className="text-red-600">{product?.multiDiscountAmount}</span>{" "}
          items
        </div>
      )}
      <div className="flex flex-col items-center">
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, EffectFade, Navigation]}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: ".main-swiper-prev",
            nextEl: ".main-swiper-next",
          }}
          onSwiper={setMainSlider}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setIsFirstSlide(swiper.isBeginning);
            setIsLastSlide(swiper.isEnd);
          }}
          // onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full mb-4 relative group"
        >
          {/* {product?.isMultiDiscount && (
            <span className="absolute top-0 left-0 z-30 py-1 px-5 m-5 uppercase text-lg font-brand__font__light bg-red-100 text-red-600">
              Save up to £{product?.multiDiscountAmount} when you buy more than{" "}
              {product?.multiDiscountAmount} items
            </span>
          )} */}
          {product?.slideImages?.map((image) => (
            <SwiperSlide
              key={image}
              className="flex justify-center items-center bg-gray-100 rounded-2xl"
            >
              <Image
                src={`${env.image_path}/${image}`}
                alt={extractAlterText(image)}
                width={600}
                height={600}
                // objectFit="cover"
              />
            </SwiperSlide>
          ))}
          <button
            className={`main-swiper-prev z-10 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isFirstSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`main-swiper-next z-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isLastSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276F;
          </button>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={5}
          modules={[Thumbs, Navigation]}
          navigation={{
            prevEl: ".thumb-swiper-prev",
            nextEl: ".thumb-swiper-next",
          }}
          onSlideChange={(swiper) => {
            setIsFirstThumb(swiper.isBeginning);
            setIsLastThumb(swiper.isEnd);
          }}
          watchSlidesProgress={true}
          className="w-full relative group"
        >
          {product?.slideImages?.map((image, index) => (
            <SwiperSlide
              key={image}
              onClick={() => mainSlider?.slideTo(index)}
              className={`cursor-pointer bg-gray-100 rounded-2xl flex items-center justify-center ${
                activeIndex === index ? "border-1 border-primary" : ""
              }`}
            >
              <Image
                src={`${env.image_path}/${image}`}
                alt={extractAlterText(image)}
                width={120}
                height={120}
              />
            </SwiperSlide>
          ))}
          <button
            className={`thumb-swiper-prev z-10 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isFirstThumb ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`thumb-swiper-next z-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isLastThumb ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276F;
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
