import React from "react";
import CategoryOfferSlider from "./CategoryOfferSlider";

const CategoryOffer = () => {
  return (
    <div className="container-narrow section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        <h1 className="uppercase text-center text-4xl text-teagreen-800">
          The Well Tea
        </h1>
        <h5 className="text-center text-x my-4">Sharing our heritage</h5>
        <p className="text-center text-sm md:text-base">
          Well Tea is a UK-based family business specializing in premium,
          single-origin estate teas and finely crafted teaware, all with
          complete traceability. Our deep connection to the land, tea, and
          communities allows us to inspire tea enthusiasts across the nation and
          beyond. At Well Tea, we are dedicated to delivering transparently
          traded, exceptional-quality teas that everyone can enjoy.
        </p>
      </div>

      <CategoryOfferSlider />
    </div>
  );
};

export default CategoryOffer;
