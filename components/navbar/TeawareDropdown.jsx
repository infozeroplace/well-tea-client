import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeawareDropdown({ dropdownItem }) {
  const allTeawares = [
    {
      name: "Teapots",
      url: "/",
    },
    {
      name: "Cups & Mugs",
      url: "/",
    },
    {
      name: "Tea Strainers",
      url: "/",
    },{
      name: "Loose Leaf Tea Essentials",
      url: "/",
    },
  ];

  // console.log(dropdownItem);

  return (
    <div>
      <div className="">
        <div className="flex justify-center gap-10 w-full p-5">
          <div className="flex capitalize">
            {dropdownItem.sections.map((section, index) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className="font-extralight text-xl">{section.title}</h3>
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={``}
                    className="hover:text-teagreen-600"
                  >
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Link href="/" className="group flex flex-col items-center gap-5">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="gifts"
              width={300}
              height={250}
            />
            <h4 className="uppercase font-extralight text-teagreen-600">
              Christmas Gift Shop
            </h4>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-5">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="gifts"
              width={300}
              height={250}
            />
            <h4 className="uppercase font-extralight text-teagreen-600">
              Egift cards
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeawareDropdown;
