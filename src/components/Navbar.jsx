import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Search,
  ChevronDown,
  ChevronRight,
  UserCircle,
  LayoutDashboard,
  Package,
  ShoppingCart,
  LogOut,
  LogIn,
} from "lucide-react";
import cartIcon from "../assets/cartIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/NavLogo.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const shopMenuRef = useRef(null);
  const shopButtonRef = useRef(null);
  const sidebarRef = useRef(null);
  const userMenuRef = useRef(null);
  const userButtonRef = useRef(null);

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

      //handle profile click
      // Handle user menu clicks
      if (
        isUserMenuOpen &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShopMenuOpen, isUserMenuOpen]);

  // Add body scroll lock when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const handleShopClick = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const userMenuItems = [
    { icon: UserCircle, label: "Profile", href: "/profile" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Orders", href: "/orders" },
    { icon: ShoppingCart, label: "Cart", href: "/cart" },
    { icon: LogOut, label: "Logout", href: "/logout" },
  ];

  return (
    <div className="relative font-Satoshi">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Navbar */}
      <nav className="bg-white shadow-md relative z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Section */}
            <div className="flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 lg:hidden hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-expanded={isSidebarOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="shop" className="sm:scale-100 scale-75" />
              </Link>
            </div>

            {/* Center Section */}
            <div className="hidden lg:flex lg:space-x-8">
              <button
                ref={shopButtonRef}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium relative group flex items-center"
                onClick={handleShopClick}
                // onMouseEnter={handleShopClick}
                // onMouseLeave={handleShopClick}
              >
                Shop
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                    isShopMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium relative group">
                On Sale
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium relative group">
                New Arrivals
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium relative group">
                Brands
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
                <Link to="/cart">
                  <img className="cursor-pointer" src={cartIcon} alt="cart" />
                </Link>
              </button>
              <div className="flex items-center">
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                <img
                  onClick={handleUserMenuClick}
                  ref={userButtonRef}
                  className="cursor-pointer"
                  src={profileIcon}
                  alt="cart"
                />
              </button>
              {/* User Dropdown Menu */}
              <div className="relative ">
                {isUserMenuOpen && (
                  <div
                    ref={userMenuRef}
                    className="absolute -right-0 top-2 mt-2 w-48 bg-white rounded-md shadow-lg p-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    {isLogin ? (
                      userMenuItems.map((item, index) => (
                        <Link
                          onClick={handleUserMenuClick}
                          key={item.label}
                          to={item.href}
                          className={`
                          flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                          ${
                            index !== userMenuItems.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }
                        `}
                        >
                          <item.icon className="h-4 w-4 mr-3 text-gray-500" />
                          {item.label}
                        </Link>
                      ))
                    ) : (
                      <Link
                        onClick={handleUserMenuClick}
                        to="/auth"
                        className={`
                      flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                       "border-b border-gray-100"
                        
                      
                    `}
                      >
                        {/* <item.icon className="h-4 w-4 mr-3 text-gray-500" /> */}
                        <LogIn className="h-4 w-4 mr-3 text-gray-500" />
                        Login
                      </Link>
                    )}
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Shop Menu */}
      {isShopMenuOpen && !isSidebarOpen && (
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
                <h3 className="text-black underline font-medium mb-4">
                  {category}
                </h3>
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

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold">Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="py-4">
            {/* Shop Menu */}
            <div className="px-4">
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
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

            {/* Other Menu Items */}
            <a
              href="#"
              className="block px-8 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              On Sale
            </a>
            <a
              href="#"
              className="block px-8 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="block px-8 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
            >
              Brands
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
