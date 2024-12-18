"use client";

import useRefreshToken from "@/hooks/useRefreshToken";
import { useAppSelector } from "@/services/hook";
import { useEffect, useState } from "react";

const PersistLogin = ({ children }) => {
  const refresh = useRefreshToken();
  const { auth } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // isMounted is using for no memory leak
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.token]);

  return <>{isLoading ? <span>Loading...</span> : children}</>;
};

export default PersistLogin;
