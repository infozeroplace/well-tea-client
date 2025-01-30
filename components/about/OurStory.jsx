import React from "react";
import { SectionLinkButton } from "../shared";
import Image from "next/image";

const OurStory = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 section-gap container-narrow">
        <div className="flex flex-col justify-center lg:border-r px-10 border-slate-200">
          <div>
            <div className="text-center content-gap">
              <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                Our Story
              </div>
              <h2 className="text-3xl lg:text-6xl px-20">
                It all began in 2010
              </h2>
            </div>
            <div className="text-center text-gray-500 content-gap">
              <p className="content-gap font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas dolore possimus eveniet vero autem sequi animi aliquid
                ratione omnis! Molestias sunt facilis minima neque eligendi,
                porro rerum doloremque nesciunt!
              </p>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis ullam iusto facere beatae animi dicta impedit ab
                inventore incidunt, vel sint, dignissimos officia earum.
                Deserunt ab voluptate beatae unde pariatur.
              </p>
            </div>
            <div className="flex justify-center md:justify-center text-lg">
              <SectionLinkButton title="Contact" url="/contact" buttonClass="w-44"/>
            </div>
          </div>
        </div>
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

export default OurStory;
