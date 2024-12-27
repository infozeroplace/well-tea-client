import React from "react";
import CategoryOfferCard from "./CategoryOfferCard";

const CategoryOffer = () => {
  return (
    <div className="container-narrow section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        <h1 className="uppercase text-center text-4xl text-teagreen-800 content-gap">
          The Well Tea
        </h1>
        <h5 className="text-center text-x content-gap">Sharing our heritage</h5>
        <p className="text-center text-sm md:text-base">
          Well Tea is a UK-based family business specializing in premium,
          single-origin estate teas and finely crafted teaware, all with
          complete traceability. Our deep connection to the land, tea, and
          communities allows us to inspire tea enthusiasts across the nation and
          beyond. At Well Tea, we are dedicated to delivering transparently
          traded, exceptional-quality teas that everyone can enjoy.
        </p>
      </div>

      <CategoryOfferCard />
    </div>
  );
};

export default CategoryOffer;
