import React from 'react'
import { CiHeart } from 'react-icons/ci'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useGetWtwQuery, useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { env } from "@/config/env";
import { toast } from "react-hot-toast";
import { SectionLinkButton } from '../shared';
import { useAppSelector } from '@/services/hook';

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function Wishlist({ buttonClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: { data: { wishlist } = {} } = {} } = useGetWtwQuery();
  const [addToWishlist, { isLoading, data: addToWishlistData }] = useAddToWishlistMutation();
  const { user } = useAppSelector(state => state.auth);
  const pathname = usePathname();

  const wishlistItems = wishlist?.items;
  const totalQuantity = wishlistItems?.length;

  const handleRemoveFromWishlist = async (productId) => {
    await addToWishlist({ data: { productId } });
  };

  useEffect(() => {
    if (addToWishlistData?.message) {
      toast.success(addToWishlistData?.message);
    }
  }, [addToWishlistData]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={buttonClass}>
        <CiHeart />
        {totalQuantity > 0 && (
          <span className="absolute top-2 right-2 z-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>

      <div
        className={`fixed top-0 right-0 h-[100vh] w-[450px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b h-14">
          <h2 className="text-lg font-semibold">Your Wishlist</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            <RxCross1 />
          </button>
        </div>
        {/* ------ Cart Items ------ */}
        <div className="flex flex-col">
          <div className="overflow-y-auto h-[calc(100vh-9rem)]">
            {totalQuantity < 1 ? (
              <div className="flex items-center justify-center h-96">
                <h3>Your Wishlist is empty!</h3>
              </div>
            ) : (
              wishlistItems?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-3 border-b hover:bg-teagreen-100 duration-300"
                >
                  <div className="mr-3">
                    <Image
                      src={`${env.app_url}${item?.thumbnails[0]?.filepath}`}
                      alt={item?.thumbnails[0]?.alternateText}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-sm font-light">{item?.title}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-light border-r-1 border-gray-600 pr-2">
                        {item.unitPrices[0]?.unit}
                      </p>
                      <p className="text-sm font-normal">
                        {item?.isSale ? (
                          <span className="">
                            £
                            {toNumber(item?.unitPrices[0]?.salePrice).toFixed(
                              2
                            )}
                          </span>
                        ) : (
                          <span>
                            £{toNumber(item?.unitPrices[0]?.price).toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center border text-base font-light">
                    <button
                      onClick={() => console.log(item)}
                      className="px-2 py-2 bg-gray-50 hover:bg-gray-100"
                    >
                      Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item?._id)}
                      className="px-2 py-2 bg-gray-50 hover:bg-gray-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {user && (
          <div className="flex items-center justify-center p-4 border-t">
            <SectionLinkButton
              url={`/profile/wishlist`}
              title="View Wishlist"
              buttonClass="!block !w-full px-10"
              textClass="!block !w-full"
            />
          </div>
        )}
      </div>
      {/* -------- Mask -------- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Wishlist