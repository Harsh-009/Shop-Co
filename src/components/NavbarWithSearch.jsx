import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import Logo from "./UI/Logo";
import cartIcon from "../assets/cartIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import dropIcon from "../assets/dropIcon.svg";
import { Link } from "react-router-dom";

export default function NavbarWithSearch() {
  const [isLogin, setIsLogin] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-Satoshi font-medium"
      >
        <Menu>
          <MenuHandler>
            <div className="flex gap-1 items-center cursor-pointer">
              <p>Shop</p>
              <img src={dropIcon} alt="drop" />
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <Link to="products">Casual</Link>
            </MenuItem>
            <MenuItem>
              <Link to="products">Formal</Link>
            </MenuItem>
            <MenuItem>
              <Link to="products">Sport</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 font-Satoshi p-1 font-medium"
      >
        <Link to="products" className="flex items-center">
          On Sale
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-Satoshi font-medium"
      >
        <Link to="products" className="flex items-center">
          New Arrivals
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-Satoshi font-medium"
      >
        <Link to="products" className="flex items-center">
          Brands
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-full px-4 py-4 lg:px-8 lg:py-4 z-20 absolute left-[50%] -translate-x-[50%]">
      <div className="mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-6">
          <Typography
            as="a"
            className="mr-4 cursor-pointer pl-3 lg:pl-0 py-1.5 font-medium"
          >
            <Link to="/">
              <Logo />
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
        </div>
        <div className="hidden items-center gap-x-6 lg:flex ">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 rounded-full border bg-[#f0f0f0] pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[9px]">
              <img src={searchIcon} alt="search" />
            </div>
          </div>
          <div className="inline-flex gap-3 items-center">
            <Link to="/cart">
              <img className="cursor-pointer" src={cartIcon} alt="cart" />
            </Link>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="flex items-center gap-x-2 p-1 font-Satoshi font-medium"
            >
              <Menu placement="bottom-start">
                <MenuHandler>
                  <div className="flex gap-1  cursor-pointer">
                    <img
                      className="cursor-pointer"
                      src={profileIcon}
                      alt="profile"
                    />
                    <img src={dropIcon} alt="drop" />
                  </div>
                </MenuHandler>
                <MenuList>
                  {isLogin ? (
                    <>
                      <MenuItem>
                        <Link
                          className="font-Satoshi font-medium"
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link className="font-Satoshi font-medium" to="/orders">
                          Orders
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link className="font-Satoshi font-medium" to="/cart">
                          Cart
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link className="font-Satoshi font-medium" to="/logout">
                          Logout
                        </Link>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem className="hover:border-none w-full">
                      <Link className="font-Satoshi font-medium w-full h-full" to="/auth">
                        Login
                      </Link>
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Typography>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container flex flex-col pl-2 font-Satoshi">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-2 mx-1 top-[9px]">
                <img src={searchIcon} alt="search" />
              </div>
            </div>
            <Button size="md" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
