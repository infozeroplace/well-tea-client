"use client";

import { env } from "@/config/env";
import {
  useGetMenuListQuery,
  useGetSystemConfigQuery,
} from "@/services/features/system/systemApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import ExploreDropdown from "./ExploreDropdown";
import GiftDropdown from "./GiftDropdown";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import Profile from "./Profile";
import SearchProduct from "./SearchProduct";
import TeaDropdown from "./TeaDropdown";
import TeawareDropdown from "./TeawareDropdown";
import Wishlist from "./Wishlist";
import NextImage from "../shared/NextImage";

const dropdownPatterns = [
  { value: "pattern-1", Pattern: TeaDropdown },
  { value: "pattern-2", Pattern: TeawareDropdown },
  { value: "pattern-3", Pattern: GiftDropdown },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [logo, setLogo] = useState({});
  const [menus, setMenus] = useState([]);

  const { data: { data: menuList = [] } = {} } = useGetMenuListQuery();
  const { data: { data: system = {} } = {} } = useGetSystemConfigQuery();

  useEffect(() => {
    setLogo(system?.logo?.length > 0 ? system.logo[0] : {});
    setMenus(menuList);
  }, [system?.systemId, menuList?.length]);

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
              <NextImage
                img={
                  logo?.filepath
                    ? env.app_url + logo?.filepath
                    : "/logo/welltea_logo_color.png"
                }
                alt={logo?.alternateText || "welltea"}
                presets={{width: 150, height: 100}}
              />
            </Link>
          </div>

          {/* --------- Nav Items -------- */}
          <div className="hidden sm:flex items-center gap-5">
            {menus.map((item) => {
              const SelectedPattern = dropdownPatterns.find(
                (item2) => item?.dropdown?.pattern === item2?.value
              )?.Pattern;

              return (
                <div
                  key={item._id}
                  onMouseEnter={() => setActiveDropdown(item._id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavItem
                    href={`/collection/${item?.category?.assortment}`}
                    name={item?.category?.assortment || ""}
                  />
                  {SelectedPattern && (
                    <NavDropdown
                      extraClass={`shadow ${
                        activeDropdown === item._id
                          ? "scale-y-100 opacity-100"
                          : ""
                      }`}
                    >
                      <SelectedPattern
                        dropdownItem={item?.dropdown}
                        category={item?.category?.assortment}
                      />
                    </NavDropdown>
                  )}
                </div>
              );
            })}

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
