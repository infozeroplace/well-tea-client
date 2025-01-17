import { StarRatingDisplay } from "@/components/shared/";
import Link from "next/link";
import ManageProduct from "./ManageProduct";
import SocialShare from "./SocialShare";

const ProductDetails = ({ product }) => {
  // Serialize available options
  const availableOptions = product.availableAs.map((item) => ({
    format: item.format[0], // Assuming one format per item
    urlParameter: item.urlParameter,
  }));

  console.log(availableOptions);

  // Ensure the current product format is included in the options
  const currentFormat = {
    format: product.format[0],
    urlParameter: product.urlParameter,
  };

  const isCurrentFormatIncluded = availableOptions.some(
    (item) => item.format?.toLowerCase() === currentFormat.format?.toLowerCase()
  );

  if (!isCurrentFormatIncluded && currentFormat.format && currentFormat.urlParameter) {
    availableOptions.unshift(currentFormat);
  }

  console.log(product);

  return (
    <div className="py-8">
      <div className="">
        <div className="mb-6">
          <h4 className="text-teagreen-600 font-semibold capitalize">
            {product.type.join(", ")}
          </h4>
          <h1 className="text-brand__font__size__lg2 font-brand__font__200">
            {product.title}
          </h1>
          <p className="mt-2">
            {product.flavour
              .map((flavor) => flavor.charAt(0).toUpperCase() + flavor.slice(1))
              .join(", ")}
          </p>
          <p className="capitalize">
            {product.originAddress}, {product.originName.join(", ")}
          </p>
          <span>£{product?.unitPrices[0]?.price}</span>
          <div className="flex items-center gap-2">
            <span>{product.ratings}</span>
            <StarRatingDisplay rating={product.ratings} />
          </div>
          <p className="mt-4">{product.shortDescription}</p>
        </div>

        <div className="my-5">
          <h3 className="mb-4 font-normal">Available As</h3>
          <div className="flex flex-wrap gap-2">
            {availableOptions.map(({ format, urlParameter }) => {
              const isSelected =
                format?.toLowerCase() === product.format?.[0]?.toLowerCase();

                console.log(format);

              return (
                <Link
                  href={isSelected ? "#" : `/${urlParameter}`}
                  key={format}
                  className={`py-2 px-5 text-teagreen-800 bg-teagreen-100 rounded-full text-sm ${
                    isSelected
                      ? "border border-teagreen-600 bg-inherit cursor-not-allowed pointer-events-none"
                      : ""
                  }`}
                  aria-disabled={isSelected ? "true" : "false"} // Accessibility support
                >
                  {format?.charAt(0).toUpperCase() + format?.slice(1)}
                </Link>
              );
            })}
          </div>
        </div>

        <ManageProduct product={product} />

        <SocialShare />
      </div>
    </div>
  );
};

export default ProductDetails;
