import versace from '../assets/versace.svg'
import gucci from '../assets/gucci.svg'
import calvinKlein from '../assets/calvinKlein.svg'
import prada from '../assets/prada.svg'
import zara from '../assets/zara.svg'

export default function BrandStrap() {
  return (
    <div className="min-h-[140px] bg-black flex flex-wrap flex-col md:flex-row gap-2 sm:p-10 justify-evenly">
      <img className='p-6' src={versace} />
      <img className='p-6' src={zara} />
      <img className='p-6' src={gucci} />
      <img className='p-6' src={prada} />
      <img className='p-6' src={calvinKlein} />
    </div>
  )
}
