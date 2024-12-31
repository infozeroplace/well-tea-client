"use client";

import Image from "next/image";
import { SectionLinkButton } from "../shared";

function Banner() {
  return (
    <div className="container px-4 md:px-20 section-gap">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1 flex flex-col justify-center px-20 gap-5 bg-teagreen-100 py-10 text-center lg:text-left">
          <h1 className="text-2xl xl:3xl">Indroducing Palazo Teawares</h1>
          <p className="text-sm xl:text-base">Laboris veniam officia Lorem irure cupidatat pariatur et ipsum.</p>
          <div className="flex justify-center lg:justify-center text-lg">
            <SectionLinkButton
              title="Shop the look"
              buttonClass="!px-32"
              url="/tea"
            />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div className="relative aspect-[1000/500] lg:aspect-[1180/730] w-full overflow-hidden lg:overflow-visible">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="Banner"
              width={1180}
              height={730}
              className="w-full h-full object-cover"
              // style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
