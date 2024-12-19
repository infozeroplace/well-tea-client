import React from 'react'

function NavDropdown({ children, extraClass }) {
  return (
    <div
      className={"absolute left-0 top-[80px] z-10 mt-0 w-full h-0 group-hover:border-t-1 overflow-hidden bg-white transition-all duration-300 " + extraClass}
    >
        {children}
    </div>
  );
}

export default NavDropdown;