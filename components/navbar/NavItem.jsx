import Link from "next/link";

const NavItem = ({ href, name }) => {
  return (
    <Link
      href={href}
      className="group capitalize relative py-7 px-2 text-teagreen-800 cursor-pointer transition-all duration-500 tracking-widest"
    >
      {name}
      <div className="absolute left-0 bottom-3 w-0 h-[1px] bg-teagreen-500 group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
};

export default NavItem;
