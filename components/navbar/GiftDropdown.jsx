import { env } from "@/config/env";
import Link from "next/link";
import NextImage from "../shared/NextImage";

function GiftDropdown({ dropdownItem, category }) {
  const productType = dropdownItem["productType"];
  const productTypeTitle = productType?.columnTitle || "";
  const productTypeChildren = productType?.children || [];

  const attribute = dropdownItem["attribute"];
  const attributeTitle = attribute?.columnTitle || "";
  const attributeChildren = attribute?.children || [];

  const teaFormat = dropdownItem["teaFormat"];
  const teaFormatTitle = teaFormat?.columnTitle || "";
  const teaFormatChildren = teaFormat?.children || [];

  const featured1 = dropdownItem["featured1"];
  const featured1Title = featured1?.title || "";
  const featured1Route = featured1?.route || "/";
  const featured1Thumbnail = featured1?.thumbnail || {};

  return (
    <div className="max-w-[1024px] w-full mx-auto flex justify-between capitalize">
      <div className="flex justify-evenly w-full border-r p-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{productTypeTitle}</h3>
          {productTypeChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/${category}?teaFlavor=${item?.assortment}`}
              className="hover:text-teagreen-600"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{teaFormatTitle}</h3>
          {teaFormatChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/${category}?teaFormat=${item?.assortment}`}
              className="hover:text-teagreen-600 flex items-center gap-3"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{attributeTitle}</h3>
          {attributeChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/${category}?attribute=${item?.assortment}`}
              className="hover:text-teagreen-600"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full">
        <Link href={featured1Route}>
          <div className="flex flex-col gap-2 p-4">
            <NextImage
              img={
                featured1Thumbnail?.filepath
                  ? `${env.app_url}${featured1Thumbnail?.filepath}`
                  : "/placeholder.jpg"
              }
              alt={featured1Thumbnail?.alternateText || "image"}
              presets={{width: 300, height: 250}}
              className="max-w-[300px] w-full max-h-[200px] h-full object-cover"
            />
            {featured1Title && <p>{featured1Title}</p>}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GiftDropdown;
