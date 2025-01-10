"use client";
import { TbArrowsSort } from "react-icons/tb";

const TeaSort = () => {
  const options = [
    { id: 1, label: "Sort A-Z", value: "name-asc" },
    { id: 2, label: "Price Ascending", value: "price-asc" },
    { id: 3, label: "Price Descending", value: "price-desc" },
    { id: 4, label: "Top Rated", value: "rating-desc" },
  ];

  const onSort = (sortValue) => {
    console.log(sortValue);
  };

  return (
    <div className="relative inline-block text-left group">
      <button className="inline-flex justify-center w-full py-2 text-sm font-medium text-teagreen-600 items-center gap-1">
        <TbArrowsSort size={20} /> <span>Sort by</span>
      </button>
      <div className="absolute top-[25px] right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
        <div className="" role="menu" aria-orientation="vertical">
          {options.map((option) => (
            <button
              key={option.id}
              className="block w-full px-4 py-2 text-sm text-teagreen-700 hover:bg-gray-100"
              onClick={() => onSort(option.value)}
              role="menuitem"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaSort;
