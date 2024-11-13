import formalSuit from '../assets/formalSuit.png'
import casual from '../assets/casual.png'
import partySuit from '../assets/partySuit.png'
import gym from '../assets/gym.jpg'

export default function BrowseStyle() {
  return (
    <div className="w-full flex justify-center p-10 lg:p-16">
      <div className="w-[90%] bg-[#f0f0f0] rounded-3xl gap-4 md:gap-16 flex flex-col text-center items-center p-10 md:p-12 lg:p-16">
        <h2 className="font-IntegralCf text-2xl sm:text-3xl md:text-4xl xl:text-6xl uppercase">
          browse by dress style
        </h2>
        <div className="flex flex-col font-Satoshi gap-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
            <div className="max-h-[300px] cursor-pointer lg:hover:scale-[102%] transition-all  rounded-3xl relative text-lg sm:text-2xl md:text-3xl xl:text-4xl overflow-hidden font-bold ">
              <img src={casual} className='object-cover w-full h-full' alt="casual" />
              <p className='absolute left-[8%] top-[10%]'>Casual</p>
            </div>
            <div className={`max-h-[300px] cursor-pointer lg:hover:scale-[102%] transition-all  rounded-3xl relative text-lg sm:text-2xl md:text-3xl overflow-hidden xl:text-4xl font-bold `}>
              <p className='absolute right-[8%] top-[10%]'>Formal</p>
              <img src={formalSuit} className='object-cover w-full h-full object-left-top' />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full gap-8">
            <div className={`max-h-[300px] cursor-pointer lg:hover:scale-[102%] transition-all  rounded-3xl relative text-lg sm:text-2xl md:text-3xl overflow-hidden xl:text-4xl font-bold `}>
              <p className='absolute left-[10%] top-[10%]'>Party</p>
              <img src={partySuit} className='object-cover w-full h-full object-left-top' />
            </div>
            <div className="max-h-[300px] cursor-pointer lg:hover:scale-[102%] transition-all  rounded-3xl relative text-lg sm:text-2xl md:text-3xl xl:text-4xl overflow-hidden font-bold">
              <p className='absolute left-[8%] top-[10%]'>Gym</p>
              <img src={gym} className='object-cover w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
