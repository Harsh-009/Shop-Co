// ProductDetail.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../utils/products";
import RatingReview from "./UI/RatingReview";
import Line from "./UI/Line";
import { Chip } from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();
  // Replace with actual product data fetch based on `id` if needed
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 pt-[120px] pb-[40px] md:py-[120px]">
      <div className="flex flex-col-reverse xl:flex-row gap-10 items-center">
        <div className="flex flex-row gap-3 xl:gap-2 xl:flex-col h-full justify-evenly">
          <div className=" border border-black p-2 rounded-2xl">
            <img
              src={product.image}
              className="w-full aspect-square object-contain max-w-48"
            />
          </div>
          <div className=" border border-[#00000030] p-2 rounded-2xl">
            <img
              src={product.image}
              className="w-full aspect-square object-contain max-w-48"
            />
          </div>
          <div className=" border border-[#00000030] p-2 rounded-2xl">
            <img
              src={product.image}
              className="w-full aspect-square object-contain max-w-48"
            />
          </div>
        </div>
        <div className="aspect-square border border-[#00000030] rounded-3xl">
          <img
            src={product.image}
            alt={product.title}
            className=" object-contain p-8 object-center w-full h-auto max-w-[500px] aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col font-Satoshi gap-5">
        <h1 className="text-2xl sm:text-4xl font-IntegralCf font-bold">
          {product.title}
        </h1>
        <span className="leading-none tracking-tighter inline-flex items-center gap-2">
          <RatingReview rating={product.rating.rate} />
          <span>{product.rating.rate}/5</span>
        </span>
        <p className="text-3xl font-semibold">${product.price}</p>
        <p className="text-gray-600 capitalize tracking-wider sm:tracking-normal">
          {product.description}
        </p>
        <Line />
        <div className="leading-none">
          <p className="text-gray-600 py-2">Select Colors</p>
          <div className="flex gap-3">
            <button className="h-8 w-8 cursor-pointer  bg-[#4f4631] rounded-full"></button>
            <button className="h-8 w-8 cursor-pointer  bg-[#314f4a] rounded-full"></button>
            <button className="h-8 w-8 cursor-pointer  bg-[#31344f] rounded-full"></button>
          </div>
        </div>
        <Line />
        <div className="leading-none">
          <p className="text-gray-600 py-3">Choose Size</p>
          <div className="flex gap-3">
            <Chip
              value="S"
              className="rounded-full font-extralight font-Satoshi"
            />
            <Chip
              value="M"
              className="rounded-full font-extralight font-Satoshi"
            />
            <Chip
              value="L"
              className="rounded-full font-extralight font-Satoshi"
            />
            <Chip
              value="XL"
              className="rounded-full font-extralight font-Satoshi"
            />
            <Chip
              value="XXL"
              className="rounded-full font-extralight font-Satoshi"
            />
          </div>
        </div>
        <Line />
        <div className="w-full grid grid-cols-[1fr_2fr] gap-2 sm:gap-10">
          <div className="bg-[#f0f0f0] px-6 shadow-sm w-full flex justify-between rounded-full py-3">
            <button>
              <FaMinus />
            </button>
            <button className="text-xl font-bold font-Satoshi">{"1"}</button>
            <button>
              <FaPlus />
            </button>
          </div>
          <button className="bg-black text-white py-3 rounded-full font-Satoshi">
            Add to Cart
          </button>
        </div>
        {/* Add more product details as needed */}
      </div>
    </div>
  );
};

export default ProductDetails;
