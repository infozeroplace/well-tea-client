"use client";
import CategoryCard from "@/components/category/CategoryCard";
import FilterButton from "../filterButton";
import Filters from "../filters";
import Sort from "../sort";

const TeaTypeClient = ({ initialProducts }) => {
  return (
    <div className="flex">
      <Filters />

      <div>
        {initialProducts.length > 0 ? (
          <div>
            <div className="sticky mx-5 py-5 h-[70px] flex justify-between items-center border-b-1">
              <p>Products: {initialProducts.length}</p>
              <div className="flex gap-10">
                <FilterButton />
                <Sort />
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
              {initialProducts.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-10">
            <h1>No Products Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeaTypeClient;
