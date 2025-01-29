import { StarRatingDisplay } from "@/components/shared/";
import Link from "next/link";
import ManageProduct from "./ManageProduct";
import SocialShare from "./SocialShare";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const ProductDetails = ({ product }) => {

  // console.log(product);

  // Serialize available options
  const availableOptions = product?.availableAs?.map((item) => ({
    teaFormat: item?.teaFormat[0], // Assuming one format per item
    urlParameter: item?.urlParameter,
  }));

  // Ensure the current product format is included in the options
  const currentFormat = {
    teaFormat: product?.teaFormat[0],
    urlParameter: product?.urlParameter,
  };

  const isCurrentFormatIncluded = availableOptions.some(
    (item) =>
      item.teaFormat?.toLowerCase() === currentFormat.teaFormat?.toLowerCase()
  );

  if (
    !isCurrentFormatIncluded &&
    currentFormat.teaFormat &&
    currentFormat.urlParameter
  ) {
    availableOptions.unshift(currentFormat);
  }

  return (
    <div className="py-8">
      <div className="">
        <div className="mb-6">
          <h4 className="text-teagreen-600 font-semibold capitalize">
            {product?.productType?.join(", ")}
          </h4>
          <h1 className="text-brand__font__size__lg2 font-brand__font__200">
            {product?.title}
          </h1>
          {product.teaFlavor && (
            <p className="mt-2">
              {product?.teaFlavor
                .map(
                  (flavor) => flavor?.charAt(0).toUpperCase() + flavor?.slice(1)
                )
                .join(", ")}
            </p>
          )}
          {product?.originLocation && (
            <p className="capitalize">
              From {product?.originLocation}, {product?.origin?.join(", ")}
            </p>
          )}

          <div className="flex items-center gap-2">
            <span>{toNumber(product?.ratings).toFixed(2)}</span>
            <StarRatingDisplay rating={product?.ratings} />
          </div>
          <p className="mt-4">{product?.shortDescription}</p>
        </div>

        {availableOptions.length > 0 && (
          <div className="my-5">
            <h3 className="mb-4 font-normal">Available As</h3>
            <div className="flex flex-wrap gap-2">
              {availableOptions.map(({ teaFormat, urlParameter }) => {
                const isSelected =
                  teaFormat?.toLowerCase() ===
                  product.teaFormat?.[0]?.toLowerCase();

                return (
                  <Link
                    href={isSelected ? "#" : `/${urlParameter}`}
                    key={teaFormat}
                    className={`py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full text-sm ${
                      isSelected
                        ? "border border-teagreen-600 bg-inherit cursor-not-allowed pointer-events-none"
                        : ""
                    }`}
                    aria-disabled={isSelected ? "true" : "false"}
                  >
                    {teaFormat?.charAt(0).toUpperCase() + teaFormat?.slice(1)}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <ManageProduct product={product} />

        <SocialShare productUrl={product?.urlParameter} />
      </div>
    </div>
  );
};

export default ProductDetails;
