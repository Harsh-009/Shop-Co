import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";

export default function CartPage() {
  return (
    <>
      <div className="container mx-auto pt-[120px] pb-[40px] md:py-[120px]">
        <h2 className="font-IntegralXb px-3 pb-4 text-4xl font-bold">
          Your Cart
        </h2>
        <div className="grid md:grid-cols-[2fr_1fr] gap-5 lg:gap-14">
          <div className="p-2 m-2 sm:p-8 border border-[#00000030] flex flex-col gap-5 rounded-3xl">
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          <div className="m-2">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}
