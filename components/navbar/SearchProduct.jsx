import {useState, useEffect} from 'react';
import axios from "@/api/axios";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import NavDropdown from './NavDropdown';
import { env } from '@/config/env';
import Image from 'next/image';
import Link from 'next/link';

const SearchProduct = ({ buttonClass }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState(false);


//   console.log(searchTerm);

//   const handleSearch = async (searchValue) => {
//       setSearchTerm(searchValue);
//       if (searchValue.length > 2) {
//         const queryParams = new URLSearchParams({
//           search: searchTerm,
//         }).toString();
//         const url = `/public/product/list?${queryParams}`;
//         const response = await axios.get(url);
//         const { data } = response.data || {};

//         console.log(data);
//       }
//   };
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchProducts = async () => {
        if (searchTerm.length > 2) {
          setIsLoading(true);
          try {
            const queryParams = new URLSearchParams({
              search: searchTerm,
            }).toString();
            const url = `/public/product/list?${queryParams}`;
            const response = await axios.get(url);
            const { data: responseData } = response.data || {};
            setProducts(responseData || []);
          } catch (error) {
            console.error("Error fetching products:", error);
          } finally {
            setIsLoading(false);
          }
        } else {
          setProducts([]);
        }
      };

      const debounceTimeout = setTimeout(fetchProducts, 300);
      return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    const handleClose = () => {
      setIsClicked(false);
      setSearchTerm("");
      setProducts([]);
    };

    // console.log(products);

  return (
    <div className="">
      <div
        className={`relative flex rounded transition-all duration-300 ${
          isClicked ? " bg-gray-100" : ""
        }`}
      >
        <div
          className={`absolute w-[1200px] right-0 top-0 z-20 border-2 border-gray-300 flex items-center origin-right transition-all duration-300 ${
            isClicked ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products..."
            className="p-2 w-full outline-none text-base font-light bg-gray-100"
          />
          <button onClick={handleClose} className={buttonClass}>
            <RxCross1 size={16} />
          </button>
        </div>
        <button
          onClick={() => setIsClicked(true)}
          className={`${buttonClass} ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        >
          <>
            <CiSearch />
            <svg className="circle" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="24" />
            </svg>
          </>
        </button>
      </div>
      <div
        className={`absolute left-0 top-[70px] z-30 w-full origin-top border-t-1 overflow-hidden bg-white transition-all duration-300 ${
          isClicked && searchTerm.length > 2
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0"
        }`}
      >
        <h3>Product Search</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="">
            {products.length > 0 ? (
              products.slice(0, 5).map((item) => (
                <Link
                  key={item._id}
                  href={`/${item?.urlParameter}`}
                  className="flex gap-3"
                >
                  <Image
                    src={`${env.app_url}${item?.thumbnails[0]?.path}`}
                    alt={item.thumbnails[0].alt}
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col">
                    <p>{item.title}</p>
                    <p>{item.format[0]}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </div>
      {isClicked && searchTerm.length > 2 && (
        <div
          className="fixed inset-0 top-[120px] bg-black bg-opacity-50 z-10"
          onClick={handleClose}
        ></div>
      )}
    </div>
  );
};

export default SearchProduct;