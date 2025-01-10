"use client";
import { useState } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shared";

function CategorySlider({ products }) {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={4.5}
        spaceBetween={25}
        speed={1000}
        slidesPerGroup={2}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".category-swiper-prev",
          nextEl: ".category-swiper-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            {/* <CategoryCard item={item} url={`tea/${item.type}/${item.id}`} /> */}
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`category-swiper-prev z-10 absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
          isFirstSlide ? "!hidden" : ""
        }`}
      >
        &#x276E;
      </button>
      <button
        className={`category-swiper-next z-10 absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-300/70 hover:bg-gray-300/100 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
          isLastSlide ? "!hidden" : ""
        }`}
      >
        &#x276F;
      </button>
    </div>
  );
}

export default CategorySlider;
