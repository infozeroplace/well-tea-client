"use client";

import { Tab, Tabs } from "@nextui-org/react";
import BrewInstructions from "./BrewInstructions";
import Description from "./Description";
import Ingredients from "./Ingredients";
import Reviews from "./Reviews";

function ProductTabs({ product }) {
  return (
    <div className="my-10 product-tab">
      <div className="flex flex-col">
        <Tabs
          aria-label="Options"
          variant="underlined"
          color="default"
          radius="full"
        >
          <Tab key="1" title="Description">
            <Description description={product?.longDescription} />
          </Tab>
          <Tab key="2" title="Ingredients">
            <Ingredients teaIngredient={product?.teaIngredient} />
          </Tab>
          <Tab key="3" title="How to brew">
            <BrewInstructions brewInstruction={product?.brewInstruction} />
          </Tab>
          <Tab key="4" title="Review">
            <Reviews productData={{reviews: product?.reviews || [], title: product?.title || "", sku: product?.sku || ""}} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProductTabs;
