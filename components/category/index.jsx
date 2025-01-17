"use client";

import { useGetProductListQuery } from "@/services/features/product/productApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionButton, SectionTitle } from "../shared";
import CategorySlider from "./CategorySlider";

const Category = ({ initialProducts, teaTypes }) => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 10,
    type: "green tea",
  });

  const [products, setProducts] = useState(initialProducts);

  const { data } = useGetProductListQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data?.data) {
      setProducts(data.data);
    }
  }, [data]);

  const handleRoute = () => {
    router.push("/collection?category=tea");
  };

  const activeClass = "border-[0.5px] border-teagreen-600";

  return (
    <div className="section-gap">
      <div className="container px-4 lg:px-20">
        <SectionTitle title="Explore our single teas" />
        <div className="max-w-[900px] w-full flex flex-wrap gap-2 md:gap-5 mx-auto items-center justify-center mb-8 md:mb-10 border p-4">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={6.5}
            loop
            speed={2000}
            slidesPerGroup={1}
            spaceBetween={25}
            breakpoints={{
              768: {
                slidesPerView: 3.5,
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
            }}
          >
            {teaTypes.map((item) => (
              <SwiperSlide key={item} className="w-full">
                <button
                  onClick={() =>
                    setQueryParams((prev) => ({ ...prev, type: item }))
                  }
                  className={
                    "rounded-full p-2 md:px-5 text-sm md:text-base capitalize w-full " +
                    (queryParams.type === item
                      ? activeClass
                      : "bg-teagreen-100 text-teagreen-600")
                  }
                >
                  {item}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pb-10">
          <CategorySlider products={products} />
        </div>

        <div className="flex justify-center mx-auto">
          <SectionButton title="Shop All Teas" />
        </div>
      </div>
    </div>
  );
};

export default Category;
