"use client";
import { TbArrowsSort } from "react-icons/tb";
import { useRouter, useSearchParams } from "next/navigation";

const TeaSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const options = [
    { id: 1, label: "Sort A-Z", value: "title 1" },
    { id: 2, label: "Price Ascending", value: "price 1" },
    { id: 3, label: "Price Descending", value: "price -1" },
    { id: 4, label: "Top Rated", value: "ratings -1" },
  ];

  const onSort = (sortValue) => {
    const params = new URLSearchParams(searchParams.toString());
    const [sortBy, sortOrder] = sortValue.split(" ");

    params.set("sortBy", sortBy);
    params.set("sortOrder", sortOrder);

    router.push(`?${params.toString()}`);
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
