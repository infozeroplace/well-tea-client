"use client";

import { SectionButton, SectionLinkButton } from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";
import { env } from "@/config/env";

// const discoverItems = [
//   {
//     title: "Handmade",
//     icon: "icon 1",
//     image: "/whychooseus/slide_banner_07.jpg",
//     description:
//       "We source the finest quality speciality teas, herbs, spices and flowers from around the world. Are you ready to be inspired?",
//   },
//   {
//     title: "Freshness",
//     icon: "icon 2",
//     image: "/whychooseus/slide_banner_08.jpg",
//     description:
//       "We are dedicated to creating fresh, small-batch blends that embody the essence of their ingredients, offering vibrant flavors and natural therapeutic benefits.",
//   },
//   {
//     title: "Sustainability",
//     icon: "icon 3",
//     image: "/whychooseus/slide_banner_09.jpg",
//     description:
//       "We carefully source all our premium ingredients directly from sustainably certified gardens, ensuring the highest quality and ethical standards.",
//   },
// ];

const WhyChooseUs = ({ data }) => {
  const discoverItems = data;
  const [choosOption, setChoosOption] = useState({
    iconPath: discoverItems[0].iconPath,
    imagePath: discoverItems[0].imagePath,
    description: discoverItems[0].description,
  });

  const [selected, setSelected] = useState(discoverItems[0].title);

  const handleClick = (item) => {
    const { title, iconPath, imagePath, description } = item;
    setChoosOption({ ...choosOption, iconPath, imagePath, description });
    setSelected(title);
  };

  return (
    <div className=" container section-gap px-4 md:px-20 lg:px-0 lg:pl-20">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-1 lg:border-r border-slate-200 font-light flex flex-col justify-between items-center lg:items-start pr-2">
          <div>
            <p className="text-center lg:text-left uppercase text-2xl lg:text-base xl:text-base mb-3">
              why choose us
            </p>
            <div className="text-teagreen-300">
              {discoverItems?.map((item) => (
                <button
                  key={item?.title}
                  type="button"
                  className={`text-xl md:text-3xl xl:text-5xl 2xl:text-6xl w-full text-center lg:text-left py-1 lg:py-2 xl:py-3 hover:text-teagreen-600 duration-400 ${
                    selected === item?.title ? "text-teagreen-600" : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item?.title}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <div className="mb-3">
              {choosOption?.iconPath &&
                <Image
                  src={`${env.app_url}${choosOption?.iconPath}`}
                  alt={selected}
                  width={30}
                  height={30}
                />
              }
            </div>
            <div className="text-xs 2xl:text-base text-center lg:text-left lg:text-base mb-2 lg:mb-5">
              {choosOption?.description}
            </div>
            <div className="flex justify-center md:justify-start text-lg">
              <SectionLinkButton title="Learn more" url="/tea" />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 aspect-[1000/500] lg:aspect-[1180/730] w-full overflow-hidden lg:overflow-visible">
          <Image
            src={`${env.app_url}${choosOption?.imagePath}`}
            alt={selected}
            width={1180}
            height={730}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
