import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Line from '../components/UI/Line'

export default function CartItems() {
  return (
    <>
    <div className=" flex w-full font-Satoshi gap-3 md:gap-8 p-2">
      <div className="flex-shrink ">
        <img
          src={`https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg`}
          className="w-full h-auto max-w-40 aspect-square object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between w-full items-center">
            <h3 className="font-bold text-base md:text-xl">Gradient Graphic T-shirt</h3>
            <MdDelete size="25px" color="red" />
          </div>
          <div>
            <p className="text-xs md:text-base">
              <strong className="font-medium">Size:</strong> Large
            </p>
            <p className="text-xs md:text-base">
              <strong className="font-medium">Color:</strong> White
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl md:text-3xl">$145</p>
          <div className="bg-[#f0f0f0] px-4 shadow-sm flex items-center gap-5 py-2 md:py-3 rounded-full">
            <button>
              <FaMinus size={"10px"} />
            </button>
            <button className="text-lg font-bold font-Satoshi">
              {"1"}
            </button>
            <button>
              <FaPlus size={"10px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
      <Line />
      </>
  );
}
