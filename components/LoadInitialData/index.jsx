import { addCart } from "@/services/features/cart/cartSlices";
import { useGetWtQuery } from "@/services/features/common/commonApi";
import { addWishlist } from "@/services/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/services/hook";
import { useEffect } from "react";

const LoadInitialData = ({ children }) => {
  const { data: { data: { wishlist, cart } = {} } = {}, refetch } =
    useGetWtQuery(undefined);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      await refetch();
    };

    fetchData();

    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(addCart(cart));
    dispatch(addWishlist(wishlist));
  }, [cart?.items, wishlist?.items]);

  return children;
};

export default LoadInitialData;
