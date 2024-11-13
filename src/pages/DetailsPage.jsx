import DetailsTabs from "../components/DetailsTabs";
import ProductDetails from "../components/ProductDetails";

export default function DetailsPage() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <ProductDetails />
      <DetailsTabs />
    </div>
    </>
  )
}
