import axios from "@/api/axios";
import { notFound } from "next/navigation";
import {
  ProductDetails,
  ProductSlider,
  ProductTabs,
  RelatedProducts,
} from "../tea/components";

const ProductDetail = async ({ params }) => {
  const slug = decodeURIComponent(params.slug);

  try {
    const {
      data: { data: product },
    } = await axios.get(`/public/product/${slug}`);

    return (
      <div className="">
        <div className="container px-20 my-10">
          <div className="mb-10 flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full">
              <ProductSlider images={product.slideImages} />
            </div>
            <div className="w-full">
              <ProductDetails product={product} />
            </div>
          </div>
          <div>
            <ProductTabs product={product} />
          </div>
          <div>
            <RelatedProducts category={product.category} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetail;
