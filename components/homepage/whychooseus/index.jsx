"use client";

import { SectionLinkButton } from "@/components/shared";
import { env } from "@/config/env";
import Image from "next/image";
import { useState } from "react";

const WhyChooseUs = ({ data }) => {
  const discoverItems = data;

  const [chooseOption, setChooseOption] = useState({
    iconPath: discoverItems[0]?.iconPath[0]?.filepath || "",
    imagePath: discoverItems[0]?.imagePath[0]?.filepath || "",
    description: discoverItems[0]?.description || "",
  });

  const [selected, setSelected] = useState(discoverItems[0]?.title || "");

  const handleClick = (item) => {
    const { title, iconPath, imagePath, description } = item;
    setChooseOption({
      ...chooseOption,
      iconPath: iconPath[0]?.filepath,
      imagePath: imagePath[0]?.filepath,
      description,
    });
    setSelected(title);
  };

  return (
    <div className=" container section-gap px-5 sm:px-10 md:px-14 lg:px-10">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-1 lg:border-r border-slate-200 font-light flex flex-col justify-between items-center lg:items-start pr-2">
          <div>
            <p className="text-center lg:text-left uppercase text-2xl lg:text-base mb-3">
              why choose us
            </p>
            <div className="text-teagreen-300">
              {discoverItems?.map((item, idx) => (
                <button
                  key={idx}
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
          <div className="mt-8 lg:mt-3">
            <div className="mb-3 flex justify-center lg:justify-start">
              {chooseOption?.iconPath && (
                <Image
                  src={`${env.app_url}${chooseOption?.iconPath}`}
                  alt={selected}
                  width={30}
                  height={30}
                />
              )}
            </div>
            <div className="text-xs 2xl:text-base text-center lg:text-left lg:text-base mb-2 lg:mb-5">
              {chooseOption?.description}
            </div>
            <div className="flex justify-center md:justify-start text-lg">
              <SectionLinkButton
                title="Learn more"
                url="/tea"
                buttonClass="w-60"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 aspect-[1000/500] lg:aspect-[1180/730] w-full overflow-hidden lg:overflow-visible">
          <Image
            src={`${env.app_url}${chooseOption?.imagePath}`}
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
