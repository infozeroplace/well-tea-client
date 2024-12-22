"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navIconsClasses =
    "flex items-center border-1 rounded-full border-white hover:border-teagreen-500 p-1 duration-200";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="container">
        <div className="flex justify-between items-center h-[10vh]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo/welltea_logo_color.png"
                alt="Brand Logo"
                width={170}
                height={100}
                quality={100}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-5">
            {/* ------ Tea Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/tea" name="Tea" />
              <NavDropdown extraClass="group-hover:h-[500px] shadow">
                <TeaDropdown />
              </NavDropdown>
            </div>

            {/* ------ Teaware Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/teawares" name="Teawares" />
              <NavDropdown extraClass="group-hover:h-[500px] shadow">
                <TeawareDropdown />
              </NavDropdown>
            </div>

            {/* ------ Gift Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/gifts" name="Gifts" />
              <NavDropdown extraClass="group-hover:h-[500px] shadow">
                <GiftDropdown />
              </NavDropdown>
            </div>

            <NavItem href="/sales" name="Sales" />
            <NavItem href="/explore" name="Explore" />
            <NavItem href="/about" name="About" />
          </div>

          {/* <CircularProgress
            aria-label="Loading..."
            color="warning"
            size="lg"
          /> */}

          <div className="hidden md:flex space-x-4">
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
                <CiShoppingCart />
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
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link href="/">
            <p className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
