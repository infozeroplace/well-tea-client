import { env } from "@/config/env";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown({ dropdownItem }) {
  const productType = dropdownItem["productType"];
  const productTypeTitle = productType?.columnTitle || "";
  const productTypeChildren = productType?.children || [];

  const teaFlavor = dropdownItem["teaFlavor"];
  const teaFlavorTitle = teaFlavor?.columnTitle || "";
  const teaFlavorChildren = teaFlavor?.children || [];

  const attribute = dropdownItem["attribute"];
  const attributeTitle = attribute?.columnTitle || "";
  const attributeChildren = attribute?.children || [];

  const teaFormat = dropdownItem["teaFormat"];
  const teaFormatTitle = teaFormat?.columnTitle || "";
  const teaFormatChildren = teaFormat?.children || [];

  const origin = dropdownItem["origin"];
  const originTitle = origin?.columnTitle || "";
  const originChildren = origin?.children || [];

  const teaBenefit = dropdownItem["teaBenefit"];
  const teaBenefitTitle = teaBenefit?.columnTitle || "";
  const teaBenefitChildren = teaBenefit?.children || [];

  const featured1 = dropdownItem["featured1"];
  const featured1Title = featured1?.title || "";
  const featured1Route = featured1?.route || "/";
  const featured1Thumbnail = featured1?.thumbnail || {};

  return (
    <div className="container-narrow px-4 w-full mx-auto flex justify-between capitalize">
      <div className="flex flex-col gap-5 p-5 basis-[30%] w-full border-r">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-extralight text-xl w-full">
              {productTypeTitle}
            </h3>
            <Link
              href="/collection/tea"
              className="flex items-center justify-end gap-2 max-w-[150px] w-full"
            >
              <span>All Teas</span>
              <BsArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            {productTypeChildren.map((item) => (
              <Link
                key={item?._id}
                href={`/collection/tea?productType=${item?.assortment}`}
                className="hover:text-teagreen-600 flex items-center gap-1"
              >
                {item?.thumbnail?.filepath && (
                  <img
                    className="w-8 h-8"
                    src={env.app_url + item?.thumbnail?.filepath}
                  />
                )}
                {item?.assortment}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{teaFlavorTitle}</h3>
          {teaFlavorChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/tea?teaFlavor=${item?.assortment}`}
              className="hover:text-teagreen-600"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{attributeTitle}</h3>
          {attributeChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/tea?attribute=${item?.assortment}`}
              className="hover:text-teagreen-600"
            >
              {item?.assortment}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <h3 className="font-extralight text-xl">{teaFormatTitle}</h3>
        <div className="flex flex-col gap-5">
          {teaFormatChildren.map((item) => (
            <Link
              key={item?._id}
              href={`/collection/tea?teaFormat=${item?.assortment}`}
              className="hover:text-teagreen-600 flex items-center gap-3"
            >
              {item?.thumbnail?.filepath && (
                <img
                  className="w-5 h-5"
                  src={env.app_url + item?.thumbnail?.filepath}
                />
              )}
              {item?.assortment}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">{originTitle}</h3>
          {originChildren.map((item) => (
            <Link
              key={item}
              href={`/collection/tea?origin=${item}`}
              className="hover:text-teagreen-600"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-5 basis-[25%] w-full">
        <div className="flex flex-col gap-5">
          <div className="basis-1/2">
            <div className="flex flex-col gap-2">
              <h3 className="font-extralight text-xl">{teaBenefitTitle}</h3>
              {teaBenefitChildren.map((item) => (
                <Link
                  key={item?._id}
                  href={`/collection/tea?teaBenefit=${item?.assortment}`}
                  className="hover:text-teagreen-600"
                >
                  {item?.assortment}
                </Link>
              ))}
            </div>
          </div>
          <hr />

          <div className="my-auto">
            <Link href={featured1Route}>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Image
                  src={
                    featured1Thumbnail?.filepath
                      ? `${env.app_url}${featured1Thumbnail?.filepath}`
                      : "/placeholder.jpg"
                  }
                  alt={featured1Thumbnail?.alternateText || "image"}
                  width={100}
                  height={100}
                  className="w-full max-h-[230px] h-full object-cover"
                />
                {featured1Title && <p>{featured1Title}</p>}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaDropdown;
