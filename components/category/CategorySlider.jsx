"use client";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shared";

function CategorySlider({ products }) {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const swiperInstance = useRef(null); // Store Swiper instance

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-gray-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg z-10 ${
          isFirstSlide
            ? "opacity-30 cursor-not-allowed"
            : "opacity-100 hover:bg-gray-200"
        }`}
        onClick={() => swiperInstance.current?.slidePrev()}
      >
        &#x276E;
      </button>
      <button
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-gray-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg z-10 ${
          isLastSlide
            ? "opacity-30 cursor-not-allowed"
            : "opacity-100 hover:bg-gray-200"
        }`}
        onClick={() => swiperInstance.current?.slideNext()}
      >
        &#x276F;
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={4.5}
        spaceBetween={25}
        speed={1000}
        slidesPerGroup={1}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperInstance.current = swiper)} // Store instance
        breakpoints={{
          480: { slidesPerView: 1.2, spaceBetween: 15 },
          768: { slidesPerView: 2.5, spaceBetween: 15 },
          1024: { slidesPerView: 3.5, spaceBetween: 15 },
          1280: { slidesPerView: 4.5, spaceBetween: 25 },
        }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
