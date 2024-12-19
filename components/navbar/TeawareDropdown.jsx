import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TeawareDropdown({ extraClass }) {
  const productTypes = [
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
      name: "Oolong Tea",
    },
    {
      image: "/images/product_two.jpg",
      name: "Herbal Tea",
    },
    {
      image: "/images/product_three.jpg",
      name: "Pu-erh Tea",
    },
  ];

  return (
    <div className="w-full grid grid-cols-3 mt-10">
      <div className="border-r-1">
        <div className="flex justify-between mb-5 mx-5">
          <h3>Type</h3>
          <Link href="/tea" className="flex items-center">
            All Teas
            <i className="bx bx-right-arrow-alt text-[20px]"></i>
          </Link>
        </div>
        <div className="grid grid-cols-2 justify-items-center mx-10">
          {productTypes.map((product, index) => (
            <Link
              href="#"
              key={index}
              className="flex items-center hover:brightness-125"
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

export default TeawareDropdown;