"use client"
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useSwiper } from "swiper/react";

function CategorySlider() {
  const swiper = useSwiper();
  const categoryCardDetails = [
    {
      id: "1",
      designation: "best sellar",
      discount: "40",
      image: "/images/newproduct_one.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "2",
      designation: "best sellar",
      discount: "40",
      image: "/images/newproduct_two.jpg",
      type: "Ginger Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "3",
      designation: "best sellar",
      discount: "40",
      image: "/images/newproduct_one.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "4",
      designation: "best sellar",
      discount: "",
      image: "/images/product_two.jpg",
      type: "Yellow Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "5",
      designation: "best sellar",
      discount: "40",
      image: "/images/newproduct_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "6",
      designation: "best sellar",
      discount: "40",
      image: "/images/product_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "7",
      designation: "best sellar",
      discount: "40",
      image: "/images/product_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "8",
      designation: "best sellar",
      discount: "40",
      image: "/images/product_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "9",
      designation: "best sellar",
      discount: "40",
      image: "/images/product_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
    {
      id: "10",
      designation: "best sellar",
      discount: "40",
      image: "/images/product_two.jpg",
      type: "Organic Teas",
      title: "White Tera Rose Melange",
      rating: "4",
      price: "50",
      discountPrice: "20",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
      >
        {categoryCardDetails.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
