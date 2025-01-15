import axios from "@/api/axios";
import { ProductCard } from "@/components";
import TeaFilters from "@/components/TeaFilters";
import TeaSort from "@/components/TeaSort";

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({ searchParams: rawSearchParams }) {

  const searchParams = await Promise.resolve(rawSearchParams);

  // const queryParams = new URLSearchParams(searchParams).toString();
  // const url = `/public/product/list?${queryParams}`;

  // const {
  //   data: { data },
  // } = await axios.get(url);

  const metaTitle = searchParams.type && searchParams.type.split(",").join(" | ");

  return {
    title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
    description: "",
  };
}

const ProductCategory = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?${queryParams}`;

  const {
    data: { data },
  } = await axios.get(url);

  return (
    <div className="container px-4 lg:px-10 mb-10">
      <div className="flex gap-5">
        <aside className="max-w-[200px] w-full py-5 text-teagreen-600 hidden md:block">
          <TeaFilters />
        </aside>
        <div className="flex-1 w-full">
          <div className="py-3 flex justify-end items-center gap-5">
            <div className="md:hidden">
              <TeaFilters />
            </div>
            <TeaSort />
          </div>
          {data.length > 0 ? (
            <div>
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
    </div>
  );
};

export default ProductCategory;
