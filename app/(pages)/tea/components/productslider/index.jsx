"use client";

import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiPriceTagFill } from "react-icons/ri";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactImageMagnify from "react-image-magnify";

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
    <div>
      {product?.isMultiDiscount && (
        <div className="mb-2 uppercase text-brand__font__size__md font-brand__font__600 text-text__gray flex items-center gap-1.5">
          <span>
            <RiPriceTagFill size={20} className="text-red-600 mb-1" />
          </span>
          <span>Save up to</span>
          <span className="text-red-600">£{product?.multiDiscountAmount}</span>
          <span>when you buy more than</span>
          <span className="text-red-600">{product?.multiDiscountAmount}</span>
          <span>items</span>
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
          className="w-full mb-4 relative group !overflow-visible"
        >
          {product?.slideImages?.map((image) => (
            <SwiperSlide
              key={image}
              className="flex justify-center items-center bg-teagreen-100 rounded-2xl w-full"
            >
              {/* <Image
                src={`${env.image_path}/${image}`}
                alt={extractAlterText(image)}
                width={600}
                height={600}
                // objectFit="cover"
              /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: extractAlterText(image),
                    isFluidWidth: true,
                    // src: `${env.image_path}/${image}`,
                    src: "/products/product_07_square.jpg",
                  },
                  largeImage: {
                    src: "/products/product_07_square.jpg",
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: "1500",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  },
                  // enlargedImagePosition: enlargedImagePosition,
                  // enlargedImageContainerDimensions: {
                  //   width: "200%",
                  //   height: "125%",
                  // },
                  // shouldUsePositiveSpaceLens: true,
                  isHintEnabled: true,
                }}
              />
            </SwiperSlide>
          ))}
          <button
            className={`main-swiper-prev z-10 absolute top-1/2 left-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-teagreen-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isFirstSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`main-swiper-next z-10 absolute top-1/2 right-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-teagreen-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isLastSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276F;
          </button>
        </Swiper>

        {/* Thumbnail Slider if more than 6 thumbnails */}
        {product?.slideImages?.length > 6 ? (
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={10}
            navigation={{
              prevEl: ".thumb-swiper-prev",
              nextEl: ".thumb-swiper-next",
            }}
            className="w-full flex items-center relative"
          >
            {product?.slideImages?.map((image, index) => (
              <SwiperSlide key={image} className="cursor-pointer">
                <div
                  onClick={() => mainSlider?.slideTo(index)}
                  className={`bg-teagreen-300 rounded-2xl flex items-center justify-center p-1 ${
                    activeIndex === index ? "border border-teagreen-600" : ""
                  }`}
                >
                  <Image
                    src={`${env.image_path}/${image}`}
                    alt={extractAlterText(image)}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex items-center gap-2">
            {product?.slideImages?.map((image, index) => (
              <div
                key={image}
                onClick={() => mainSlider?.slideTo(index)}
                className={`cursor-pointer bg-teagreen-300 rounded-2xl flex items-center justify-center p-1 ${
                  activeIndex === index ? "border border-teagreen-600" : ""
                }`}
              >
                <Image
                  src={`${env.image_path}/${image}`}
                  alt={extractAlterText(image)}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSlider;
