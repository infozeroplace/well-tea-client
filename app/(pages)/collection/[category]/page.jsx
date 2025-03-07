import axios from "@/api/axios";
import { CommonBanner } from "@/components";
import ProductList from "@/components/ProductList";
import { Skeleton } from "@heroui/react";
// import { Suspense } from "react";

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
  const queryParams = new URLSearchParams(searchParams).toString();

  const metaTitle =
    searchParams.productType && searchParams.productType.split(",").slice(0, 3).join(" | ");
  
  // const title = searchParams.productType
  //   ? capitalizeEachWord(metaTitle)
  //   : "All Products";

  const title = `${capitalizeEachWord(decodedCategory)} Products`;
  const imageUrl = "/images/chooseus-1.jpg";
  const siteUrl = "welltea.zeroplace.co/";

  const queryString = queryParams ? `?${queryParams}` : "";
  const fullUrl = `${siteUrl}collection/${decodedCategory}${queryString}`;

  // console.log(fullUrl);

  return {
    title: title,
    description: `Explore products under ${decodedCategory}.`,
    keywords: `${decodedCategory}, ${searchParams.productType}`,
    openGraph: {
      title: title,
      description: `Explore products under ${decodedCategory}.`,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: "Well Tea",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: `Explore products under ${decodedCategory}.`,
      images: [imageUrl],
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

  const { data: { data = [], meta = {} } = {} } = await axios.get(
    `/public/product/list?category=${decodedCategory}&${queryParams}`
  );

  return (
    <>
      <CommonBanner
        bannerTitle={
          searchParams.type
            ? capitalizeEachWord(
                searchParams.type && searchParams.type.split(",").join(" | ")
              )
            : "All Products"
        }
      />
      <ProductList products={data} category={decodedCategory} meta={meta} />
    </>
  );
};

export default ProductCategoryScreen;
