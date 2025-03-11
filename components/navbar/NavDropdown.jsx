
function NavDropdown({ children, extraClass }) {

  return (
    <div
      className={`absolute left-0 top-[70px] z-10 w-full border-t-1 scale-y-0 opacity-0 overflow-hidden bg-white origin-top transition-all duration-300 ${extraClass}`}
    >
      {children}
    </div>
  );
}

export default NavDropdown;
