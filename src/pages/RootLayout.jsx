import { Outlet } from "react-router-dom"
// import DiscountHeader from '../components/DiscountHeader'
import Footer from '../components/Footer.jsx'
import NavbarWithSearch from "../components/NavbarWithSearch.jsx"

function RootLayout() {
  return (
    <main className="w-full h-screen relative">
      {/* <DiscountHeader /> */}
      <NavbarWithSearch />
      <Outlet />
      <Footer />
    </main>
  )
}

export default RootLayout