import axios from "@/api/axios";
import { ProductCard } from "@/components";
import TeaFilters from "@/components/TeaFilters";
import TeaSort from "@/components/TeaSort";

const ProductCategory = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?${queryParams}`;

  const {
    data: { data },
  } = await axios.get(url);

  return (
    <div className="flex container px-4 lg:px-10 gap-5">
      <aside className="max-w-[200px] w-full py-5 text-teagreen-600">
        <TeaFilters />
      </aside>
      <div className="flex-1">
        {data.length > 0 ? (
          <div>
            <div className="py-3 flex justify-end items-center">
              <TeaSort />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {data.map((product) => (
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
  );
};

export default ProductCategory;
