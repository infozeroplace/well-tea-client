import axios from "@/api/axios";
import CategoryCard from "@/components/category/CategoryCard";
import { FilterButton, Filters, Sort } from "./components";

const TeaType = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?${queryParams}`

  const {
    data: { data },
  } = await axios.get(`/public/product/list?${queryParams}`);

  return (
    <div className="flex">
      <Filters />

      <div>
        {data.length > 0 ? (
          <div>
            <div className="sticky mx-5 py-5 h-[70px] flex justify-between items-center border-b-1">
              <p>Products: {data.length}</p>
              <div className="flex gap-10">
                <FilterButton />
                <Sort />
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
              {data.map((item) => (
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

export default TeaType;
