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
    <div className="grid grid-cols-3 gap-6 section-gap">
      <div className="col-span-1 border-r border-slate-200 font-light flex flex-col justify-between ml-20">
        <div>
          <p className="text-center md:text-left uppercase text-xs mb-2">
            why choose us
          </p>
          <div className="text-teagreen-300">
            {discoverItems.map((item) => (
              <button
                key={item?.title}
                type="button"
                className={`text-xl lg:text-5xl w-full text-left py-3 hover:text-teagreen-600 duration-400 ${
                  selected === item?.title ? "text-teagreen-600" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item?.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5">{choosOption?.icon}</div>
          <div className="text-sm mb-5">{choosOption?.description}</div>
          <div className="flex justify-center md:justify-center text-lg">
            {/* <SectionLinkButton title="See More" url="/tea" /> */}
            <SectionLinkButton title="Learn more" url="/tea" />
          </div>
        </div>
      </div>
      <div className="col-span-2 border max-w-[1180px] aspect-[1180/730]">
        <Image
          src={choosOption?.image}
          alt="Why Choose Us"
          width={1180}
          height={730}
        />
        {/* <img src={choosOption?.image} alt="" /> */}
      </div>
    </div>
  );
};

export default WhyChooseUs;
