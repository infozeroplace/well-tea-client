import React from "react";
import { teaRecipeData } from "./brewGuideData";

const TipsAndTricks = () => {
  return (
    <div className="grid grid-cols-3 section-gap">
      <div className="col-span-3 lg:col-span-1 pr-16 content-gap">
        <div className="text-3xl font-medium mb-2">Tea tips & tricks</div>
        <p>Get the inside scoop on how to brew the perfect cup of tea</p>
      </div>

      {/* Right section */}
      <div className="col-span-3 lg:col-span-2">
        <div className="content-gap">
          <h2 className="text-xl font-medium ">Measurements & ratios</h2>
          <p>
            The typical ratio is 1 teaspoon per cup for hot tea, or two
            teaspoons per cup for iced tea. So, a 1 litre teapot will need
            around 4 teaspoons of tea for a hot brew.
          </p>
        </div>
        <div className="content-gap">
          <h2 className="text-xl font-medium ">Strength</h2>
          <p>
            Like it nice and strong? Instead of brewing for longer, add an extra
            teaspoon and brew for the recommended time.
          </p>
        </div>
        <div className="content-gap">
          <h2 className="text-xl font-medium ">To serve</h2>
          <p>
            If you’re adding milk to your black tea, brew for the longest
            recommended time. Remember, save your milk for black teas – most
            whites, greens and herbals are best served straight up.
          </p>
        </div>
        <div className="content-gap">
          <h2 className="text-xl font-medium ">Temperature</h2>
          <p>
            White, green and oolong teas prefer 80°C/176°F, so just combine 20%
            cold water with 80% boiling water. Swill a little hot water in your
            teapot or cup, then discard. This will keep your teawares from
            cooling your tea too quickly.
          </p>
        </div>
        <div className="content-gap">
          <h2 className="text-xl font-medium ">Loose leaf vs. tea bags</h2>
          <p>
            Both have their perks. We love the ceremony of loose leaf, but will
            never say no to tea bags when we’re pressed for time. Whichever you
            go for, make sure you follow the tea’s brewing instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsAndTricks;
