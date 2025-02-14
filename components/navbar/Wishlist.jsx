import React from 'react'
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CiHeart } from 'react-icons/ci'
import { RxCross1 } from "react-icons/rx";
import { PiShoppingCartThin, PiTrashSimpleLight } from "react-icons/pi";
import { env } from "@/config/env";
import { SectionLinkButton } from '../shared';
import { useGetWtwQuery, useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import { useAppSelector } from '@/services/hook';
import LoadingOverlay from '../shared/LoadingOverlay';
const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function Wishlist({ buttonClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const [addToWishlist, { data: addToWishlistData, isLoading: addToWishlistLoading }] = useAddToWishlistMutation();
  const [addToCart, { isLoading: addToCartLoading, data: addToCartData }] = useAddToCartMutation();
  const { user } = useAppSelector(state => state.auth);
  const pathname = usePathname();
  const wishlistItems = wishlist?.items;
  const totalQuantity = wishlistItems?.length;

  console.log(wishlistItems);

  const handleRemoveFromWishlist = async (productId) => {
    await addToWishlist({ data: { productId } });
  };

  const handleAddToCart = async (
    productId,
    actionType,
    purchaseType,
    quantity,
    unitPriceId,
    subscriptionId
  ) => {
    // console.log(productId, actionType, purchaseType, quantity, unitPriceId, subscriptionId);
    await addToCart({
      data: {
        productId,
        actionType,
        purchaseType,
        quantity,
        unitPriceId,
        subscriptionId,
      },
    });

    if (addToCartData?.message) {
      toast.success(addToCartData?.message);
    }
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
    <>
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
                  className="flex items-center gap-2 justify-between px-2 py-3 border-b hover:bg-teagreen-100 duration-300"
                >
                  <Link
                    href={`/${item?.urlParameter}`}
                    className="flex items-center gap-3"
                  >
                    <div className="">
                      <Image
                        src={`${env.app_url}${item?.thumbnails[0]?.filepath}`}
                        alt={item?.thumbnails[0]?.alternateText}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
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
                  </Link>
                  <div className="flex items-center border text-base font-light">
                    <button
                      onClick={() =>
                        handleAddToCart(
                          item?._id,
                          "plus",
                          "one-time",
                          1,
                          item?.unitPrices[0]?._id,
                          ""
                        )
                      }
                      className="px-2 py-2 bg-gray-50 hover:bg-gray-100"
                    >
                      <PiShoppingCartThin />
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item?._id)}
                      className="px-2 py-2 bg-gray-50 hover:bg-gray-100"
                    >
                      <PiTrashSimpleLight className="" />
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
      <LoadingOverlay isLoading={addToCartLoading || addToWishlistLoading} />
    </>
  );
}

export default Wishlist