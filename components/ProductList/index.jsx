"use client";

import { useGetSystemConfigQuery } from "@/services/features/system/systemApi";
import { useState } from "react";
import TeaFilters from "../TeaFilters";
import TeaSort from "../TeaSort";
import { ProductCard } from "../shared";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@nextui-org/react";

const ProductList = ({ products, category, meta }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [productLimit, setProductLimit] = useState(meta.limit);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: { data: { filters } = [] } = {} } = useGetSystemConfigQuery();

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handleShowProducts = async () => {
    setIsLoading(true);
    try {
      const newLimit = productLimit + meta.limit;
      setProductLimit(newLimit < meta.totalDocs ? newLimit : meta.totalDocs);
      const params = new URLSearchParams(searchParams.toString());
      params.set("limit", newLimit < meta.totalDocs ? newLimit : meta.totalDocs );
      router.push(`?${params.toString()}`);
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(productLimit, products);
  // console.log(isLoading);

  return (
    <div className="banner-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="flex gap-5">
          <aside
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFilterVisible ? "max-w-[200px] w-full py-5" : "max-w-0 w-0"
            } text-teagreen-600 hidden md:block`}
          >
            {isFilterVisible && (
              <TeaFilters filters={filters} category={category} />
            )}
          </aside>

          <div className="flex-1 w-full">
            <div className="py-3 flex justify-end items-center gap-5">
              <div className="md:hidden">
                <TeaFilters filters={filters} category={category} />
              </div>
              <TeaSort onToggleFilter={toggleFilterVisibility} />
            </div>
            {isLoading && <Spinner />}
            {products.length > 0 ? (
              <div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>

                <div className="text-center mt-10">Showing {productLimit} of {meta.totalDocs}</div>

                {meta.totalDocs > productLimit && (
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleShowProducts}
                    className="py-2 px-4 my-10 text-center border flex gap-5 items-center justify-between"
                  >
                    Load More Products {isLoading && <Spinner />}
                    {/* <span>+</span> */}
                  </button>
                </div>
                )} 
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
