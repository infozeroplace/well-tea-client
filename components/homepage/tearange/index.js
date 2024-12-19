"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const discoverItems = [
  { title: "Harbal", image: "/images/welltea_hero.png" },
  { title: "Blac Tea", image: "/images/discover_image.jpeg" },
  { title: "Green Tea", image: "/images/welltea_hero.png" },
  { title: "White Tea", image: "/images/discover_image.jpeg" },
  { title: "Oolong Tea", image: "/images/welltea_hero.png" },
  { title: "Matcha", image: "/images/discover_image.jpeg" },
];
const TeaRange = () => {
  const [bgimage, setBgimage] = useState("/images/welltea_hero.png");

  const handleImage = (image) => {
    setBgimage(image);
  };
  return (
    <div className="relative my-14">
      <div className="w-full h-[500px]">
        <Image layout="fill" src={bgimage} alt="Discover" />
      </div>
      <h2 className="absolute top-[15%] left-[6%] text-white text-4xl">
        Discover Our Tea Range
      </h2>
      <div className="absolute bottom-4 z-10 pl-[10%] w-full h-28 flex flex-col justify-end">
        <div className=" flex">
          {discoverItems.map((item) => (
            <div key={item?.title} className="w-full">
              <div
                onMouseEnter={() => {
                  handleImage(item?.image);
                }}
                className="flex gap-3 items-end group text-white cursor-pointer w-full"
              >
                <div className="w-[2px] h-16 group-hover:h-24 duration-400 bg-white"></div>
                <div className="group-hover:-translate-y-[45px] duration-400 h-28 flex flex-col justify-end pb-2">
                  <button className="text-lg">{item?.title}</button>
                  <Link href={"#"} className="underline hover:text-sky-300">
                    See All
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaRange;
