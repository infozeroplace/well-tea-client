import { env } from "@/config/env";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeawareDropdown({ dropdownItem, category }) {
  const productType = dropdownItem["productType"];
  const productTypeTitle = productType?.columnTitle || "";
  const productTypeChildren = productType?.children || [];

  const attribute = dropdownItem["attribute"];
  const attributeTitle = attribute?.columnTitle || "";
  const attributeChildren = attribute?.children || [];

  const featured1 = dropdownItem["featured1"];
  const featured1Title = featured1?.title || "";
  const featured1Route = featured1?.route || "/";
  const featured1Thumbnail = featured1?.thumbnail || {};

  return (
    <div className="flex justify-between max-w-[768px] mx-auto gap-10 w-full p-5 capitalize">
      <div className="flex flex-col gap-2 capitalize">
        <h3 className="font-extralight text-xl">
          {" "}
          <Link
            href={`/collection/${category}`}
            className="flex items-center gap-2 max-w-[150px] w-full"
          >
            {productTypeTitle}
            <BsArrowRight size={16} />
          </Link>
        </h3>
        <div className="flex flex-col gap-2">
          {productTypeChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/${category}?productType=${item?.assortment}`}
              className="hover:text-teagreen-600 flex items-center gap-1"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
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

      <Link href={featured1Route}>
        <div className="flex flex-col gap-2">
          <Image
            src={
              featured1Thumbnail?.filepath
                ? `${env.app_url}${featured1Thumbnail?.filepath}`
                : "/placeholder.jpg"
            }
            alt={featured1Thumbnail?.alternateText || "image"}
            width={300}
            height={250}
            className="max-w-[300px] w-full max-h-[250px] h-full object-cover"
          />
          {featured1Title && <p>{featured1Title}</p>}
        </div>
      </Link>
    </div>
  );
}

export default TeawareDropdown;
