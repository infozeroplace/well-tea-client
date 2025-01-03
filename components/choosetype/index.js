import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../shared";

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
  ];


  return (
    <div className="container px-4 md:px-20 section-gap">
      <div className="flex flex-col items-center">
        {/* <h1 className="uppercase text-center text-4xl text-teagreen-800 content-gap">The Welltea Range</h1> */}
        <SectionTitle title="The Welltea Range" />
        <div className="flex flex-col md:flex-row items-center md:justify-evenly w-full flex-wrap gap-6">
          {teaTypes.map((item, index) => (
            <Link
              key={index}
              href="/tea"
              className="flex flex-col items-center group gap-5"
            >
              <div className="relative">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden group-hover:opacity-0 transition-opacity duration-400">
                  <Image
                    src={item.image}
                    alt="Tea Type"
                    width={200}
                    height={200}
                    className="w-full group-hover:scale-110 transition-transform duration-400"
                  />
                </div>
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-400 group-hover:opacity-100">
                  <Image
                    src={item.hoverImage}
                    alt="Tea Type"
                    width={200}
                    height={200}
                    className="w-full group-hover:scale-110 transition-transform duration-400"
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
