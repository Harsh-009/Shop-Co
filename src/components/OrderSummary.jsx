import React from "react";
import Line from "./UI/Line";
import discountTag from "../assets/discountTag.png";

export default function OrderSummary() {
  return (
    <div className="border font-Satoshi border-[#00000030] text-black flex flex-col gap-4 sm:gap-5 rounded-3xl p-4 sm:p-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      <div className="flex justify-between text-lg w-full">
        <p className="text-[#00000080]">Subtotal</p>
        <p>$565</p>
      </div>
      <div className="flex justify-between text-lg w-full">
        <p className="text-[#00000080]">Discount (-20%)</p>
        <p className="text-red-500">$113</p>
      </div>
      <div className="flex justify-between text-lg w-full">
        <p className="text-[#00000080]">Delivery Fee</p>
        <p>$15</p>
      </div>
      <Line />
      <div className="flex justify-between text-lg w-full">
        <p>Total</p>
        <p>$467</p>
      </div>
      <div className="grid grid-cols-[3fr_1fr] items-center gap-3">
        <div className=" bg-[#f0f0f0] rounded-full flex gap-2 py-3 px-4">
          <img src={discountTag} className="object-contain"/>
          <input type="text" placeholder="Add promo code" className="w-full font-Satoshi font-medium border-2 outline-none bg-[#f0f0f0]"  />
        </div>
        <button className="bg-black border font-medium transition-all border-black hover:text-black hover:bg-white text-white py-3 px-4 rounded-full font-Satoshi">
          Apply
        </button>
      </div>
      <button className="bg-black border font-medium transition-all border-black px-4 hover:text-black hover:bg-white text-white py-3 rounded-full font-Satoshi">
          Go to Checkout
        </button>
    </div>
  );
}
