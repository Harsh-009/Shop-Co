import Card from "./UI/Card";
import Line from "./UI/Line";
import PaginationUI from "./UI/PaginationUI";
import { PRODUCTS } from "../utils/products.js";
import filterIcon from "../assets/filterIcon.svg";
import { Link, useParams } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start">
      <div className="flex justify-between w-full items-center">
        <h2 className="font-Satoshi text-3xl font-extrabold leading-none ps-8">
          Casual
        </h2>
        <div className="block bg-[#f0f0f0] p-2 rounded-full lg:hidden">
          <img src={filterIcon} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8">
        {PRODUCTS.map((product) => {
          return (
            // <Link key={product.id} to={`/products/${product.id}`}>
              <Card
              key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating.rate}
              />
            // </Link>
          );
        })}
      </div>
      <Line />
      <PaginationUI />
    </div>
  );
}
