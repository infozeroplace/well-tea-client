"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItemsClasses =
    "text-teagreen-800 cursor-pointer transition-all duration-500";

  const NavItem = ({ href, name }) => {
    return (
      <div className="group relative">
        <Link href={href}>
          <p className={navItemsClasses + " tracking-widest"}>{name}</p>
        </Link>
        <div className="absolute -bottom-3 w-0 h-[1px] bg-teagreen-500 group-hover:w-full mt-1 transition-all duration-300"></div>
      </div>
    );
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo/welltea_logo_color.png"
                alt="Brand Logo"
                width={70}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <NavItem href="/about" name="About" />
            <NavItem href="/tea" name="Tea" />
            <NavItem href="/teawares" name="Teawares" />
            <NavItem href="/sales" name="Sales" />
            <NavItem href="/gifts" name="Gifts" />
            <NavItem href="/explore" name="Explore" />

            {/* <Link href="/about">
              <p className={navItemsClasses}>About</p>
            </Link>
            <Link href="/tea">
              <p className={navItemsClasses}>Tea</p>
            </Link>
            <Link href="/teawares">
              <p className={navItemsClasses}>Teawares</p>
            </Link>
            <Link href="/sales">
              <p className={navItemsClasses}>Sales</p>
            </Link>
            <Link href="/gifts">
              <p className={navItemsClasses}>Gifts</p>
            </Link>
            <Link href="/explore">
              <p className={navItemsClasses}>Explore</p>
            </Link> */}
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/profile">
              <p className={navItemsClasses}>Profile</p>
            </Link>
            <button>icon</button>
            <button>icon</button>
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
