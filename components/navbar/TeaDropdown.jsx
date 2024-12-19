import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function TeaDropdown() {

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
    }
  ];

  return (
    <div className="w-full grid grid-cols-3 mt-10">
      <div className="w-full mx-auto border-r-1">
        <div className="flex justify-between mb-5 mx-5">
          <h3>Type</h3>
          <Link href="/tea" className="flex items-center">
            All Teas
            <i className="bx bx-right-arrow-alt text-[20px]"></i>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 justify-items-center">
          {productTypes.map((product, index) => (
            <Link href="#" key={index} className="flex items-center gap-5 hover:brightness-125">
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
      <div className="w-full mx-auto flex justify-center gap-20 border-r-1">
        <div className="flex flex-col gap-2">
          <h3 className="mb-5">Flavour</h3>
          <p>Citus</p>
          <p>Fruity</p>
          <p>Malty</p>
          <p>Roasted</p>
          <p>Floral</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="mb-5">Discover</h3>
          <p>Caffeine free</p>
          <p>Organic</p>
          <p>Gluten-free</p>
          <p>Vegan</p>
          <p>Sustainable</p>
        </div>
      </div>
      <div className="">
        <div className="">
          <Image
            src="/images/welltea_hero.png"
            alt=""
            width={200}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="-mt-20 z-10">
            <h3 className="bg-red-500 text-white py-2 px-5">
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