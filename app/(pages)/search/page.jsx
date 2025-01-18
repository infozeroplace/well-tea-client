import axios from "@/api/axios";
import ProductList from "@/components/ProductList";

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({ searchParams: rawSearchParams }) {
  const searchParams = await Promise.resolve(rawSearchParams);

  const metaTitle =
    searchParams.type && searchParams.type.split(",").join(" | ");

  return {
    title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
    description: "",
  };
}

const ProductCategory = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?${queryParams}`;

  const { data: { data = [] } = {} } = await axios.get(url);

  return (
    <div>
        <div>
            Search
        </div>
      <ProductList products={data} />
    </div>
  );
};

export default ProductCategory;
