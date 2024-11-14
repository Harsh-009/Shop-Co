import { Outlet } from "react-router-dom";
// import DiscountHeader from '../components/DiscountHeader'
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function RootLayout() {
  return (
    <main className="w-full h-screen relative">
      {/* <DiscountHeader /> */}
      {/* <NavbarWithSearch /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
