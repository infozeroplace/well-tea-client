import axios from "@/api/axios";
import ProductList from "@/components/ProductList";

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({ searchParams, params }) {
  const metaTitle =
    searchParams.type && searchParams.type.split(",").join(" | ");

  return {
    title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
    description: `Explore products under ${params.category}.`,
  };
}

const ProductCategoryScreen = async ({
  params,
  searchParams: rawSearchParams,
}) => {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  const searchParams = await Promise.resolve(rawSearchParams);
  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?category=${decodedCategory}&${queryParams}`;

  const { data: { data = [] } = {} } = await axios.get(url);

  return <ProductList products={data} />;
};

export default ProductCategoryScreen;
