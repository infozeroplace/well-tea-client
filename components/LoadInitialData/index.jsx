import { useGetWtwQuery } from "@/services/features/wishlist/wishlistApi";
import { useEffect } from "react";

const LoadInitialData = ({ children }) => {
  const { data: { data: { wishlist } = {} } = {}, refetch: refetchWishlist } =
    useGetWtwQuery(undefined);

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
    console.log(wishlist);
  }, [wishlist?.items]);

  return children;
};

export default LoadInitialData;
