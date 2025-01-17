"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Description from "./Description";
import HowToMake from "./HowToMake";
import Ingredients from "./Ingredients";
import Reviews from "./Reviews";

function ProductTabs({ product }) {
  return (
    <div className="my-10 product-tab container-narrow">
      <div className="flex flex-col">
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="default"
          radius="full"
        >
          <Tab key="1" title="Description">
            <Description description={product.longDescription} />
          </Tab>
          <Tab key="2" title="Ingredients">
            <Ingredients ingredient={product.ingredient} />
          </Tab>
          <Tab key="3" title="How to brew">
            <HowToMake />
          </Tab>
          <Tab key="4" title="Review">
            <Reviews />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProductTabs;
