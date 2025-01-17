"use client";

import axios from "@/api/axios";
import { env } from "@/config/env";
import extractAlterText from "@/utils/extractAlterText";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import Cart from "./Cart";
import ExploreDropdown from "./ExploreDropdown";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";
import SearchProduct from "./SearchProduct";

const dropdownData = [
  {
    name: "tea",
    sections: [
      {
        title: "all teas",
        items: [
          { name: "green tea" },
          { name: "white tea" },
          { name: "flowering tea" },
          { name: "black tea" },
          { name: "herbal tea" },
          { name: "pureh tea" },
          { name: "fruit tea" },
          { name: "oolong tea" },
          { name: "jasmine tea" },
        ],
      },
      {
        title: "flavour",
        items: [
          { name: "citrus" },
          { name: "fruity" },
          { name: "malty" },
          { name: "roasted" },
          { name: "floral" },
        ],
      },
      {
        title: "format",
        items: [
          { name: "loose leaf" },
          { name: "tea bag" },
          { name: "tea caddy" },
        ],
      },
      {
        title: "discover",
        items: [
          { name: "caffeine free" },
          { name: "organic" },
          { name: "gluten free" },
          { name: "vegan" },
          { name: "sustainable" },
        ],
      },
      {
        title: "health",
        items: [
          { name: "immune system" },
          { name: "digestion & inflammation" },
          { name: "sleep & relaxation" },
          { name: "energy & focus" },
          { name: "metabolism & weight loss" },
        ],
      },
      {
        title: "origin",
        items: [
          { name: "china" },
          { name: "bangladesh" },
          { name: "japan" },
          { name: "sri lanka" },
        ],
      },
    ],
    featured: [
      {
        image: "/images/teapot.jpg",
        title: "Special Tea Blends",
        url: "/special-tea-blends",
      },
    ],
  },
  {
    name: "teaware",
    sections: [
      {
        title: "all teaware",
        items: [
          { name: "teapots" },
          { name: "cups & mugs" },
          { name: "tea strainers" },
          { name: "loose leaf tea essentials" },
        ],
      },
    ],
    featured: [
      {
        image: "/images/teaware.jpg",
        title: "Exclusive Teaware",
        url: "/exclusive-teaware",
      },
    ],
  },
  {
    name: "gift",
    sections: [
      {
        title: "all gifts",
        items: [
          { name: "tea gifts" },
          { name: "gift boxes" },
          { name: "tea scented candles" },
        ],
      },
      {
        title: "gift inspirations",
        items: [{ name: "gifts under £30" }, { name: "gifts under £50" }],
      },
    ],
    featured: [
      {
        image: "/images/gift.jpg",
        title: "Holiday Gift Shop",
        url: "/holiday-gift-shop",
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { data },
      } = await axios.get("/public/system");

      setLogo(data.logo);
    };

    loadData();
  }, []);

  const navIconsClasses =
    "flex items-center border-1 rounded-full border-white hover:border-teagreen-500 p-1 duration-200";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container px-4 lg:px-10">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0 w-28 md:w-36">
            <Link href="/">
              <Image
                src={
                  `${env.app_url}/public/image/upload/${logo}` ||
                  "/logo/welltea_logo_color.png"
                }
                alt={extractAlterText(logo)}
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
              <NavItem href="/collection/tea" name="Tea" />
              <NavDropdown extraClass="group-hover:h-[520px] shadow">
                <TeaDropdown />
              </NavDropdown>
            </div>

            {/* ------ Teaware Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/collection/teaware" name="Teawares" />
              <NavDropdown extraClass="group-hover:h-[300px] shadow">
                <TeawareDropdown />
              </NavDropdown>
            </div>

            {/* ------ Gift Dropdown Menu ------ */}
            <div className="group">
              <NavItem href="/collection/gift" name="Gifts" />
              <NavDropdown extraClass="group-hover:h-[300px] shadow">
                <GiftDropdown />
              </NavDropdown>
            </div>

            <NavItem href="/collection/sale" name="Sales" />
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

          <div className="flex">
            {/* Nav Icons */}
            {/* <NavbarIcon /> */}

            <div className="hidden md:flex items-center text-2xl">
              {/* <button className={`nav-button ${navIconsClasses}`}>
                <CiSearch />
                <svg className="circle" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="24" />
                </svg>
              </button> */}
              <SearchProduct buttonClass={`nav-button ${navIconsClasses}`} />
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
