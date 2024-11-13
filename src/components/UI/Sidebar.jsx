import React from "react";
import filterIcon from "../../assets/filterIcon.svg";
import Line from "./Line";
import rightArrow from "../../assets/rightArrow.svg";
import { Checkbox } from "@material-tailwind/react";

export default function Sidebar() {
  return (
    <div className="max-w-80 rounded-2xl font-Satoshi flex flex-col gap-2 bg-white border-2 border-[#00000020] min-h-96 p-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Filters</h2>
        <img src={filterIcon} />
      </div>
      <Line />
      <div>
        <ul className="flex gap-3 py-2 flex-col">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((item) => (
            <div key={item} className="flex justify-between">
              <li className=" text-[#00000080] font-medium">{item}</li>
              <img src={rightArrow} />
            </div>
          ))}
        </ul>
      </div>
      <Line />
      <ul className="flex flex-col gap-1 py-2 font-medium text-[#00000080]">
        <li className="flex gap-2 items-center">
          <Checkbox
            ripple={false}
            label="Under 500"
            className="h-5 w-5 rounded-full -mx-2 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox
            ripple={false}
            label="Under 1000"
            className="h-5 w-5 rounded-full -mx-2 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox
            ripple={false}
            label="Under 2000"
            className="h-5 w-5 rounded-full flex -mx-2 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox
            ripple={false}
            label="Under 5000"
            className="h-5 w-5 rounded-full -mx-2 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox
            ripple={false}
            label="Under 10000"
            className="h-5 w-5 rounded-full -mx-2 border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
          />
        </li>
      </ul>
    </div>
  );
}
