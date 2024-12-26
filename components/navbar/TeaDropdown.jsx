import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown() {
  const productTypes = [
    {
      image: "/images/Teanav_Organic_Tea.webp",
      name: "Black Teas",
      type: "black-tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Green Teas",
      type: "green-tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "White Teas",
      type: "white-tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Oolong Teas",
      type: "oolong-tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "Herbal Teas",
      type: "herbal-tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Pu-erh Teas",
      type: "pureh-tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Teas",
      type: "black-tea",
    },
    {
      image: "/images/product_two.jpg",
      name: "Green Teas",
      type: "green-tea",
    },
    {
      image: "/images/product_three.jpg",
      name: "White Teas",
      type: "white-tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Teas",
      type: "black-tea",
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
    {
      image: "/images/product_one.jpg",
      name: "Sparkling Tea",
    },
  ];
  const originList = ["China", "Bangldesh", "Japan", "Sri Lanka", "Taiwan", "India", "Myanmar", "Vietnam", "Nepal"];

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
  ]
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
    }
  ]

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

  return (
    <div>
      <div className="w-full mx-auto flex justify-between">
        <div className="basis-[35%] w-full border-r p-5">
          <div className="flex justify-between">
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
                  href={`/tea/type?type=${type.type}`}
                  key={index}
                  className="flex items-center gap-3 hover:brightness-125"
                >
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={50}
                    height={50}
                  />
                  <p>{type.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-5 basis-[15%] w-full border-r">
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

        <div className="flex flex-col gap-5 p-5 basis-[15%] w-full border-r">
          <h3 className="font-extralight text-xl">Format</h3>
          <div className="flex flex-col gap-5">
            {formatItems.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="flex items-center gap-5 bg-teagreen-100 hover:bg-teagreen-200 px-3 py-1 rounded-full"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={30}
                  height={30}
                />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">Health</h3>
            {healthList.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:text-teagreen-600"
                >
                  {item.name}
                </Link>
              ))
            }
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

        <div className="p-5 basis-[35%] w-full">
          <div className="flex flex-col gap-5">
            <div className="basis-1/2">
              <h3 className="font-extralight text-xl">Origin</h3>
              <div className="mt-5 flex flex-wrap gap-5">
                {originList.map((origin, index) => (
                    <button
                      key={index}
                      className="bg-teagreen-100 text-teagreen-600 hover:bg-transparent border-[0.3px] border-teagreen-100 hover:border-teagreen-500 px-5 py-2 rounded-full duration-300"
                    >
                      {origin}
                    </button>
                  ))
                }
              </div>
            </div>
            <hr />
            <div className="flex basis-1/2 gap-5">
              <div className="flex-1">
                <Image
                  src="/images/welltea_hero.png"
                  alt=""
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="flex-1">
                <Image
                  src="/images/welltea_hero.png"
                  alt=""
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaDropdown;
