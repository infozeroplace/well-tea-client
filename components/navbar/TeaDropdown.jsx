import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown() {
  const productTypes = [
    {
      image: "/images/Teanav_Organic_Tea.webp",
      type: "green tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      type: "white tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      type: "flowering tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      type: "black tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      type: "herbal tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      type: "pureh tea",
    },
    {
      image: "/images/product_one.jpg",
      type: "fruit tea",
    },
    {
      image: "/images/product_two.jpg",
      type: "oolong tea",
    },
    {
      image: "/images/product_three.jpg",
      type: "jasmine tea",
    },
    {
      image: "/images/product_one.jpg",
      type: "black tea",
    },
  ];

  const formatItems = [
    {
      image: "/images/product_one.jpg",
      name: "Loose Tea",
    },
    {
      image: "/images/product_two.jpg",
      name: "Tea Bangs",
    },
    {
      image: "/images/product_three.jpg",
      name: "Tea Caddles",
    },
  ];
  const originList = ["China", "Bangldesh", "Japan", "Sri Lanka"];

  const flavourList = [
    {
      name: "Citus",
      url: "/",
    },
    {
      name: "Fruity",
      url: "/",
    },
    {
      name: "Malty",
      url: "/",
    },
    {
      name: "Roasted",
      url: "/",
    },
    {
      name: "Floral",
      url: "/",
    },
  ];
  const discoverList = [
    {
      name: "Caffeine free",
      url: "/",
    },
    {
      name: "Organic",
      url: "/",
    },
    {
      name: "Gluten-free",
      url: "/",
    },
    {
      name: "Vegan",
      url: "/",
    },
    {
      name: "Sustainable",
      url: "/",
    },
  ];

  const healthList = [
    {
      name: "Immune System",
      url: "/",
    },
    {
      name: "Digestion & Inflammation",
      url: "/",
    },
    {
      name: "Sleep & Relaxation",
      url: "/",
    },
    {
      name: "Energy & Focus",
      url: "/",
    },
    {
      name: "Metabolism & Weight Loss",
      url: "/",
    },
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
              href="/tea"
              className="flex items-center justify-end gap-1 max-w-[150px] w-full"
            >
              <span>All Teas</span>
              <BsArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 py-5">
            {productTypes.map((type, index) => (
              <Link
                href={`/tea?type=${type.type}`}
                key={index}
                className="hover:text-teagreen-600"
              >
                {type.type}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <h3>Type</h3>
          <Link href="/tea" className="flex items-center gap-1">
            All Teas
            <BsArrowRight />
          </Link>
        </div>
        <div className="mx-10 mt-5">
          <div className="grid grid-cols-2 gap-5">
            {productTypes.map((type, index) => (
              <Link
                href={`/tea?type=${type.type}`}
                key={index}
                className="flex items-center gap-3 hover:brightness-125"
              >
                <Image
                  src={type.image}
                  alt={type.type}
                  width={50}
                  height={50}
                />
                <p>{type.type}</p>
              </Link>
            ))}
          </div>
        </div> */}
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Flavour</h3>
          {flavourList.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="hover:text-teagreen-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Discover</h3>
          {discoverList.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="hover:text-teagreen-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 basis-[25%] w-full border-r">
        <h3 className="font-extralight text-xl">Format</h3>
        <div className="flex flex-col gap-5">
          {formatItems.map((item, index) => (
            <Link href="#" key={index} className="hover:text-teagreen-600">
              {item.name}
            </Link>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h3 className="font-extralight text-xl">Origin</h3>
          {originList.map((item, index) => (
            <Link key={index} href="/" className="hover:text-teagreen-600">
              {item}
            </Link>
          ))}
        </div>
        {/* <Link
            href="/tea"
            className="text-xl text-teagreen-800 hover:text-teagreen-600 mx-2"
          >
            <p>Why we are</p>
            <p>championing</p>
            <p>organic tea culture?</p>
            <BsArrowRight />
          </Link> */}
      </div>

      <div className="p-5 basis-[25%] w-full">
        <div className="flex flex-col gap-5">
          <div className="basis-1/2">
            <div className="flex flex-col gap-2">
              <h3 className="font-extralight text-xl">Health</h3>
              {healthList.map((item, index) => (
                <Link key={index} href="/" className="hover:text-teagreen-600">
                  {item.name}
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
