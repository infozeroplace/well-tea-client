"use client"

import Link from 'next/link';
import {useState} from 'react';

function Filters() {
    const subCategory = ["Earl Grey Tea", "English Breakfast Tea"];
    const filterData = [
      {
        category: "Tea Format",
        options: ["Loose Leaf", "Tea Bag"],
        key: "teaFormat",
      },
      {
        category: "Price",
        options: ["$0-$25", "$26-$40", "$41-$65"],
        key: "price",
      },
      {
        category: "Health Benefit",
        options: ["Energy", "Gut Health", "Immunity"],
        key: "healthBenefit",
      },
      {
        category: "Time of the Day",
        options: ["Morning", "Afternoon", "Evening"],
        key: "timeOfDay",
      },
      {
        category: "Flavour",
        options: ["Citrus", "Flavoured", "Floral", "Fruity", "Pure", "Smoke", "Spice", "Sweet", "Unflavoured"],
        key: "flavour",
      },
      {
        category: "Ingredients",
        options: ["Cacao", "Cardamom", "Carob", "Chocolate", "Cinnamon", "Cloves", "Cocoa", "Coconut", "Cornflower Petals", "Dates", "Ginger", "Hazelnut"],
        key: "ingredients",
      }
    ];

    const [filters, setFilters] = useState({});

    const handleCheckboxChange = (key, option) => {
      setFilters((prevFilters) => {
        const isChecked = prevFilters[key]?.includes(option);
        const updatedCategory = isChecked
          ? prevFilters[key].filter((item) => item !== option)
          : [...(prevFilters[key] || []), option];

        const updatedFilters = {
          ...prevFilters,
          [key]: updatedCategory,
        };
        return updatedFilters;
      });
      console.log(filters);
    };

    const resetFilters = () => {
        setFilters({});
    };

  return (
    <aside className="w-64 p-4 border-r border-gray-200 ml-5">
      <button
        onClick={resetFilters}
        className="text-red-500 font-medium text-sm underline"
      >
        Reset
      </button>
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Sub Category</h3>
        {subCategory.map((item) => (
          <Link href="" key={item} className="block">
            {item}
          </Link>
        ))}
      </div>
      {filterData.map(({ category, options, key }) => (
        <div key={key} className="mb-4">
          <h3 className="font-semibold text-lg mb-2">{category}</h3>
          <div>
            {options.map((option) => (
              <label key={option} className="block">
                <input
                  type="checkbox"
                  checked={filters[key]?.includes(option) || false}
                  value={option}
                  onChange={() => handleCheckboxChange(key, option)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Filters;