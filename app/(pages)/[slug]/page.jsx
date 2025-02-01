import axios from "@/api/axios";
import { env } from "@/config/env";
import { notFound } from "next/navigation";
import {
  ProductDetails,
  ProductSlider,
  ProductTabs,
  RelatedProducts,
  YoutubeVideo,
} from "../tea/components";

export const revalidate = 0;

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const {
    data: { data: product },
  } = await axios.get(`/public/product/${slug}`);

  const siteUrl = "welltea.zeroplace.co/";

  return {
    title: `${capitalizeEachWord(product?.metaTitle)}`,
    description: product?.shorDescription,
    openGraph: {
      title: `${capitalizeEachWord(product?.metaTitle)}`,
      description: product?.shorDescription,
      url: `${siteUrl}${product?.urlParameter}`,
      images: [
        {
          url:
            `${env.image_path}/${product?.thumbnails[0]}` ||
            "/images/product_one.jpg",
          width: 1200,
          height: 630,
          alt: product?.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product?.metaTitle} | Well Tea`,
      description: product?.shorDescription,
      images: [
        `${env.image_path}/${product?.thumbnails[0]}` ||
          "/images/product_one.jpg",
      ],
    },
  };
}

const ProductDetail = async ({ params }) => {
  const { slug } = await params; // Await the params object
  const decodedSlug = decodeURIComponent(slug);

  try {
    const {
      data: { data: product },
    } = await axios.get(`/public/product/${slug}`);

    return (
      <div className="container px-5 sm:px-10 md:px-14 lg:px-20 banner-gap">
        <div className="container-narrow mb-10 flex flex-col xl:flex-row gap-10">
          <div className="basis-[60%] xl:max-w-[750px] w-full">
            <ProductSlider product={product} />
          </div>
          <div className="basis-[40%] w-full">
            <ProductDetails product={product} />
          </div>
        </div>
        <div className="container-narrow">
          <ProductTabs product={product} />
        </div>
        {product.youtubeLink && (
          <div className="container-narrow flex justify-center items-center">
            <div className="max-w-[1024px] w-full">
              <YoutubeVideo youtubeLink={product.youtubeLink} />
            </div>
          </div>
        )}
        <div>
          <RelatedProducts category={product?.category} />
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetail;
