import { product } from "../utils/products";
import RatingReview from "./UI/RatingReview";
export default function ProductDescriptionTab() {
  return (
    <div className="font-Satoshi text-black flex flex-col gap-5 sm:gap-10 py-5 sm:py-10">
      {/* Tab Content */}
      <div className="flex flex-col gap-3">
        <h3 className=" text-xl sm:text-3xl underline font-IntegralCf font-bold fot ">
          Product Description
        </h3>
        <p className="text-md sm:text-lg ">{product.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className=" text-xl sm:text-3xl underline font-IntegralCf font-bold fot ">
          Specifications
        </h3>
        <ul className="text-md sm:text-lg ">
          <li>
            <strong className="font-medium">Brand:</strong> {product.brand}
          </li>
          <li>
            <strong className="font-medium">Category:</strong>{" "}
            {product.category}
          </li>
          <li>
            <strong className="font-medium">SKU:</strong> {product.sku}
          </li>
          <li>
            <strong className="font-medium">Weight:</strong> {product.weight} g
          </li>
          <li>
            <strong className="font-medium">Dimensions:</strong>{" "}
            {product.dimensions.width} x {product.dimensions.height} x{" "}
            {product.dimensions.depth} mm
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className=" text-xl sm:text-3xl underline font-IntegralCf font-bold fot ">
          Customer Rating
        </h3>
        <div className="inline-flex items-center gap-3">
          <RatingReview rating={product.rating} />
          <p className="text-md sm:text-lg font-medium">
            {" "}
            {product.rating} / 5
          </p>
        </div>
        {/* Add a review list or display component here */}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className=" text-xl sm:text-3xl underline font-IntegralCf font-bold fot ">
          Shipping and Warranty
        </h3>
        <p className="text-md sm:text-lg ">
          <strong className="font-medium">Shipping & Information:</strong>{" "}
          {product.shippingInformation}
        </p>
        <p className="text-md sm:text-lg">
          <strong className="font-medium">Warranty:</strong>{" "}
          {product.warrantyInformation}
        </p>
      </div>
    </div>
  );
}
