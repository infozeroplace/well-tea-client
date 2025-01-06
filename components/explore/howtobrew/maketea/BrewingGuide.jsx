import React from "react";
import { teaRecipeData } from "./brewGuideData";

const BrewingGuide = () => {
  return (
    <div className="grid grid-cols-3 section-gap">
      <div className="col-span-3 lg:col-span-1 pr-16 content-gap">
        <div className="text-3xl font-medium mb-2">
          Brewing guide for making tea
        </div>
        <p>
          Whatever your sip, this handy guide will help you steep for just the
          right amount of time.
        </p>
      </div>
      <div className="col-span-3 lg:col-span-2">
        <div className="grid grid-cols-3 border-b py-4">
          <div className="text-xs font-medium">Tea Type</div>
          <div className="text-xs font-medium">Temperature</div>
          <div className="text-xs font-medium">Time</div>
        </div>
        {teaRecipeData.map((item) => (
          <div key={item?.teaType} className="grid grid-cols-3 border-b py-4">
            <p className="text-xs">{item?.teaType}</p>
            <p className="text-xs">{item?.temperature}</p>
            <p className="text-xs">{item?.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrewingGuide;
