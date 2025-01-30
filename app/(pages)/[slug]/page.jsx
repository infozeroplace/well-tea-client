import axios from "@/api/axios";
import { notFound } from "next/navigation";
import Head from "next/head";
import { env } from "@/config/env";
import {
  ProductDetails,
  ProductSlider,
  ProductTabs,
  RelatedProducts,
} from "../tea/components";
import { CommonBanner } from "@/components";

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

  const siteUrl = "welltea.zeroplace.co/"

  return {
    title: `${capitalizeEachWord(product?.title)} | Well Tea`,
    description: product?.shorDescription,
    openGraph: {
      title: `${capitalizeEachWord(product?.title)} | Well Tea`,
      description: product?.shorDescription,
      url: `${siteUrl}${product?.urlParameter}`,
      images: [
        {
          url:
            `${env.image_path}/${product?.thumbnails[0]}` ||
            "/images/product_one.jpg",
          width: 1200,
          height: 630,
          alt: product?.title,
        },
      ],
      siteName: "Well Tea",
      // type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product?.title} | Well Tea`,
      description: product?.shorDescription,
      images:
        `${env.image_path}/${product?.thumbnails[0]}` ||
        "/images/product_one.jpg",
    },
  };
}

const ProductDetail = async ({ params }) => {
  // Ensure params is awaited
  const { slug } = await params; // Await the params object
  const decodedSlug = decodeURIComponent(slug);

  try {
    const {
      data: { data: product },
    } = await axios.get(`/public/product/${slug}`);

    // const jsonLd = {
    //   "@context": "https://schema.org",
    //   "@type": "Product",
    //   name: product?.title,
    //   image: product?.thumbnails[0]?.path,
    //   description: product?.shortDescription,
    // };

    return (
      <div className="section-gap">
        {/* <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head> */}
        <CommonBanner bannerTitle={product?.title} />
        <div className="container px-20 banner-gap">
          <div className="mb-10 flex flex-col lg:flex-row justify-center items-center gap-5">
            <div className="max-w-[650px] w-full">
              <ProductSlider images={product?.slideImages} />
            </div>
            <div className="max-w-[650px] w-full">
              <ProductDetails product={product} />
            </div>
          </div>
          <div>
            <ProductTabs product={product} />
          </div>
          <div>
            <RelatedProducts category={product?.category} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetail;
