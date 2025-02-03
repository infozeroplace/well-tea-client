"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { Spinner } from "@heroui/react";

function SearchQuery({ initialSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    // if (searchTerm.trim() === "") return; // Prevent search if input is empty

    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        searchTerm,
      }).toString();
      router.push(`?${queryParams}`);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-[400px] w-full mx-auto my-10 space-y-5">
      <h3 className="text-center font-brand__font__regular text-brand__font__size__lg2 text-teagreen-700">
        {initialSearchTerm ? `Results for "${initialSearchTerm}"` : "Search"}
      </h3>
      <div className="flex items-center p-4 border h-20">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="p-2 w-full outline-none text-base font-light bg-inherit"
        />
        <CiSearch size={25} onClick={handleSearch} className="cursor-pointer" />
      </div>
      {/* {isLoading && <p>Loading...</p>} */}
      {isLoading && <Spinner />}
    </div>
  );
}

export default SearchQuery;
