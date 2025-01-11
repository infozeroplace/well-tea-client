"use client";

import { Card, Tab, Tabs } from "@nextui-org/react";
import Description from "./Description";
import HowToMake from "./HowToMake";
import Ingredients from "./Ingredients";
import Reviews from "./Reviews";

function ProductTabs({ product }) {
  return (
    <div className="my-10">
      <div className="flex flex-col">
        <Tabs aria-label="Options">
          <Tab key="description" title="Description">
            <div className="mt-5">
              <Card>
                <Description description={product.longDescription} />
              </Card>
            </div>
          </Tab>
          <Tab key="ingredients" title="Ingredients">
            <div className="mt-5">
              <Card>
                <Ingredients ingredient={product.ingredient} />
              </Card>
            </div>
          </Tab>
          <Tab key="howtomake" title="How To Make">
            <div className="max-w-[1024px] mx-auto w-full mt-5">
              <Card>
                <HowToMake />
              </Card>
            </div>
          </Tab>
          <Tab key="review" title="Review">
            <div className="mt-5">
              <Card>
                <Reviews />
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProductTabs;
