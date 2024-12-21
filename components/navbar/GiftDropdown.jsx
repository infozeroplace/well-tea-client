import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";

function GiftDropdown() {
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

  return (
    <div className="w-full grid grid-cols-3 mt-5">
      {/* Left Section */}
      <div className="border-r-1">
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
      {/* Middle Section */}
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
      {/* Right Section */}
      <div className="border-r-1 flex flex-col gap-5">
        <div>
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
        <div>
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
  );
}

export default GiftDropdown;