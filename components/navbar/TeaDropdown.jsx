import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";

function TeaDropdown() {

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
    }
  ]

  return (
    <div className="w-full grid grid-cols-3 mt-5">
      <div className="w-full mx-auto border-r-1">
        <div className="flex justify-between mb-10 mx-5">
          <h3>Type</h3>
          <Link href="/tea" className="flex items-center gap-1">
            All Teas
            <BsArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 ml-10">
          {productTypes.map((product, index) => (
            <Link
              href="#"
              key={index}
              className="flex items-center gap-3 hover:brightness-125"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={50}
                height={50}
              />
              <p>{product.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center border-r-1">
        <div className="flex-1 flex flex-col items-center gap-5 border-r-1">
          <div className="flex flex-col gap-2">
            <h3 className="mb-5 font-extralight text-xl">Flavour</h3>
            <p>Citus</p>
            <p>Fruity</p>
            <p>Malty</p>
            <p>Roasted</p>
            <p>Floral</p>
          </div>
          <hr className="w-60" />
          <div className="flex flex-col gap-2">
            <h3 className="mb-5 font-extralight text-xl">Discover</h3>
            <p>Caffeine free</p>
            <p>Organic</p>
            <p>Gluten-free</p>
            <p>Vegan</p>
            <p>Sustainable</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 items-start mx-3">
          <h3 className="mb-5 font-extralight text-xl">Format</h3>
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
          <Link
            href="/tea"
            className="text-xl text-teagreen-800 hover:text-teagreen-600 mx-2"
          >
            <p>Why we are</p>
            <p>championing</p>
            <p>organic tea culture?</p>
            <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="bg-[url('/images/welltea_hero.png')] w-full bg-contain h-[300px]">
          {/* <Image
            src="/images/welltea_hero.png"
            alt=""
            width={200}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
          /> */}
          <div className="absolute top-56 z-10">
            <h3 className="bg-red-500 text-white py-2 px-5 mb-3">
              Discover Our Newest
            </h3>
            <Link
              href="#"
              className="bg-teagreen-100 py-2 px-5 text-blue-500 hover:text-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="flex-1">
            <Image
              src="/images/welltea_hero.png"
              alt=""
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "100%",
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
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaDropdown;