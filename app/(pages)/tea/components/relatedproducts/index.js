"use client";

import { ProductCard } from "@/components";
import { productList } from "@/data/products";
import { useState } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function RelatedProducts() {
  const relatedProducts = productList.slice(0, 7);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="my-10">
      <div className="">
        <h3 className="text-4xl text-teagreen-800 mb-10">Related Products</h3>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={4}
            spaceBetween={25}
            speed={1000}
            slidesPerGroup={2}
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: ".related-swiper-prev",
              nextEl: ".related-swiper-next",
            }}
            // breakpoints={{
            //   320: {
            //     slidesPerView: 1,
            //     spaceBetween: 5,
            //   },
            //   640: {
            //     slidesPerView: 1.5,
            //     spaceBetween: 10,
            //   },
            //   768: {
            //     slidesPerView: 1.5,
            //     spaceBetween: 10,
            //   },
            //   1024: {
            //     slidesPerView: 2.5,
            //     spaceBetween: 15,
            //   },
            //   1280: {
            //     slidesPerView: 3.5,
            //     spaceBetween: 25,
            //   },
            // }}
          >
            {relatedProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard item={item} url={`/tea/${item.id}`} />
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

export default RelatedProducts;
