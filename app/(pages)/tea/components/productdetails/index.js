import Link from "next/link";
import { StarRatingDisplay } from "@/components/shared/";
import ManageProduct from "./ManageProduct";
import SocialShare from "./SocialShare";


const ProductDetails = ({ product }) => {

  const availableOptions = ["Loose Leaf", "Tea Bags", "Tea Caddy"];

  console.log(product.type[0].toLowerCase());

  return (
    <div className="py-8">
      <div className="">
        <div className="mb-6">
          <h4 className="text-teagreen-600 font-semibold capitalize">
            {product.type}
          </h4>
          <h1 className="text-2xl font-normal">{product.title}</h1>
          <p className="mt-2 capitalize">{product.flavour}</p>
          <p className="capitalize">
            {product.originAddress}, {product.originName}
          </p>
          <div className="flex items-center gap-2">
            <span>{product.ratings}</span>
            <StarRatingDisplay rating={product.ratings} />
          </div>
          <p className="mt-4">{product.shortDescription}</p>
        </div>

        <div className="my-5">
          <h3 className="mb-4 font-normal">Available As</h3>
          <div className="flex gap-4">
            {availableOptions.map((item) => (
              <Link
                href="/"
                key={item}
                className={
                  "py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full " +
                  (item.toLowerCase() === product.format[0].toLowerCase() &&
                    "border-1 border-teagreen-600 bg-inherit")
                }
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <ManageProduct product={product} />
        <SocialShare />
      </div>
    </div>
  );
};

export default ProductDetails;
