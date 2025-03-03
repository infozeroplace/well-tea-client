import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function ExploreDropdown() {
  // const productTypes = [
  //   {
  //     image: "/images/Teanav_Organic_Tea.webp",
  //     name: "Black Tea",
  //   },
  //   {
  //     image: "/images/Teanav_Flowering_tea.webp",
  //     name: "Green Tea",
  //   },
  //   {
  //     image: "/images/Teanav_Herbal_tea.webp",
  //     name: "White Tea",
  //   },
  //   {
  //     image: "/images/Teanav_Flowering_tea.webp",
  //     name: "Oolong Tea",
  //   },
  //   {
  //     image: "/images/Teanav_Herbal_tea.webp",
  //     name: "Herbal Tea",
  //   },
  //   {
  //     image: "/images/Teanav_Flowering_tea.webp",
  //     name: "Pu-erh Tea",
  //   },
  //   {
  //     image: "/images/product_one.jpg",
  //     name: "Black Tea",
  //   },
  //   {
  //     image: "/images/product_two.jpg",
  //     name: "Green Tea",
  //   },
  //   {
  //     image: "/images/product_three.jpg",
  //     name: "White Tea",
  //   },
  //   {
  //     image: "/images/product_one.jpg",
  //     name: "Black Tea",
  //   },
  // ];

  const articleList = [
    {
      name: "Tea Knowledge",
      url: "/articles",
    },
  ];

  const howToBrewList = [
    {
      name: "How to make tea",
      url: "/explore/how-to-brew/how-to-make-tea",
    },
    {
      name: "How to make iced tea",
      url: "/explore/how-to-brew/how-to-make-iced-tea",
    },
    {
      name: "How to make Matcha",
      url: "/explore/how-to-brew/how-to-make-matcha",
    },
  ];

  const discoverList = [
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Subscriptions",
      url: "/explore/discover/subscriptions",
    },
    {
      name: "Well Tea Rewards",
      url: "/explore/discover/welltea-rewards",
    },
    {
      name: "FAQs",
      url: "/explore/discover/faqs",
    },
  ];

  return (
    <div>
      <div className="w-full mx-auto flex justify-between">
        <div className="basis-[60%] flex justify-evenly w-full border-r p-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">Articles</h3>
            {articleList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl capitalize">How to Brew</h3>
            {howToBrewList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">Discover</h3>
            {discoverList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="basis-[40%] w-full flex justify-evenly pt-5">
          <Link
            href="/explore/how-to-brew/how-to-make-tea"
            className="group flex flex-col items-center gap-5"
          >
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="gifts"
              width={300}
              height={250}
            />
            <h4 className="uppercase font-extralight text-teagreen-600">
              Learn how to brew
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreDropdown;
