import axios from "@/api/axios";
import { notFound } from "next/navigation";
import {
  ProductDetails,
  ProductSlider,
  ProductTabs,
  RelatedProducts,
} from "../tea/components";
import { CommonBanner } from "@/components";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const {
    data: { data: product },
  } = await axios.get(`/public/product/${slug}`);

  // console.log(product);

  return {
    title: product?.metaTitle,
    description: product?.metaDescription,
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

    console.log(product);

    return (
      <div className="">
        <CommonBanner bannerTitle={product.title}/>
        <div className="container px-20 my-10">
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
