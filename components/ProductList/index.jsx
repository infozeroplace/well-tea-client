"use client";

import { useState } from "react";
import TeaFilters from "../TeaFilters";
import TeaSort from "../TeaSort";
import { ProductCard } from "../shared";

const ProductList = ({ products }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="container px-4 lg:px-10 section-gap banner-gap">
      <div className="flex gap-5">
        {/* Sidebar for filters */}
        <aside
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isFilterVisible ? "max-w-[200px] w-full py-5" : "max-w-0 w-0"
          } text-teagreen-600 hidden md:block`}
        >
          {isFilterVisible && <TeaFilters />}
        </aside>

        <div className="flex-1 w-full">
          {/* Sort and Filter Controls */}
          <div className="py-3 flex justify-end items-center gap-5">
            <div className="md:hidden">
              <TeaFilters />
            </div>
            <TeaSort onToggleFilter={toggleFilterVisibility} />
          </div>

          {/* Product Grid */}
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
  );
};

export default ProductList;
