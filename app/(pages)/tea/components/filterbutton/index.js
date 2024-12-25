"use client"
import { useState } from "react";
function FilterButton() {

    const [showFilters, setShowFilters] = useState(false);
    const [sortOption, setSortOption] = useState("");

    const handleFilterToggle = () => {
      setShowFilters(!showFilters);
    };

    const handleSortChange = () => {
      
    }

  return (
    <div className="flex justify-between items-center">
      <button className="ml-5" onClick={() => handleFilterToggle()}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>
    </div>
  );
}

export default FilterButton;