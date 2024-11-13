import Card from "./UI/Card";
import Line from "./UI/Line";
import img from '../assets/tshirt.png'

export default function HomeProducts({title}) {
  return (
    <div className="w-full p-14 sm:px-24 sm:pt-10 gap-10 md:p-14 flex flex-col md:gap-14 lg:gap-20 items-center ">
      <h2 className="font-IntegralCf text-2xl md:text-4xl lg:text-5xl">{title}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        <Card title={"T-shirt with Tape Details"} price={120} rating={4} image={img} />
        <Card title={"T-shirt with Tape Details"} price={120} rating={5} image={img} />
        <Card title={"T-shirt with Tape Details"} price={120} rating={3} image={img} />
        <Card title={"T-shirt with Tape Details"} price={120} rating={3} image={img} />
      </div>
      <button type="button" className="font-Satoshi font-medium py-3 px-20 rounded-full border border-black hover:bg-black hover:text-white transition-all">View All</button>
      <Line />
    </div>
  );
}
