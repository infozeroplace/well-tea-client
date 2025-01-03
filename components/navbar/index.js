"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { PiUser, PiShoppingCartThin } from "react-icons/pi";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";
import Cart from "./Cart";
import ExploreDropdown from "./ExploreDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navIconsClasses =
    "flex items-center border-1 rounded-full border-white hover:border-teagreen-500 p-1 duration-200";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="container px-4 lg:px-20">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0 w-28 md:w-36">
            <Link href="/">
              <Image
                src="/logo/welltea_logo_color.png"
                alt="Brand Logo"
                width={150}
                height={100}
                quality={100}
                className="w-full"
              />
            </Link>
          </div>

          {/* Categories */}
          <div className="hidden lg:flex items-center gap-5">
            {/* ------ Tea Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/tea" name="Tea" />
              <NavDropdown extraClass="group-hover:h-[520px] shadow">
                <TeaDropdown />
              </NavDropdown>
            </div>

            {/* ------ Teaware Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/teawares" name="Teawares" />
              <NavDropdown extraClass="group-hover:h-[300px] shadow">
                <TeawareDropdown />
              </NavDropdown>
            </div>

            {/* ------ Gift Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/gifts" name="Gifts" />
              <NavDropdown extraClass="group-hover:h-[300px] shadow">
                <GiftDropdown />
              </NavDropdown>
            </div>

            <NavItem href="/sales" name="Sales" />
            {/* <NavItem href="/explore" name="Explore" /> */}

            {/* ------ Explore Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/explore" name="Explore" />
              <NavDropdown extraClass="group-hover:h-[300px] shadow">
                <ExploreDropdown />
              </NavDropdown>
            </div>
            {/* <NavItem href="/about" name="About" /> */}
          </div>

          {/* <CircularProgress
            aria-label="Loading..."
            color="warning"
            size="lg"
          /> */}

          <div className="flex">
            {/* Nav Icons */}
            {/* <NavbarIcon /> */}

            <div className="hidden md:flex items-center space-x-4 text-2xl">
              <button className={`nav-button ${navIconsClasses}`}>
                <CiSearch />
                <svg className="circle" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="24" />
                </svg>
              </button>
              <button className={`nav-button ${navIconsClasses}`}>
                <CiHeart />
                <svg className="circle" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="24" />
                </svg>
              </button>
              <Link href="/profile">
                <button className={`nav-button ${navIconsClasses}`}>
                  <PiUser className="text-xl" />
                  <svg className="circle" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="24" />
                  </svg>
                </button>
              </Link>

              {/* <button
                onClick={() => setIsCartOpen(true)}
                className={`nav-button ${navIconsClasses}`}
              >
                <PiShoppingCartThin />
                <svg className="circle" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="24" />
                </svg>
              </button> */}

              <Cart buttonClass={`nav-button ${navIconsClasses}`} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-4 text-gray-600 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-teagreen-700">
          <Link href="/ border-2 border-white">
            <p className="block px-4 py-3 md:py-4 md:text-xl text-white hover:bg-teagreen-600 cursor-pointer">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="block px-4 py-3 md:py-4 md:text-xl text-white hover:bg-teagreen-600 cursor-pointer">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="block px-4 py-3 md:py-4 md:text-xl text-white hover:bg-teagreen-600 cursor-pointer">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-3 md:py-4 md:text-xl text-white hover:bg-teagreen-600 cursor-pointer">
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
