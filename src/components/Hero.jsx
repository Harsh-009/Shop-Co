import heroImg from "../assets/heroImg.png";

export default function Hero() {
  return (
    <div className=" bg-[#f2f0f1] flex-shrink flex flex-col lg:flex-row font pt-[40px] lg:pt-[150px] px-8 sm:px-20 lg:px-4 xl:px-36 gap-5 items-center">
      <div className="left w-full pt-20 lg:w-1/2 pb-14 flex flex-col justify-start lg:justify-center gap-10">
        <div className="top-heading flex flex-col gap-4">
          <div className="splash-heading relative">
            <h2 className="sm:text-[40px] text-[30px] xl:text-[64px] z-[99999999] uppercase leading-none font-IntegralXb">
              find clothes that matches your style
            </h2>
            <img src="./images/white-splash.svg" className=" z-0" alt="" />
          </div>
        </div>
        <div className="btm-heading flex flex-col items-start gap-9">
          <p className="text-[#A8A8A8] leading-[24px] text-lg tracking-wider font-Satoshi">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style
          </p>
          <div>
            <button className="md:px-16 md:py-4 py-2 transition-all font-Satoshi border  hover:bg-[#f2f0f1] hover:text-black border-black px-10 rounded-full bg-black text-white">
              Shop Now
            </button>
          </div>
          <ul className=" inline-flex font-Satoshi font-medium">
            <li className="flex flex-col gap-2 border-r-2 border-[#00000010] pr-2 sm:pr-5">
              <h2 className="text-2xl md:text-3xl font-extrabold">200+</h2>
              <p>International Brands</p>
            </li>
            <li className="flex flex-col gap-2 border-r-2 border-[#00000010] px-2 sm:px-5">
              <h2 className="text-2xl md:text-3xl font-extrabold">2000+</h2>
              <p>High-Quality Products</p>
            </li>
            <li className="flex flex-col gap-2 border-r-2 pl-2 sm:pl-5">
              <h2 className="text-2xl md:text-3xl font-extrabold">30000+</h2>
              <p>Happy Customers</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="right w-full lg:w-1/2 overflow-hidden flex items-end md:justify-center xl:justify-end">
        <img className="image" src={heroImg} alt="" />
      </div>
    </div>
  );
}
