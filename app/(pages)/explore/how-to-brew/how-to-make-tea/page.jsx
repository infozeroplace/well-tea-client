import { BrewingGuide, TeaRecipe, TipsAndTricks } from "@/components";
import React from "react";

const MakeTea = () => {
  return (
    <div className="container px-4 lg:px-20">
      <div className="section-gap mt-20">
        <div className="text-5xl font-semibold tracking-tight content-gap">
          How to make tea
        </div>
        <p className="lg:w-[30%]">
          There’s nothing quite like the simple pleasure of a well-made cup of
          tea. Learn a few basics and make every sip a success.
        </p>
      </div>

      {/* Heading Section */}
      <div className="section-gap text-2xl text-center lg:text-left tracking-tight font-medium container-narrow lg:pr-[25%]">
        Making a cup of tea shouldn’t be rocket science, but there are a few
        things you can do to guarantee a perfect cup of tea every time. Read on
        and discover all the insider knowledge on the different tea types, our
        tea tips and tricks.
      </div>

      {/* Recipe section */}
      <div className="">
        <TeaRecipe />
      </div>

      {/* Categorywise Brewing Guide  Section */}
      <BrewingGuide />

      {/* Tips $ Tricks Section */}
      <TipsAndTricks />
      
      {/* <div>Tea types</div> */}
    </div>
  );
};

export default MakeTea;
