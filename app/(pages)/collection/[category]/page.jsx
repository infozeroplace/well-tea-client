import axios from "@/api/axios";
import ProductList from "@/components/ProductList";
import { CommonBanner } from "@/components";
import Head from "next/head";

export const revalidate = 0;

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
    openGraph: {
      title: searchParams.type
        ? capitalizeEachWord(metaTitle)
        : "All Products",
      description: `Explore products under ${params.category}.`,
    },
    twitter: {
      card: "summary_large_image",
      title: searchParams.type
       ? capitalizeEachWord(metaTitle)
        : "All Products",
      description: `Explore products under ${params.category}.`,
    }
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
  
  const siteUrl = "http://welltea.zeroplace.co/";

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "ItemList",
  //   url: siteUrl,
  //   numberOfItems: data.length,
  //   itemListOrder: "Unordered",
  //   itemListElement: data.map((product, index) => ({
  //     "@type": "ListItem",
  //     position: index + 1,
  //     item: {
  //       "@type": "Product",
  //       name: product?.title,
  //       image: product?.thumbnails[0]?.path,
  //       description: product?.shortDescription,
  //       url: `${siteUrl}${product?.urlParameter}`,
  //     },
  //   })),
  // };

  return (
    <div className="">
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head> */}
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
