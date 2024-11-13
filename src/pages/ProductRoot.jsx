import { useState } from 'react'
import Products from '../components/Products'
import Sidebar from '../components/UI/Sidebar'

export default function ProductRoot() {
  const [products, setProducts] = useState({1: 'hello'})

  return (
    <div>
      <div className="w-full grid lg:grid-cols-[1fr_3fr] lg:gap-10 py-[120px] xl:py-[150px] md:px-[50px] xl:px-[100px]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="products flex flex-col items-center gap-10">
          {
            products.length === undefined ? <Products /> : <p className='text-6xl font-Satoshi font-bold'>No Products Found</p>
          }
          {/* <Products />  // fetch products and send through props and every time when the pagination ui updates fetch the product, also maintain ref to keep track of page */}
        </div>
      </div>
    </div>
  )
}
