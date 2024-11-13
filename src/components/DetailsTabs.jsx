import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ProductDescriptionTab from "./ProductDescriptionTab";
import ProductReviewTab from "./ProductReviewTab";
 
export default function DetailsTabs() {
  const [activeTab, setActiveTab] = useState("productDetails");
  const data = [
    {
      label: "Product Details",
      value: "productDetails",
      desc: <ProductDescriptionTab />
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: <ProductReviewTab />
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${activeTab === value ? "text-gray-900" : ""} text-lg sm:text-2xl p-3 font-Satoshi`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="w-full">
        {activeTab === 'reviews' && <div className="flex justify-between py-8">
            <h3 className="text-lg md:text-3xl font-IntegralCf">All reviews</h3>
            <button className="bg-black text-white py-1 px-2 md:py-3 md:px-8 rounded-full font-Satoshi">
              Write a review
            </button>
          </div>}
        {data.map(({ value, desc }) => (
          <TabPanel key={value} className="p-0" value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}