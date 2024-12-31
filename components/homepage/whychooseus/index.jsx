"use client";

import { SectionButton, SectionLinkButton } from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";

const discoverItems = [
  {
    title: "Handmade",
    icon: "icon 1",
    image: "/whychooseus/slide_banner_07.jpg",
    description:
      "We source the finest quality speciality teas, herbs, spices and flowers from around the world. Are you ready to be inspired?",
  },
  {
    title: "Freshness",
    icon: "icon 2",
    image: "/whychooseus/slide_banner_08.jpg",
    description:
      "We are dedicated to creating fresh, small-batch blends that embody the essence of their ingredients, offering vibrant flavors and natural therapeutic benefits.",
  },
  {
    title: "Sustainability",
    icon: "icon 3",
    image: "/whychooseus/slide_banner_09.jpg",
    description:
      "We carefully source all our premium ingredients directly from sustainably certified gardens, ensuring the highest quality and ethical standards.",
  },
];

const WhyChooseUs = () => {
  const [choosOption, setChoosOption] = useState({
    icon: discoverItems[0].icon,
    image: discoverItems[0].image,
    description: discoverItems[0].description,
  });

  const [selected, setSelected] = useState(discoverItems[0].title);

  const handleClick = (item) => {
    const { title, icon, image, description } = item;
    setChoosOption({ ...choosOption, icon, image, description });
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
              {discoverItems.map((item) => (
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
            <div className="mb-2 xl:mb-5 text-center lg:text-left">{choosOption?.icon}</div>
            <div className="text-xs 2xl:text-base text-center lg:text-left lg:text-base mb-2 lg:mb-5">
              {choosOption?.description}
            </div>
            <div className="flex justify-center md:justify-center text-lg">
              {/* <SectionLinkButton title="See More" url="/tea" /> */}
              <SectionLinkButton title="Learn more" url="/tea" />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 aspect-[1000/500] lg:aspect-[1180/730] w-full overflow-hidden lg:overflow-visible">
          <Image
            src={choosOption?.image}
            alt="Why Choose Us"
            width={1180}
            height={730}
            className="w-full h-full object-cover"
          />
          {/* <img src={choosOption?.image} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
