"use client";

import { useSelector, useDispatch } from "react-redux";
import CategorySlider from "./CategorySlider";
import CategoryButton from "./CategoryButton";
import { setCategory } from "@/services/features/category/categorySlice";
import { productList } from "@/data/products";
import { SectionButton, SectionTitle } from "../shared";

function Category() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const categoryList = [...new Set(productList.map((product) => product.type))];
  const filteredProducts = productList.filter(
    (product) => product.type === selectedCategory
  );

  const visibleProducts = filteredProducts.slice(0, 7);

  const activeClass = "border-[0.5px] border-teagreen-600";

  return (
    <div className="section-gap">
      <div className="container px-4 lg:px-20">
        <SectionTitle title="Explore our single teas" />
        <div className="flex flex-wrap gap-2 md:gap-5 w-full mx-auto items-center justify-center mb-8 md:mb-10">
          {/* <CategoryList categoryList={categoryList} /> */}
          {categoryList.map((item) => (
            <button
              key={item}
              onClick={() => dispatch(setCategory(item))}
              className={
                "rounded-full p-2 md:px-5 text-sm md:text-base capitalize " +
                (selectedCategory === item
                  ? activeClass
                  : "bg-teagreen-100 text-teagreen-600")
              }
            >
              {item.replace("-", " ")}
            </button>
          ))}
        </div>
        <div className="">
          <div className="my-10">
            <CategorySlider visibleProducts={visibleProducts} />
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <SectionButton title="Shop All Teas" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Category;
