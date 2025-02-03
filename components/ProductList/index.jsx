"use client";

import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import TeaFilters from "../TeaFilters";
import TeaSort from "../TeaSort";
import { ProductCard } from "../shared";

const ProductList = ({ products, category, meta }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [productLimit, setProductLimit] = useState(meta.limit || 0);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ensure productLimit syncs with meta.limit without unnecessary re-renders
  useEffect(() => {
    if (productLimit !== meta.limit) {
      setProductLimit(meta.limit || 0);
    }
  }, [meta.limit]);

  const { data: { data: { filters } = [] } = {} } = useGetSystemConfigQuery();

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handleLoadMoreProducts = async () => {
    if (productLimit >= meta.totalDocs) return;

    const newLimit = Math.min(productLimit + meta.limit, meta.totalDocs);
    setProductLimit(newLimit);

    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="banner-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex gap-5">
          {/* Sidebar for Filters */}
          <aside
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFilterVisible ? "max-w-[200px] w-full py-5" : "max-w-0 w-0"
            } text-teagreen-600 hidden md:block`}
          >
            {isFilterVisible && (
              <TeaFilters filters={filters} category={category} />
            )}
          </aside>

          {/* Main Product List */}
          <div className="flex-1 w-full">
            <div className="py-3 flex justify-end items-center gap-5">
              <div className="md:hidden">
                <TeaFilters filters={filters} category={category} />
              </div>
              <TeaSort onToggleFilter={toggleFilterVisibility} />
            </div>

            {products.length > 0 ? (
              <div className="flex flex-col gap-20 w-full mb-10">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {products.slice(0, productLimit).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                {/* Show more button */}
                <div className="flex flex-col gap-4 w-full">
                  <span className="text-center font-brand__font__light">
                    Showing {Math.min(productLimit, meta.totalDocs)} of{" "}
                    {meta.totalDocs}
                  </span>

                  {productLimit < meta.totalDocs && (
                    <button
                      onClick={handleLoadMoreProducts}
                      className="max-w-[250px] w-full mx-auto py-2 px-4 text-center border border-teagreen-500 text-teagreen-700 flex gap-5 items-center justify-between font-brand__font__light"
                    >
                      <span>Load More</span>
                      <GoPlus />
                    </button>
                  )}
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
