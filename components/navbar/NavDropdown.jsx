"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

function NavDropdown({ children, extraClass }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);
  // const pathname = usePathname();

  return (
    <div
      // className={`absolute left-0 top-[70px] z-10 w-full border-t-1 opacity-0 overflow-hidden bg-white scale-y-0 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100 ${extraClass}`}
      className={`absolute left-0 top-[70px] z-10 w-full border-t-1 scale-y-0 opacity-0 overflow-hidden bg-white origin-top transition-all duration-300 ${extraClass}`}
    >
      {children}
    </div>
  );
}

export default NavDropdown;
