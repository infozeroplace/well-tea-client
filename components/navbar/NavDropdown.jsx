import React from 'react'

function NavDropdown({ children, extraClass }) {
  return (
    <div
      className={"absolute left-0 top-[70px] z-10 w-full group-hover:border-t-1 opacity-0 group-hover:opacity-100 overflow-hidden bg-white scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 " + extraClass}
    >
        {children}
    </div>
  );
}

export default NavDropdown;