
import React from "react";
import { SectionLinkButton } from "../shared";
import Image from "next/image";

const AmazingPeople = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 section-gap container-narrow">
      <div className="relative aspect-[758/450] lg:aspect-[630/800] w-full overflow-hidden lg:overflow-visible content-gap">
        <Image
          src="/images/about-image-3.jpg"
          alt="Tea"
          width={630}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-8 lg:border-l border-slate-200">
        <div>
          <div className="text-center content-gap">
            <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
              amazing people
            </div>
            <h2 className="text-3xl lg:text-6xl px-20">
              Selected by a Master Tea Taster
            </h2>
          </div>
          <div className="text-center text-gray-500 content-gap">
            <p className="content-gap font-medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="font-medium">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
          <div className="group w-fit mx-auto">
            <SectionLinkButton title="Our Team" url="/ourteam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingPeople;
