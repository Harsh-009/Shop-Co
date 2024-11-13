import { Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PaginationUI() {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center w-full flex-col sm:flex-row justify-between gap-4 font-Satoshi">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full font-Satoshi border-2 border-[#00000050]"
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2 ">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex font-Satoshi items-center gap-2 rounded-full border-2 border-[#00000050]"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
