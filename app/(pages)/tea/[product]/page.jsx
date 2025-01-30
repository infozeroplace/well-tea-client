import { productList } from "@/data/products";
import {
  ProductDetails,
  ProductSlider,
  ProductTabs,
  RelatedProducts,
} from "../components";

export const revalidate = 0;

function Product({ params }) {
  const productId = decodeURIComponent(params.product);

  const product = productList.find((product) => product.id === productId);

  return (
    <div className="">
      <div className="container px-20 my-10">
        <div className="mb-10 flex justify-between items-center gap-10">
          <div className="basis-1/2">
            <ProductSlider />
          </div>
          <div className="basis-1/2">
            <ProductDetails product={dummyProduct} />
          </div>
        </div>
        <div>
          <ProductTabs product={dummyProduct} />
        </div>
        <div>
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
}

export default Product;
