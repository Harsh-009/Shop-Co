import { Link, useNavigate } from "react-router-dom";
import RatingReview from "./RatingReview";

export default function Card({title, price, rating, image, id}) {
  // rating will come from server till now we will take a state
  const navigate = useNavigate()

  // const handleNavigate = () => {
  //   navigate(`/products/${id}`)
  // }

  return (
    
    <div onClick={() => {return navigate(`/products/${id}`)} } className="flex flex-col box-transition hover:shadow-2xl hover:bg-[#00000010] cursor-pointer rounded-2xl gap-4 px-8 py-4 md:p-8 font-Satoshi">
      <div className="aspect-square flex items-center rounded-xl w-full bg-white h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <img src={image} alt="product" className=" rounded-lg w-full h-full p-4 object-contain aspect-square object-center" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <RatingReview rating={rating}  />
        <p className="text-lg font-semibold">${price}</p>
      </div>
    </div>

  )
}