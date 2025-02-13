import { useGetWtwQuery } from "@/services/features/wishlist/wishlistApi";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/services/hook";
import { addWishlist } from "@/services/features/wishlist/wishlistSlice";

const LoadInitialData = ({ children }) => {
  const { data: { data: { wishlist } = {} } = {}, refetch: refetchWishlist } =
    useGetWtwQuery(undefined);

  const dispatch = useAppDispatch();
  // const wishList = useAppSelector((state) => state.wishlist.wishlist);

  useEffect( () => {
    let isMounted = true;

    const fetchData = async () => {
      await refetchWishlist();
    };

    fetchData();

    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log(wishlist);
    dispatch(addWishlist(wishlist));
  }, [wishlist?.items]);

  return children;
};

export default LoadInitialData;
