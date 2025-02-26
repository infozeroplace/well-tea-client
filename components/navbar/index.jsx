"use client";

import axios from "@/api/axios";
import { env } from "@/config/env";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cart from "./Cart";
import ExploreDropdown from "./ExploreDropdown";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import SearchProduct from "./SearchProduct";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";
import Profile from "./Profile";
import Wishlist from "./Wishlist";

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

const mobileNavItems = [
  {
    name: "tea",
    url: "/tea",
  },
  {
    name: "teaware",
    url: "/teaware",
  },
  {
    name: "gift",
    url: "/gift",
  },
  {
    name: "sales",
    url: "/sales",
  },
  {
    name: "explore",
    url: "/explore",
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get("/public/system");
        setLogo(data.logo);
      } catch (error) {}
    };

    loadData();
  }, []);

  const navIconsClasses =
    "flex items-center text-2xl border-1 rounded-full border-white hover:border-teagreen-500 p-1 duration-200";

    const [activeDropdown, setActiveDropdown] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
      setActiveDropdown(null);
    }, [searchParams]);

  return (
    <nav className="bg-white sticky top-0 z-[9999999] shadow-sm">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0 w-28 md:w-36">
            <Link href="/">
              <Image
                src={
                  logo[0]?.filepath
                    ? `${env.app_url}${logo[0]?.filepath}`
                    : "/logo/welltea_logo_color.png"
                }
                alt={logo[0]?.alternateText || "welltea"}
                width={150}
                height={100}
                quality={100}
                className="w-full"
              />
            </Link>
          </div>

          {/* --------- Nav Items -------- */}
          <div className="hidden lg:flex items-center gap-5">
            {dropdownData.map((item) => (
              <div
                key={item.name}
                // className="group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavItem href={`/collection/${item.name}`} name={item.name} />
                <NavDropdown
                  extraClass={`shadow ${
                    activeDropdown === item.name
                      ? "scale-y-100 opacity-100"
                      : ""
                  }`}
                >
                  {item.name === "tea" ? (
                    <TeaDropdown dropdownItem={item} />
                  ) : item.name === "teaware" ? (
                    <TeawareDropdown dropdownItem={item} />
                  ) : (
                    <GiftDropdown dropdownItem={item} />
                  )}
                </NavDropdown>
              </div>
            ))}

            <NavItem href="/collection/sale" name="Sales" />

            {/* ------ Explore Dropdown Menu ------ */}
            <div
              onMouseEnter={() => setActiveDropdown("explore")}
              onMouseLeave={() => setActiveDropdown(null)}
              // className="group"
            >
              <NavItem href="/explore" name="Explore" />
              <NavDropdown
                extraClass={`shadow ${
                  activeDropdown === "explore" ? "scale-y-100 opacity-100" : ""
                }`}
              >
                <ExploreDropdown />
              </NavDropdown>
            </div>
          </div>

          <div className="flex">
            {/* --------- Nav Icons --------- */}
            <div className="hidden md:flex items-center gap-1">
              <SearchProduct buttonClass={`nav-button ${navIconsClasses}`} />
              <Profile buttonClass={`nav-button ${navIconsClasses}`} />
              <Wishlist buttonClass={`nav-button ${navIconsClasses}`} />
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
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={`/collection/${item.url}`}
              className="block capitalize px-4 py-3 md:py-4 md:text-xl text-white hover:bg-teagreen-600 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
