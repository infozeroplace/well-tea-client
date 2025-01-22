import axios from "@/api/axios";
import ProductList from "@/components/ProductList";
import { CommonBanner } from "@/components";

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
    keywords: `${params.category}, ${searchParams.type}`,
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

  const metaTitle =
    searchParams.type && searchParams.type.split(",").join(" | ");

  return (
    <div className="">
      <CommonBanner
        bannerTitle={
          searchParams.type ? capitalizeEachWord(metaTitle) : "All Products"
        }
      />
      <ProductList products={data} />
    </div>
  );
};

export default ProductCategoryScreen;
