import Image from "next/image";
import Link from "next/link";
import NextImage from "../shared/NextImage";

function ExploreDropdown() {

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
            <NextImage
              img="/images/slide_banner.webp"
              alt="gifts"
              presets={{ width: 300, height: 250 }}
              style={{ width: "auto", height: "auto" }}
              className="max-w-[300px] w-full max-h-[200px] h-full object-cover"
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
