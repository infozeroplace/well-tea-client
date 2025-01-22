import axios from "@/api/axios";
import ProductList from "@/components/ProductList";
import SearchQuery from "@/components/searchQuery";
import { CommonBanner } from "@/components";

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
    },
    twitter: {
      card: "summary_large_image",
      title: "Search",
      description: "",
    }
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
      <SearchQuery initialSearchTerm={searchParams.searchTerm}/>
      {data.length > 0 && 
        <ProductList products={data} />
      }
    </div>
  );
};

export default ProductCategory;
