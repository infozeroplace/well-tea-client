"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 text-black">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/welltea_logo.png" alt="Brand Logo" width={70} height={70} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <p className="hover:text-gray-400 cursor-pointer">About</p>
            </Link>
            <Link href="/tea">
              <p className="hover:text-gray-400 cursor-pointer">Tea</p>
            </Link>
            <Link href="/teawares">
              <p className="hover:text-gray-400 cursor-pointer">Teawares</p>
            </Link>
            <Link href="/sales">
              <p className="hover:text-gray-400 cursor-pointer">Sales</p>
            </Link>
            <Link href="/gifts">
              <p className="hover:text-gray-400 cursor-pointer">Gifts</p>
            </Link>
            <Link href="/explore">
              <p className="hover:text-gray-400 cursor-pointer">Explore</p>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <button>
              icon
            </button>
            <Link href="/">
              icon
            </Link>
            <button>
              icon
            </button>
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
