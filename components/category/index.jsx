"use client";

import { useGetProductListQuery } from "@/services/features/product/productApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionLinkButton, SectionTitle } from "../shared";
import CategorySlider from "./CategorySlider";
import { Skeleton } from "@heroui/react";

const Category = ({ initialProducts, teaTypes }) => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 10,
    productType: teaTypes[0],
  });

  const [products, setProducts] = useState(initialProducts);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const { data, isLoading } = useGetProductListQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  });

  // const isLoading = true;

  useEffect(() => {
    if (data?.data) {
      setProducts(data.data);
    }
  }, [data]);

  const handleRoute = () => {
    router.push("/collection?category=tea");
  };

  const activeClass = "border-[0.5px] border-teagreen-600";

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10">
        <SectionTitle title="Explore our single teas" />
        <div className="relative group max-w-[900px] w-full flex flex-wrap gap-2 md:gap-5 mx-auto items-center justify-center mb-8 md:mb-10 py-5">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={2.5}
            loop
            speed={500}
            slidesPerGroup={1}
            spaceBetween={25}
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: ".category-btn-prev",
              nextEl: ".category-btn-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4.5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 5,
              },
              1280: {
                slidesPerView: 5.5,
                spaceBetween: 5,
              },
              1536: {
                slidesPerView: 6.5,
                spaceBetween: 5,
              },
            }}
          >
            {teaTypes.map((item, idx) => (
              <SwiperSlide key={idx} className="w-full">
                <button
                  onClick={() =>
                    setQueryParams((prev) => ({ ...prev, productType: item }))
                  }
                  className={
                    "rounded-full p-2 md:px-5 text-sm md:text-base capitalize w-full text-nowrap " +
                    (queryParams.productType === item
                      ? activeClass
                      : "bg-teagreen-100 text-teagreen-600")
                  }
                >
                  {item}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`category-btn-prev z-10 absolute top-1/2 -left-3 transform -translate-y-1/2 duration-300 py-2 px-3 text-2xl ${
              isFirstSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`category-btn-next z-10 absolute top-1/2 -right-3 transform -translate-y-1/2 duration-300 py-2 px-3 text-2xl ${
              isLastSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276F;
          </button>
        </div>

        <div className="pb-10">
          <CategorySlider products={products} isLoading={isLoading}/>
        </div>

        <div className="flex justify-center mx-auto">
          <SectionLinkButton
            url="/collection/tea"
            title="Shop All Teas"
            buttonClass="w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
