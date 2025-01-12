"use client";

import { useGetProductListQuery } from "@/services/features/product/productApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionButton, SectionTitle } from "../shared";
import CategorySlider from "./CategorySlider";

const types = [
  "green tea",
  "ginger tea",
  "organic tea",
  "yellow tea",
  "black tea",
  "herbal tea",
];

const Category = ({ initialProducts }) => {
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
    router.push("/product-category?type=tea");
  };

  const activeClass = "border-[0.5px] border-teagreen-600";

  return (
    <div className="section-gap">
      <div className="container px-4 lg:px-20">
        <SectionTitle title="Explore our single teas" />
        <div className="flex flex-wrap gap-2 md:gap-5 w-full mx-auto items-center justify-center mb-8 md:mb-10">
          {types.map((item) => (
            <button
              key={item}
              onClick={() =>
                setQueryParams((prev) => ({ ...prev, type: item }))
              }
              className={
                "rounded-full p-2 md:px-5 text-sm md:text-base capitalize " +
                (queryParams.type === item
                  ? activeClass
                  : "bg-teagreen-100 text-teagreen-600")
              }
            >
              {item}
            </button>
          ))}
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
