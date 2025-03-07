import { env } from "@/config/env";
import Image from "next/image";
import Link from "next/link";

function GiftDropdown({ dropdownItem }) {
  const productTypes = [
    {
      image: "/images/Teanav_Organic_Tea.webp",
      name: "Black Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Green Tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "White Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Oolong Tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "Herbal Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Pu-erh Tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Tea",
    },
    {
      image: "/images/product_two.jpg",
      name: "Green Tea",
    },
    {
      image: "/images/product_three.jpg",
      name: "White Tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Tea",
    },
  ];

  const allGiftList = [
    {
      name: "Tea Gifts",
      url: "/",
    },
    {
      name: "Tea Scented Candles",
      url: "/",
    },
    {
      name: "Gift Boxes & Hampers",
      url: "/",
    },
  ];

  const giftInspirationList = [
    {
      name: "Gifts under £30",
      url: "/",
    },
    {
      name: "Gifts under £50",
      url: "/",
    },
    {
      name: "Starter kits",
      url: "/",
    },
    {
      name: "Popular gifts",
      url: "/",
    },
  ];

  const seasonalGiftList = [
    {
      name: "Christmas Gifts",
      url: "/",
    },
    {
      name: "Anniversary Gifts",
      url: "/",
    },
    {
      name: "Birthday Gifts",
      url: "/",
    },
    {
      name: "Festive Teas",
      url: "/",
    },
  ];

  console.log(dropdownItem);
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
              href={`/collection/tea?teaFlavor=${item?.assortment}`}
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
              href={`/collection/tea?teaFormat=${item?.assortment}`}
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
              href={`/collection/tea?attribute=${item?.assortment}`}
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
            <Image
              src={
                featured1Thumbnail?.filepath
                  ? `${env.app_url}${featured1Thumbnail?.filepath}`
                  : "/placeholder.jpg"
              }
              alt={featured1Thumbnail?.alternateText || "image"}
              width={300}
              height={250}
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
