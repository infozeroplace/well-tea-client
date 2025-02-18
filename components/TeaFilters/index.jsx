"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const revalidate = 0;

const TeaFilters = ({ filters = [], category = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Dynamically initialize showMore state based on filter keys
  const [showMore, setShowMore] = useState(
    Object.fromEntries(filters.map(({ key }) => [key, false]))
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (key, param) => {
    const params = new URLSearchParams(searchParams.toString());

    if (key === "price") {
      params.get(key) === param ? params.delete(key) : params.set(key, param);
    } else {
      const currentValues = params.get(key)?.split(",") || [];
      const updatedValues = currentValues.includes(param)
        ? currentValues.filter((item) => item !== param)
        : [...currentValues, param];

      updatedValues.length
        ? params.set(key, updatedValues.join(","))
        : params.delete(key);
    }

    console.log(params);
    router.push(`?${params.toString()}`);
  };

  const handleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    const searchTerm = params.get('searchTerm');
    
    if (searchTerm) {
      router.push(`?searchTerm=${searchTerm}`);
    } else {
      router.push("?");
    }
  };

  const isChecked = (key, param) => {
    return searchParams.get(key)?.split(",").includes(param) || false;
  };

  const hasFilters = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    const entries = Array.from(params.entries());

    return entries.filter(([key]) => key !== 'searchTerm').length > 0;
  }, [searchParams]);

  const filteredFilterItems = filters.filter(
    (item) => item.category === category || item.category === "all"
  );

  return (
    <div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        Filters
      </button>
      <div
        className={`fixed top-0 left-0 md:relative md:block h-screen md:h-auto w-[300px] md:w-full bg-white transform transition-transform duration-300 z-50 md:z-auto overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-4 pb-4 border-b flex flex-col">
          <span className="font-semibold">Filters</span>
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="mt-4 py-1 px-3 border border-gray-200 hover:border-gray-500 flex items-center"
            >
              <IoCloseOutline className="mr-2" />
              <span>Clear all</span>
            </button>
          )}
        </div>

        {filteredFilterItems.map(({ title, options, key }, idx) => (
          <div
            key={key}
            className={`mb-4 pb-4 ${
              idx !== filteredFilterItems.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <h3 className="font-semibold mb-2">{title}</h3>
            <div>
              {options
                .slice(0, showMore[key] ? options.length : 10)
                .map((option) => (
                  <label key={option.param} className="block">
                    <input
                      type="checkbox"
                      checked={isChecked(key, option.param)}
                      onChange={() => handleCheckboxChange(key, option.param)}
                    />
                    <span className="ml-2 text-sm capitalize">
                      {option.param}
                    </span>
                  </label>
                ))}

              {options.length > 10 && (
                <button
                  onClick={() => handleShowMore(key)}
                  className="text-brand__font__size__sm"
                >
                  {showMore[key] ? "less" : "more..."}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default TeaFilters;
