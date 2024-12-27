"use client";

import React from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Description from './Description';
import Reviews from './Reviews';
import ReturnsAndDelivery from './ReturnsAndDelivery';

function ProductTabs() {
  return (
    <div className="my-10">
      <div className="flex flex-col mx-20">
        <Tabs aria-label="Options">
          <Tab key="description" title="Description">
            <Card>
              <Description />
            </Card>
          </Tab>
          <Tab key="review" title="Review">
            <Card>
              {/* <CardBody> */}
                <Reviews />
              {/* </CardBody> */}
            </Card>
          </Tab>
          <Tab key="return&delivery" title="Return & Delivery">
            <Card>
              <ReturnsAndDelivery />
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProductTabs;