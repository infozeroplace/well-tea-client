import Image from "next/image";
import Link from "next/link";

function ChooseTea() {
  const teaTypes = [
    {
      image: "/images/newproduct_one.jpg",
      hoverImage: "/images/newproduct_two.jpg",
      name: "Green Tea",
      number: 5,
    },
    {
      image: "/images/newproduct_one.jpg",
      hoverImage: "/images/newproduct_two.jpg",
      name: "Black Tea",
      number: 10,
    },
    {
      image: "/images/newproduct_one.jpg",
      hoverImage: "/images/newproduct_two.jpg",
      name: "Oolong Tea",
      number: 7,
    },
    {
      image: "/images/newproduct_one.jpg",
      hoverImage: "/images/newproduct_two.jpg",
      name: "White Tea",
      number: 3,
    },
    {
      image: "/images/newproduct_one.jpg",
      hoverImage: "/images/newproduct_two.jpg",
      name: "Herbal Tea",
      number: 8,
    },
  ];

  return (
    <div className="container px-4 section-gap">
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-10 xl:gap-20">
        <div className="flex flex-shrink-0 flex-col gap-5">
          <h3 className="text-3xl font-extralight text-teagreen-600">
            Choose Your Tea Type
          </h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed do
          </p>
          <Link href="/tea" className="underline">
            View More Tea Types
          </Link>
        </div>
        <div className="flex items-center justify-center lg:justify-start flex-wrap w-full mx-auto gap-5">
          {teaTypes.map((item, index) => (
            <Link
              key={index}
              href="/tea"
              className="flex flex-col items-center group gap-5"
            >
              <div className="relative">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden group-hover:opacity-0 transition-opacity duration-300">
                  <Image
                    src={item.image}
                    alt="Tea Type"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={item.hoverImage}
                    alt="Tea Type"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div>
                <p className="text-teagreen-600">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseTea;
