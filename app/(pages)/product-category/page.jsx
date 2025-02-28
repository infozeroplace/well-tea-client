import axios from "@/api/axios";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

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
    keywords: "",
    openGraph: {
      title: "Delivery",
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
      title: "Delivery",
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

  return <ProductList products={data} />;
};

export default ProductCategory;
