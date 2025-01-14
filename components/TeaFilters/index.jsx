"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const TeaFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showMore, setShowMore] = useState({
    type: false,
    format: false,
    price: false,
    benefit: false,
    flavour: false,
  });

  const [filtersData, setFiltersData] = useState([
    {
      category: "Types",
      options: [
        { param: "green tea" },
        { param: "white tea" },
        { param: "black tea" },
        { param: "oolong tea" },
        { param: "herbal tea" },
        { param: "flowering tea" },
        { param: "jasmine tea" },
        { param: "yellow tea" },
        { param: "matcha" },
      ],
      key: "type",
    },
    {
      category: "Tea Format",
      options: [
        { param: "loose leaf" },
        { param: "tea caddy" },
        { param: "tea bag" },
      ],
      key: "format",
    },
    {
      category: "Price",
      options: [{ param: "0-25" }, { param: "26-40" }, { param: "41-65" }],
      key: "price",
    },
    {
      category: "Health Benefit",
      options: [
        { param: "energy" },
        { param: "gut health" },
        { param: "immunity" },
      ],
      key: "benefit",
    },
    {
      category: "Flavour",
      options: [
        { param: "citrus" },
        { param: "flavoured" },
        { param: "floral" },
        { param: "fruity" },
        { param: "smoke" },
        { param: "spice" },
        { param: "sweet" },
      ],
      key: "flavour",
    },
  ]);
  
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (key, param) => {
    const params = new URLSearchParams(searchParams.toString());

    if (key === "price") {
      // For price, set a single value
      if (params.get(key) === param) {
        params.delete(key); // Remove the key if the value is already set
      } else {
        params.set(key, param); // Set the new value
      }
    } else {
      // For other filters, allow multiple values
      const currentValues = params.get(key)?.split(",") || []; // Get existing values
      const isChecked = currentValues.includes(param); // Check if param is already selected

      const updatedValues = isChecked
        ? currentValues.filter((item) => item !== param) // Remove the parameter
        : [...currentValues, param]; // Add the parameter

      if (updatedValues.length) {
        params.set(key, updatedValues.join(",")); // Join with plain commas
      } else {
        params.delete(key); // Remove the key if no values
      }
    }

    router.push(`?${params.toString()}`); // Push updated query to the router
  };

  const handleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetFilters = () => {
    router.push("?");
  };

  const isChecked = (key, param) => {
    const params = searchParams.get(key); // Get the raw query string for the key
    if (!params) return false;

    // Match the whole parameter as a single entity
    return params.split(",").some((item) => item === param);
  };

  const hasFilters = Array.from(searchParams.entries()).length > 0;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Filters</button>
      <div
        className={`fixed top-0 left-0 h-[100vh] w-[300px] bg-white transform transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 pb-4 border-b flex flex-col">
          {/* <span className="font-semibold">Filters</span> */}
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="mt-4 py-1 px-3 border border-gray-200 hover:border-gray-500 duration-150 flex justify-between items-center"
            >
              <span className="inline-block basis-[10%]">
                <IoCloseOutline />
              </span>{" "}
              <span className="inline-block basis-[90%]">Clear all</span>
            </button>
          )}
        </div>
        {filtersData.map(({ category, options, key }, index) => (
          <div
            key={key}
            className={`mb-4 pb-4 ${
              index !== filtersData.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <h3 className="font-semibold mb-2">{category}</h3>
            <div>
              {options
                .slice(0, showMore[key] ? options.length : 10)
                .map((option) => (
                  <label key={option.param} className="block">
                    <input
                      type="checkbox"
                      checked={isChecked(key, option.param)}
                      value={option.param}
                      onChange={() => handleCheckboxChange(key, option.param)}
                    />
                    <span className="ml-2 text-sm capitalize">
                      {option.param}
                    </span>
                  </label>
                ))}

              {options.length > 10 && (
                <button onClick={() => handleShowMore(key)} className="text-sm">
                  {showMore[key] ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </div>
  );
};

export default TeaFilters;
