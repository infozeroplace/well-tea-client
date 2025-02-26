import { useGetCartQuery } from "@/services/features/cart/cartApi";
import { addCart } from "@/services/features/cart/cartSlices";
import { useGetWtwQuery } from "@/services/features/wishlist/wishlistApi";
import { addWishlist } from "@/services/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/services/hook";
import { useEffect } from "react";

const LoadInitialData = ({ children }) => {
  const {
    data: { data: { wishlist } = {} } = {},
    refetch: refetchWishlist,
    isLoading: wishlistLoading,
  } = useGetWtwQuery(undefined);

  const {
    data: { data: { cart } = {} } = {},
    refetch: refetchCart,
    isLoading: cartLoading,
  } = useGetCartQuery(undefined);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      await refetchWishlist();
      await refetchCart();
    };

    fetchData();

    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(addWishlist(wishlist));
  }, [wishlist?.items]);

  useEffect(() => {
    dispatch(addCart(cart));
  }, [cart?.items]);

  return children;
};

export default LoadInitialData;
