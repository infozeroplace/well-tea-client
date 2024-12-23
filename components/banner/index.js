"use client"

import Image from "next/image";
import { SectionButton } from "../shared";

function Banner() {
  return (
    <div className="px-20 section-gap">
      <div className="grid grid-cols-3 section-gap">
        <div className="col-span-1 flex flex-col justify-center px-20 gap-5 bg-teagreen-100">
          <h1 className="text-3xl">Indroducing Palazo Teawares</h1>
          <p>Laboris veniam officia Lorem irure cupidatat pariatur et ipsum.</p>
          <SectionButton title="Shop the look" buttonClass="!px-32" />
        </div>
        <div className="col-span-2">
          <div className="h-[500px] overflow-hidden">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="Banner"
              width={700}
              height={500}
              style={{ width: "100%", height: "auto"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;