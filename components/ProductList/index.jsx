"use client";

import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import TeaFilters from "../TeaFilters";
import TeaSort from "../TeaSort";
import { ProductCard } from "../shared";

const PAGE_LIMITS = [10, 20, 30, 50, 100];

const ProductList = ({ products, category, meta }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [productLimit, setProductLimit] = useState(
    meta.limit || PAGE_LIMITS[0]
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (productLimit !== meta.limit) {
      setProductLimit(meta.limit || PAGE_LIMITS[0]);
    }
  }, [meta.limit]);

  const { data: { data: { filters } = [] } = {} } = useGetSystemConfigQuery();

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > meta.totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    params.set("limit", productLimit);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleLimitChange = (newLimit) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit);
    params.set("page", 1); // Reset to page 1 when changing limit
    setProductLimit(newLimit);
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
              <div className="flex flex-col gap-10 w-full mb-10">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {products.slice(0, productLimit).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-end items-center">
                    <span className="text-end font-brand__font__light text-teagreen-600 text-brand__font__size__sm">
                      Showing {Math.min(productLimit, meta.totalDocs)} of{" "}
                      {meta.totalDocs}
                    </span>
                  </div>

                  <div className="flex justify-end gap-2">
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => handlePageChange(meta.page - 1)}
                        disabled={meta.page <= 1}
                        className={`px-4 border text-teagreen-600 ${
                          meta.page <= 1 ? "opacity-50" : ""
                        }`}
                      >
                        <FaChevronLeft />
                      </button>

                      {Array.from({
                        length: Math.ceil(meta.totalDocs / productLimit),
                      }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          disabled={meta.page === index + 1}
                          className={`px-4 border hover:bg-teagreen-500 hover:text-white text-teagreen-500 ${
                            meta.page === index + 1
                              ? "bg-teagreen-500 text-white opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(meta.page + 1)}
                        disabled={
                          meta.page >= Math.ceil(meta.totalDocs / productLimit)
                        }
                        className={`px-4 py-2 border text-teagreen-600 ${
                          meta.page >= Math.ceil(meta.totalDocs / productLimit)
                            ? "opacity-50"
                            : ""
                        }`}
                      >
                        <FaChevronRight />
                      </button>
                    </div>

                    <select
                      className="border px-2 rounded-md text-teagreen-700 text-brand__font__size__xs"
                      value={productLimit}
                      onChange={(e) =>
                        handleLimitChange(Number(e.target.value))
                      }
                    >
                      {PAGE_LIMITS.map((limit) => (
                        <option key={limit} value={limit}>
                          {limit} per page
                        </option>
                      ))}
                    </select>
                  </div>
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
