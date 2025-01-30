import axios from "@/api/axios";
import { CommonBanner } from "@/components";
import ProductList from "@/components/ProductList";
import SearchQuery from "@/components/searchQuery";

export const revalidate = 0;

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({ searchParams: rawSearchParams }) {
  // const searchParams = await Promise.resolve(rawSearchParams);

  // const metaTitle =
  //   searchParams.type && searchParams.type.split(",").join(" | ");

  return {
    title: "Search",
    description: "",
    keywords: "",
    openGraph: {
      title: "Search",
      description: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Search",
      description: "",
      images: [""],
    },
  };
}

const ProductCategory = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();

  const url = `/public/product/list?${queryParams}`;

  const { data: { data = [] } = {} } = await axios.get(url);

  return (
    <div>
      <CommonBanner bannerTitle="Search" />
      <SearchQuery initialSearchTerm={searchParams.searchTerm} />
      {data.length > 0 && searchParams.searchTerm ? (
        <ProductList products={data} />
      ) : (
        <div className="text-center p-5">
          <h3 className="">No products found"</h3>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
