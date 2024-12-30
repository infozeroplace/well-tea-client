import Link from "next/link";
import { StarRatingDisplay } from "@/components/shared/";
import ManageProduct from "./ManageProduct";


const ProductDetails = ({ product }) => {

  const availableOptions = ["Loose Leaf", "Tea Bags", "Tea Caddy"];

  return (
    <div className="py-8">
      <div className="">
        <div className="mb-6">
          <h4 className="text-green-800 font-semibold">{product.type}</h4>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2">Floral, Edamame, Cut Grass</p>
          <p className="">From Hunan, China</p>
          <div className="flex items-center gap-2">
            <span>{product.rating}</span>
            <StarRatingDisplay rating={product.rating} />
          </div>
          <p className="mt-4">
            Adipisicing aliqua consequat aliqua amet aliquip tempor elit Lorem
            eiusmod veniam amet. Laboris sunt aliqua ut cillum ipsum sint.
            Incididunt aute sint elit voluptate ut deserunt nulla laborum. Duis
            deserunt cillum velit occaecat excepteur eu aliquip anim eu. Id nisi
            aute magna cillum magna qui quis et ea officia eiusmod exercitation.
          </p>
        </div>

        <div className="my-5">
          <h3 className="mb-4 font-normal">Available As</h3>
          <div className="flex gap-4">
            {availableOptions.map((item) => (
              <Link
                href="/"
                key={item}
                className="py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
            <ManageProduct product={product}/>
      </div>
    </div>
  );
};

export default ProductDetails;
