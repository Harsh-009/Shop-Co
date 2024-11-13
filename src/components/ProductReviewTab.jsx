import { product } from "../utils/products"
import ReviewCard from "./UI/ReviewCard"

export default function ProductReviewTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {product.reviews.map((review) => {
        return (
          <ReviewCard review={review} />
        )
      })}
    </div>
  )
}