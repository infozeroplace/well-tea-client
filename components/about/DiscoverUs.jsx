"use client";

import { SectionLinkButton } from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";
import { discoverItems } from "./discoverUsData";

const DiscoverUs = () => {
  const [choosOption, setChoosOption] = useState({
    header: discoverItems[0].header,
    image: discoverItems[0].image,
    description: discoverItems[0].description,
  });

  const [selected, setSelected] = useState(discoverItems[0].title);

  const handleClick = (item) => {
    const { title, header, image, description } = item;
    setChoosOption({ ...choosOption, header, image, description });
    setSelected(title);
  };
  return (
    <div className="container-narrow lg:pl-20 2xl:pl-0 section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="lg:border-r px-5 sm:px-10 md:px-20 lg:px-0 lg:pr-8 border-slate-200 font-light flex flex-col items-center lg:items-start content-gap lg:mb-0">
          <div className="w-full">
            <div className="text-sm text-center lg:text-base tracking-wide uppercase font-semibold mb-2">
              It all began in 2010
            </div>
            <div className="flex justify-around text-teagreen-300">
              {discoverItems.map((item) => (
                <button
                  key={item?.title}
                  type="button"
                  className={`text-lg md:text-2xl font-light text-center lg:text-left py-1 lg:py-2 xl:py-3 hover:text-teagreen-600 duration-400 ${
                    selected === item?.title ? "text-teagreen-600" : ""
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item?.title}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 w-full">
            <div className="content-gap font-bold">{choosOption?.description}</div>
            <div className="flex justify-center text-lg">
              <SectionLinkButton title="Contact" url="/contact" buttonClass="w-60" />
            </div>
          </div>
        </div>

        {/* Discover Us Image */}
        <div className="relative aspect-[758/450] lg:aspect-[630/800] w-full overflow-hidden lg:overflow-visible">
          <Image
            src="/images/about-image-2.jpg"
            alt="Tea"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverUs;
