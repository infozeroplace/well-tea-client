import React from 'react'

function NavDropdown({ children, extraClass }) {
  return (
    <div
      className={"absolute left-0 top-[70px] z-10 w-full h-0 group-hover:border-t-1 opacity-0 group-hover:opacity-100 overflow-hidden bg-white transition-all duration-300 " + extraClass}
    >
        {children}
    </div>
  );
}

export default NavDropdown;