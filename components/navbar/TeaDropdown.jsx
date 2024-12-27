import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown() {
  const productTypes = [
    {
      image: "/images/Teanav_Organic_Tea.webp",
      name: "Black Teas",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Green Teas",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "White Teas",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Oolong Teas",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "Herbal Teas",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Pu-erh Teas",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Teas",
    },
    {
      image: "/images/product_two.jpg",
      name: "Green Teas",
    },
    {
      image: "/images/product_three.jpg",
      name: "White Teas",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Teas",
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
                  href={`/tea/${type.name}`}
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

        <div className="p-5 basis-[17.5%] w-full border-r">
          <div className="flex flex-col gap-5">
            <div className="basis-1/2">
              <div className="flex flex-col gap-2">
                <h3 className="font-extralight text-xl">Health</h3>
                {healthList.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="hover:text-teagreen-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex basis-1/2 gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-extralight text-xl">Caffeine free Tea</h3>
                {caffeineFreeTea.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="hover:text-teagreen-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="p-5 basis-[17.5%] w-full">
          <div className="">
            <div className="my-auto">
              <Image
                src="/images/teatypesidebar.jpg"
                alt="Tea Types"
                width={457}
                height={1000}
                className="w-full max-w-[190px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaDropdown;
