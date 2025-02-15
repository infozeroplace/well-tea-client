"use client"

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useAppSelector } from "@/services/hook";
import { useGetWtwQuery, useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function WishlistScreen() {
  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const wishlistItems = wishlist?.items;
  const [addToWishlist, { data: addToWishlistData, isLoading: addToWishlistLoading }] = useAddToWishlistMutation();
  const [addToCart, { data: addToCartData, isLoading: addToCartLoading }] = useAddToCartMutation();

  const dispatch = useDispatch();
  const handleRemoveFromWishlist = async (productId) => {
    await addToWishlist({ data: { productId } })
  }

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
    <div className="max-h-screen">
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-left text-base">
            <th className="py-3 font-medium">Product</th>
            <th className="py-3 font-medium">Unit</th>
            <th className="py-3 font-medium">Price</th>
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
                  className="flex items-center gap-3 group"
                >
                  <img
                    // src={`${env.image_path}/${item?.product?.thumbnails[0]}`}
                    src="/products/product_01.jpg"
                    alt={item?.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="text-left capitalize space-y-1">
                    <h4 className="font-light group-hover:underline">
                      {item?.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item?.teaFormat[0]}
                    </p>
                  </div>
                </Link>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">
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
              <td className="py-4 font-light space-x-5">
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
                  className="text-nowrap bg-teagreen-600 text-white px-5 py-2"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item?._id)}
                  className="text-nowrap bg-rose-600 text-white px-5 py-2"
                >
                  Remove From Wishlist
                </button>
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