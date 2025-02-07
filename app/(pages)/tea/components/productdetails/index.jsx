import { StarRatingDisplay } from "@/components/shared/";
import Link from "next/link";
import ShortDescription from "../shortdescription";
import ManageProduct from "./ManageProduct";
import SocialShare from "./SocialShare";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const ProductDetails = ({ product }) => {
  const availableOptions = product?.availableAs?.map((item) => ({
    teaFormat: item?.teaFormat[0], // Assuming one format per item
    urlParameter: item?.urlParameter,
  }));

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
    <div>
      <div className="mb-6">
        <h4 className="text-teagreen-600 font-semibold capitalize">
          {product?.productType?.join(", ")}
        </h4>
        <h1 className="text-brand__font__size__lg2 font-brand__font__200 leading-tight">
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

        {(product?.originLocation || product?.origin?.length > 0) && (
          <p className="capitalize">
            From {product?.originLocation ? `${product.originLocation}, ` : ""}
            {product?.origin?.join(", ")}
          </p>
        )}

        <div className="flex items-center gap-2">
          <span>{toNumber(product?.ratings).toFixed(1)}</span>
          <StarRatingDisplay rating={product?.ratings} />
        </div>

        {/* Short Description with "See More" button */}
        <ShortDescription desc={product?.shortDescription} />
      </div>

      {availableOptions.length > 0 && (
        <div>
          <h3 className="text-teagreen-700 mb-1 font-normal text-brand__font__size__sm">
            Available as:
          </h3>
          <div className="flex flex-wrap gap-2">
            {availableOptions.map(({ teaFormat, urlParameter }) => {
              const isSelected =
                teaFormat?.toLowerCase() ===
                product?.teaFormat?.[0]?.toLowerCase();

              return isSelected ? (
                <span
                  className="py-1.5 px-10 text-teagreen-600 text-brand__font__size__sm font-brand__font__500 capitalize border border-teagreen-800 flex cursor-pointer"
                  key={teaFormat}
                >
                  {" "}
                  {teaFormat}
                </span>
              ) : (
                <Link
                  href={`/${urlParameter}`}
                  key={teaFormat}
                  className="py-1.5 px-10 text-teagreen-600 text-brand__font__size__sm font-brand__font__500 capitalize border border-teagreen-400 hover:border-teagreen-600 duration-300"
                >
                  {teaFormat}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <ManageProduct product={product} />

      <SocialShare productUrl={product?.urlParameter} />
    </div>
  );
};

export default ProductDetails;
