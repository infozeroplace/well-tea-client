"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const discoverItems = [
  { title: "Harbal", image: "" },
  { title: "Blac Tea", image: "" },
  { title: "Green Tea", image: "" },
  { title: "White Tea", image: "" },
  { title: "Oolong Tea", image: "" },
  { title: "Matcha", image: "" },
];
const TeaRange = () => {
  const [bgimage, setBgimage] = useState("");

  const handleImage = (image) => {
    setBgimage(image);
  };
  return (
    <div className="relative section-gap">
      <div className="w-full h-[500px]">
        <Image fill src={bgimage} alt="Discover" />
      </div>
      <div className="absolute top-[15%] left-[6%]">
        <h2 className=" text-white text-4xl">Discover Our Tea Range</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod
        </p>
      </div>
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
