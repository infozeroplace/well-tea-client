"use client";

import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";
import { useState } from "react";
import TeaFilters from "../TeaFilters";
import TeaSort from "../TeaSort";
import { ProductCard } from "../shared";

const ProductList = ({ products }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const { data: { data: { filters } = [] } = {} } = useGetSystemConfigQuery();

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="banner-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex gap-5">
          <aside
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFilterVisible ? "max-w-[200px] w-full py-5" : "max-w-0 w-0"
            } text-teagreen-600 hidden md:block`}
          >
            {isFilterVisible && <TeaFilters filters={filters} />}
          </aside>

          <div className="flex-1 w-full">
            <div className="py-3 flex justify-end items-center gap-5">
              <div className="md:hidden">
                <TeaFilters filters={filters} />
              </div>
              <TeaSort onToggleFilter={toggleFilterVisibility} />
            </div>

            {products.length > 0 ? (
              <div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center">
                <h1>No Products Found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
