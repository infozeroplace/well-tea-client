"use client";

import Image from "next/image";
import Link from "next/link";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";
import {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center">
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
            <NavItem href="/about" name="About" />
            {/* ------ Tea Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/tea" name="Tea" />
              <NavDropdown extraClass="group-hover:h-[700px]">
                <TeaDropdown />
              </NavDropdown>
            </div>

            {/* ------ Teaware Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/teawares" name="Teawares" />
              <NavDropdown extraClass="group-hover:h-[700px]">
                <TeawareDropdown />
              </NavDropdown>
            </div>

            <NavItem href="/sales" name="Sales" />

            {/* ------ Gift Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/gifts" name="Gifts" />
              <NavDropdown extraClass="group-hover:h-[700px]">
                <GiftDropdown />
              </NavDropdown>
            </div>

            <NavItem href="/explore" name="Explore" />
          </div>

          <div className="hidden md:flex space-x-4">
            {/* Nav Icons */}
            <div className="hidden md:flex items-center space-x-4 text-2xl">
              <button className="flex items-center">
                <i className="bx bx-search-alt-2 font-"></i>
              </button>
              <button className="flex items-center">
                <i className="bx bx-cart"></i>
              </button>
              <button className="flex items-center">
                <i className="bx bx-heart"></i>
              </button>
              <Link href="/profile" className="flex items-center">
                <i className="bx bx-user"></i>
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
