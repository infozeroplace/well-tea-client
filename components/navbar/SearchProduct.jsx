import {useState, useEffect} from 'react';
import axios from "@/api/axios";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import NavDropdown from './NavDropdown';
import { env } from '@/config/env';
import Image from 'next/image';
import Link from 'next/link';
import { SectionLinkButton } from '../shared';

const SearchProduct = ({ buttonClass }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState(false);
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

      const debounceTimeout = setTimeout(fetchProducts, 1000);
      return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    const handleClose = () => {
      setIsClicked(false);
      setSearchTerm("");
      setProducts([]);
    };

    console.log(products);

  return (
    <div className="">
      <button onClick={() => setIsClicked(true)} className={`${buttonClass} `}>
        <CiSearch />
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[450px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isClicked ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center p-4 border-b h-20">
          <CiSearch size={25} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products..."
            className="p-2 w-full outline-none text-base font-light bg-inherit"
          />
          <button onClick={handleClose} className={buttonClass}>
            <RxCross1 size={16} />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="p-5 overflow-y-auto h-[calc(100vh-10rem)]">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <h3>Loading...</h3>
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="mb-2">Products</h3>
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
                        <div className="text-sm">
                          {item?.isSale ? (
                            <div className="flex gap-2 text-teagreen-800">
                              <span className="font-brand__font__500">
                                £{item?.unitPrices[0]?.salePrice} GBP
                              </span>
                              <span className="font-light">
                                was £{item?.unitPrices[0]?.price}
                              </span>
                            </div>
                          ) : (
                            <span className="font-brand__font__500 text-teagreen-800">
                              £{item?.unitPrices[0]?.price} GBP
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                )
                 : (
                  <p>No products found</p>
                )}
              </div>
            )}
          </div>
          <div className="p-4 border-t mt-auto">
            <SectionLinkButton
              url={`/search`}
              title="View All Results"
              buttonClass="!block !w-full px-10"
              textClass="!block !w-full"
            />
          </div>
        </div>
      </div>
      {isClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}
    </div>
  );
};

export default SearchProduct;