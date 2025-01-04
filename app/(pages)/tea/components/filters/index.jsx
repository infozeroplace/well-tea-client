"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

const filterData = [
  {
    category: "Tea Format",
    options: [
      { title: "loose leaf", param: "loose-leaf" },
      { title: "tea caddy", param: "tea-caddy" },
      { title: "tea bag", param: "tea-bag" },
    ],
    key: "format",
  },
  {
    category: "Price",
    options: [
      { title: "$0-$25", param: "0-25" },
      { title: "$26-$40", param: "26-40" },
      { title: "$41-$65", param: "41-65" },
    ],
    key: "price",
  },
  {
    category: "Health Benefit",
    options: [
      { title: "energy", param: "energy" },
      { title: "gut health", param: "gut-health" },
      { title: "immunity", param: "immunity" },
    ],
    key: "benefit",
  },
  {
    category: "Flavour",
    options: [
      { title: "citrus", param: "citrus" },
      { title: "flavoured", param: "flavoured" },
      { title: "floral", param: "floral" },
      { title: "fruity", param: "fruity" },
      { title: "smoke", param: "smoke" },
      { title: "spice", param: "spice" },
      { title: "sweet", param: "sweet" },
    ],
    key: "flavour",
  },
  {
    category: "Types",
    options: [
      { title: "green tea", param: "green-tea" },
      { title: "white tea", param: "white-tea" },
      { title: "black tea", param: "black-tea" },
      { title: "oolong tea", param: "oolong-tea" },
      { title: "herbal tea", param: "herbal-tea" },
      { title: "flowering tea", param: "flowering-tea" },
      { title: "jasmine tea", param: "jasmine-tea" },
      { title: "yellow tea", param: "yellow-tea" },
      { title: "matcha", param: "matcha" },
    ],
    key: "type",
  },
];

function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
    <>
      <div className="mb-4 pb-4 border-b flex flex-col">
        <span className="font-semibold">Filters</span>
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
      {filterData.map(({ category, options, key }, index) => (
        <div
          key={key}
          className={`mb-4 pb-4 ${
            index !== filterData.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <h3 className="font-semibold mb-2">{category}</h3>
          <div>
            {options.map((option) => (
              <label key={option.param} className="block">
                <input
                  type="checkbox"
                  checked={isChecked(key, option.param)}
                  value={option.param}
                  onChange={() => handleCheckboxChange(key, option.param)}
                />
                <span className="ml-2 text-sm capitalize">{option.title}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Filters;
