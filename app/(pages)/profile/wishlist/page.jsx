"use client";

import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { env } from "@/config/env";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import { useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { useAppSelector } from "@/services/hook";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { PiShoppingCartThin, PiTrashSimpleLight } from "react-icons/pi";
import { useDispatch } from "react-redux";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function WishlistScreen() {
  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const wishlistItems = wishlist?.items;
  const [
    addToWishlist,
    { data: addToWishlistData, isLoading: addToWishlistLoading },
  ] = useAddToWishlistMutation();
  const [addToCart, { data: addToCartData, isLoading: addToCartLoading }] =
    useAddToCartMutation();

  const dispatch = useDispatch();
  const handleRemoveFromWishlist = async (productId) => {
    await addToWishlist({ data: { productId } });
  };

  useEffect(() => {
    if (addToWishlistData?.message) {
      toast.success(addToWishlistData?.message);
    }
  }, [addToWishlistData]);

  const handleAddToCart = async (
    productId,
    actionType,
    purchaseType,
    quantity,
    unitPriceId,
    subscriptionId
  ) => {
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
  };

  useEffect(() => {
    if (addToCartData?.message) {
      toast.success(addToCartData?.message);
    }
  }, [addToCartData]);

  return (
    <div className="max-h-[400px] overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="">
          <tr className="border-b border-gray-200 text-left text-base">
            <th className="py-3 font-medium">Product</th>
            <th className="py-3 font-medium">Unit</th>
            <th className="py-3 font-medium">Price</th>
            <th className="py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems?.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100"
            >
              <td className="py-4">
                <Link
                  href={`/${item?.urlParameter}`}
                  className="flex items-center gap-3 group w-fit"
                >
                  <img
                    src={env.app_url + item?.thumbnails[0].filepath}
                    alt={item?.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="text-left capitalize space-y-1">
                    <h4 className="font-brand__font__light group-hover:underline">
                      {item?.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item?.teaFormat.length
                        ? item?.teaFormat[0].assortment
                        : item?.category.length
                        ? item?.category[0].assortment
                        : ""}
                    </p>
                  </div>
                </Link>
              </td>
              <td className="py-4 font-brand__font__light">
                <p className="text-brand__font__size__sm text-gray-500">
                  {item?.unitPrices[0]?.unit}
                </p>
              </td>
              <td className="py-4 font-light">
                {item?.isSale ? (
                  <span>
                    £{toNumber(item?.unitPrices[0]?.salePrice).toFixed(2)}
                  </span>
                ) : (
                  <span>
                    £{toNumber(item?.unitPrices[0]?.price).toFixed(2)}
                  </span>
                )}
              </td>
              <td className="py-4 font-brand__font__light">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleAddToCart(
                        item?._id,
                        "plus",
                        "one_time",
                        1,
                        item?.unitPrices[0]?._id,
                        ""
                      )
                    }
                    className="text-nowrap bg-teagreen-600 text-white px-3 py-2 flex items-center gap-2"
                    // className="text-nowrap bg-teagreen-200 border-[.5px] border-teagreen-600 hover:bg-teagreen-300 rounded-sm px-3 py-2"
                  >
                    <PiShoppingCartThin className="text-brand__font__size__md" />
                    <span className="text-brand__font__size__sm">
                      Add To Cart
                    </span>
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item?._id)}
                    className="text-nowrap bg-red-600 text-white px-3 py-2 flex items-center gap-2"
                    // className="text-nowrap text-rose-600 bg-rose-100 border-[.5px] border-rose-600 hover:bg-rose-200 rounded-sm px-3 py-2"
                  >
                    <PiTrashSimpleLight className="text-brand__font__size__md" />
                    <span className="text-brand__font__size__sm">
                      Remove From Wishlist
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {wishlistItems?.length === 0 && (
        <div className="flex items-center justify-center h-60">
          <h3>Your wishlist is empty!</h3>
        </div>
      )}
      <LoadingOverlay isLoading={addToCartLoading || addToWishlistLoading} />
    </div>
  );
}

export default WishlistScreen;
