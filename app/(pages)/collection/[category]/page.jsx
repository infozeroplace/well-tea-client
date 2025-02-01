import axios from "@/api/axios";
import { CommonBanner } from "@/components";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({
  searchParams: rawSearchParams,
  params,
}) {
  const { category } = await params;
  const decodedCategory = await decodeURIComponent(category);
  const searchParams = await Promise.resolve(rawSearchParams);

  const metaTitle =
    searchParams.type && searchParams.type.split(",").join(" | ");

  return {
    title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
    description: `Explore products under ${decodedCategory}.`,
    keywords: `${decodedCategory}, ${searchParams.type}`,
    openGraph: {
      title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
      description: `Explore products under ${decodedCategory}.`,
    },
    twitter: {
      card: "summary_large_image",
      title: searchParams.type ? capitalizeEachWord(metaTitle) : "All Products",
      description: `Explore products under ${decodedCategory}.`,
    },
  };
}

const ProductCategoryScreen = async ({
  params,
  searchParams: rawSearchParams,
}) => {
  const { category } = await params;
  const decodedCategory = await decodeURIComponent(category);

  const searchParams = await Promise.resolve(rawSearchParams);
  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?category=${decodedCategory}&${queryParams}`;

  const { data: { data = [] } = {} } = await axios.get(url);

  const metaTitle =
    searchParams.type && searchParams.type.split(",").join(" | ");

  const siteUrl = "http://welltea.zeroplace.co/";

  return (
    <>
      <CommonBanner
        bannerTitle={
          searchParams.type ? capitalizeEachWord(metaTitle) : "All Products"
        }
      />
      <ProductList products={data} category={decodedCategory} />
    </>
  );
};

export default ProductCategoryScreen;
