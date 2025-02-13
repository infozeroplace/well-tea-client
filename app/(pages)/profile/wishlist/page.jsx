"use client"

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/services/features/cart/cartSlice';
import { useGetWtwQuery, useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useAppSelector } from "@/services/hook";
import Link from 'next/link';

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function WishlistScreen() {
  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const wishlistItems = wishlist?.items;
  const [addToWishlist, { isLoading, data: addToWishlistData }] = useAddToWishlistMutation();

  const dispatch = useDispatch();
  const handleRemoveFromWishlist = async (productId) => {
    await addToWishlist({ data: { productId } })
  }

  useEffect(() => {
    if (addToWishlistData?.message) {
      toast.success(addToWishlistData?.message);
    }
  }, [addToWishlistData]);

  const handleAddToCart = (product) => {
    // dispatch(
    //   addToCart({
    //     product: product,
    //     unitObj,
    //     quantity: 1,
    //     productPrice: product?.price,
    //     addOns: [],
    //   })
    // );
  }

  console.log(wishlistItems);

  return (
    <div className="max-h-screen">
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-center text-base">
            <th className="py-3 font-medium">Product</th>
            <th className="py-3 font-medium">Unit</th>
            <th className="py-3 font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems?.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100 text-center"
            >
              <td className="py-4">
                <Link href={`/${item?.urlParameter}`} className="flex items-center gap-1">
                  <img
                    // src={`${env.image_path}/${item?.product?.thumbnails[0]}`}
                    src="/products/product_01.jpg"
                    alt={item?.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="text-left capitalize">
                    <h4 className="font-light hover:underline">{item?.title}</h4>
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
                  onClick={() => handleAddToCart(item)}
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
    </div>
  );
}

export default WishlistScreen;