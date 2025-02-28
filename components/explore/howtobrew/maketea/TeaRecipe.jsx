"use client";

import { SectionLinkButton } from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { teaRecipeData } from "./teaRecipeData";

const TeaRecipe = () => {
  const [choosOption, setChoosOption] = useState({
    title: teaRecipeData[0].title,
    serve: teaRecipeData[0].serve,
    need: teaRecipeData[0].need,
    steps: teaRecipeData[0].steps,
  });

  const [selected, setSelected] = useState(teaRecipeData[0].title);

  const handleClick = (item) => {
    const { title, serve, need, steps } = item;
    setChoosOption({ ...choosOption, title, serve, need, steps });
    setSelected(title);
  };
  return (
    <div className="bg-[#F7F7F7] px-4 py-8 section-gap">
      <div className="container-narrow">
      <div className="grid grid-cols-3 lg:gap-8">
        <div className="col-span-3 lg:col-span-1">
          <div className="text-2xl font-medium tracking-tight text-teagreen-600 content-gap">
            How to make tea
          </div>
          <div className="flex items-center gap-5 content-gap">
            <div className="text-xl text-teagreen-600">
              <RxPerson />
            </div>
            <div className="text-xs bg-teagreen-300 p-1">
              {choosOption?.serve}
            </div>
          </div>
          <div className="content-gap">
            <div className="text-xl font-medium mb-3">You’ll need</div>
            <ul className="list-disc list-inside marker:text-base marker:text-teagreen-500">
              {choosOption?.need?.map((item) => (
                <li key={item?.id} className="mb-2 text-sm font-light">
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="col-span-3 lg:col-span-2">
          {/* menu buttons */}
          <div className="flex gap-5 text-teagreen-500 mb-6">
            {teaRecipeData.map((item) => (
              <button
                key={item?.title}
                type="button"
                className={`border-b-2 text-lg font-semibold text-center lg:text-left pb-1 lg:pb-2 xl:py-3 duration-400 ${
                  selected === item?.title
                    ? "text-teagreen-600 border-orange-500"
                    : ""
                }`}
                onClick={() => handleClick(item)}
              >
                <div className="flex gap-2 items-center capitalize">
                  <div>{item?.icon}</div>
                  {item?.title}
                </div>
              </button>
            ))}
          </div>
          <div>
            {choosOption?.steps?.map((item) => (
              <div key={item?.id} className="flex bg-white mb-5 p-6 gap-6">
                <div className="text-4xl font-medium text-center text-teagreen-500 flex items-center justify-center px-2">
                  {item?.id}
                </div>
                <p className="flex items-center">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeaRecipe;
