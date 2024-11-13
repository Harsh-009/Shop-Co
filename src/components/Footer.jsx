import React from "react";
import Logo from "./UI/Logo";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import Line from "./UI/Line";

export default function Footer() {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="w-full flex flex-col gap-10 md:gap-0  md:flex-row justify-evenly p-10 lg:p-20 font-Satoshi">
        <div className="flex flex-col gap-8 max-w-96 ">
          <Logo />
          <p className="text-wrap text-[#00000090] font-medium">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4">
            <img src={twitter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={github} />
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 justify-evenly gap-10 2xl:gap-20">
        <div className="flex flex-col gap-8">
          <h3 className="uppercase font-medium">company</h3>
          <ul className="flex flex-col gap-4">
            {["about", "features", "works", "career"].map((item) => {
              return (
                <li
                  key={item}
                  className="capitalize text-[#00000090] font-medium"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="uppercase font-medium">help</h3>
          <ul className="flex flex-col gap-4">
            {[
              "customer support",
              "delivery details",
              "terms & conditions",
              "privacy policy",
            ].map((item) => {
              return (
                <li
                  key={item}
                  className="capitalize text-[#00000090] font-medium"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="uppercase font-medium">FAQ</h3>
          <ul className="flex flex-col gap-4">
            {["account", "manage deliveries", "order", "payment"].map(
              (item) => {
                return (
                  <li
                    key={item}
                    className="capitalize text-[#00000090] font-medium"
                  >
                    {item}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="uppercase font-medium">resources</h3>
          <ul className="flex flex-col gap-4">
            {[
              "free eBooks",
              "development tutorial",
              "how to - blog",
              "youtube playlist",
            ].map((item) => {
              return (
                <li
                  key={item}
                  className="capitalize text-[#00000090] font-medium"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>

      <div className="h-20 mx-20 ">
        <Line />
        <p className="text-[#00000090] font-medium pt-2">
          Shop.co &copy; 2024. This is a project made for education purpose only
        </p>
      </div>
    </div>
  );
}
