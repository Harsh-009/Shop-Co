import { useState } from 'react'
import whiteCross from '../assets/whiteCross.svg'
function DiscountHeader() {
  const [isVisible, setIsVisible] = useState(true)

  const discountBarHandler = () => {
    setIsVisible(!isVisible)
  }

  return (
    // use portal to display and remove it to render on other part of the dom
    <div className={`py-2 font-Satoshi flex flex-col md:flex-row items-center justify-center md:gap-5 bg-black text-white relative ${isVisible ? 'block' : 'hidden'}`}>
        <p>Sign up and get 20% off on your first order.</p>
        <button className='underline underline-offset-2'>Sign Up Now</button>
        <button onClick={discountBarHandler} className={`absolute right-5 bottom-3 sm:right-20 `}>
          <img src={whiteCross}/>
        </button>
      </div>
  )
}

export default DiscountHeader