import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown({ dropdownItem }) {
  const productTypes = [
    "green tea",
    "white tea",
    "flowering tea",
    "black tea",
    "herbal tea",
    "pureh tea",
    "fruit tea",
    "oolong tea",
    "jasmine tea",
  ];

  const formatItems = [
    {
      title: "loose leaf",
      image: "/icons/leaf.svg",
    },
    {
      title: "tea bag",
      image: "/icons/tea-bage.svg",
    },
    {
      title: "tea caddy",
      image: "/icons/tea-caddies.svg",
    },
  ];

  const originList = ["china", "bangldesh", "japan", "sri lanka"];

  const flavourList = ["citrus", "fruity", "malty", "roasted", "floral"];

  const discoverList = [
    "caffeine free",
    "organic",
    "gluten free",
    "vegan",
    "sustainable",
  ];

  const healthList = [
    "Immune System",
    "Digestion & Inflammation",
    "Sleep & Relaxation",
    "Energy & Focus",
    "Metabolism & Weight Loss",
  ];

  const caffeineFreeTea = [
    {
      name: "⁠Fruity Tea",
      url: "/",
    },
    {
      name: "⁠Herbal Tea",
      url: "/",
    },
    {
      name: "⁠Ice Tea",
      url: "/",
    },
    {
      name: "⁠Rooibos Tea",
      url: "/",
    },
  ];

  return (
    <div className="container-narrow px-4 w-full mx-auto flex justify-between capitalize">
      <div className="flex flex-col gap-5 p-5 basis-[30%] w-full border-r">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-extralight text-xl w-full">Type</h3>
            <Link
              href="/product-category?category=tea"
              className="flex items-center justify-end gap-1 max-w-[150px] w-full"
            >
              <span>All Teas</span>
              <BsArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            {productTypes.map((item) => (
              <Link
                key={item}
                href={`/product-category?type=${item}`}
                className="hover:text-teagreen-600"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Flavour</h3>
          {flavourList.map((item) => (
            <Link
              key={item}
              href={`/product-category?flavour=${item}`}
              className="hover:text-teagreen-600"
            >
              {item}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Discover</h3>
          {discoverList.map((item) => (
            <Link
              key={item}
              href={`/product-category?keyword=${item}`}
              className="hover:text-teagreen-600"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <h3 className="font-extralight text-xl">Format</h3>
        <div className="flex flex-col gap-5">
          {formatItems.map((item) => (
            <Link
              href={`/product-category?format=${item}`}
              key={item.title}
              className="hover:text-teagreen-600 flex items-center gap-3"
            >
              <img
                src={item.image}
                className="w-5 text-teagreen-400 hover:text-teagreen-600"
              />
              {item.title}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Origin</h3>
          {originList.map((item) => (
            <Link
              key={item}
              href={`/product-category?originName=${item}`}
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
              <h3 className="font-extralight text-xl">Health</h3>
              {healthList.map((item) => (
                <Link
                  key={item}
                  href={`/product-category?benefit=${item}`}
                  className="hover:text-teagreen-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <hr />

          <div className="my-auto border">
            <Image
              src="/images/teatypesidebar.jpg"
              alt="Tea Types"
              width={100}
              height={100}
              className="w-full max-h-[230px] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaDropdown;
