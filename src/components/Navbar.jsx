import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import NavLogo from "../assets/NavLogo.svg";
import profileIcon from "../assets/profileIcon.svg";
import cartIcon from "../assets/cartIcon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const shopMenuRef = useRef(null);
  const shopButtonRef = useRef(null);

  const categories = {
    Topwear: [
      "T-Shirts",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Sweaters",
      "Jackets",
      "Blazers & Coats",
      "Suits",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    "Sports & Active Wear": [
      "Sports Shoes",
      "Sports Sandals",
      "Active T-Shirts",
      "Tracksuits",
      "Swimwear",
    ],
    "Fashion Accessories": [
      "Wallets",
      "Belts",
      "Perfumes & Body Mists",
      "Trimmers",
      "Deodorants",
      "Ties, Cufflinks & Squares",
    ],
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isShopMenuOpen &&
        shopMenuRef.current &&
        !shopMenuRef.current.contains(event.target) &&
        !shopButtonRef.current.contains(event.target)
      ) {
        setIsShopMenuOpen(false);
        setSelectedCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShopMenuOpen]);
  const handleShopClick = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Section */}
            <div className="flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 lg:hidden hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <Menu
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {/* <div className="flex items-center"> */}
              <img src={NavLogo} alt="" className="sm:scale-100 scale-75" />
              {/* </div> */}
            </div>

            {/* Center Section */}
            <div className="hidden lg:flex lg:space-x-8 font-Satoshi font-medium">
              <button
                ref={shopButtonRef}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 relative group flex items-center"
                onClick={handleShopClick}
              >
                Shop
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                    isShopMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 relative group">
                On Sale
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 relative group">
                New Arrivals
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 relative group">
                Brands
              </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-64"
                />
              </div>
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <img src={cartIcon} alt="cart" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <img src={profileIcon} alt="user" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Shop Menu */}
      {isShopMenuOpen && !isMenuOpen && (
        <div
          ref={shopMenuRef}
          className="hidden lg:block absolute left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-5 gap-8">
            {Object.entries(categories).map(([category, items]) => (
              <div
                key={category}
                className="transform transition-all duration-300"
              >
                <h3 className="text-gray-500 font-medium mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div
          className={`bg-white shadow-lg transform transition-all duration-300 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Mobile Shop Menu */}
          <div className="px-4 py-2 font-Satoshi">
            <button
              className="w-full flex justify-between items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
              onClick={handleShopClick}
            >
              <span>Shop</span>
              <ChevronDown
                className={`h-4 w-4 transform transition-transform duration-300 ${
                  isShopMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isShopMenuOpen && (
              <div className="pl-4">
                {Object.entries(categories).map(([category, items]) => (
                  <div key={category}>
                    <button
                      className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span>{category}</span>
                      <ChevronRight
                        className={`h-4 w-4 transform transition-transform duration-300 ${
                          selectedCategory === category ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {selectedCategory === category && (
                      <ul className="pl-4 py-2 space-y-2">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other Mobile Menu Items */}
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            On Sale
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            Brands
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
