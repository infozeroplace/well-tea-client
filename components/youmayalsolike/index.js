"use client";

import { useState } from "react";
import { ProductCard } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

function YouMayAlsoLike({ relatedProductsData }) {
  const relatedProducts = relatedProductsData.slice(0, 7);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="my-10 w-full mx-auto">
      <div className="">
        <h3 className="text-3xl text-center text-teagreen-800 mb-10 capitalize">
          You may also like
        </h3>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1.2}
            spaceBetween={5}
            speed={1000}
            slidesPerGroup={1}
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: ".related-swiper-prev",
              nextEl: ".related-swiper-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1536: { slidesPerView: 5, spaceBetween: 25 },
            }}
          >
            {relatedProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={item} url={`/tea/${item.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`related-swiper-prev z-10 absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isFirstSlide ? "!hidden" : ""
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`related-swiper-next z-10 absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isLastSlide ? "!hidden" : ""
            }`}
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
