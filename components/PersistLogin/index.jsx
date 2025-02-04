"use client";

import useRefreshToken from "@/hooks/useRefreshToken";
import { useAppSelector } from "@/services/hook";
import { Spinner } from "@heroui/react";
import { useEffect, useState } from "react";

const PersistLogin = ({ children }) => {
  const refresh = useRefreshToken();
  const { auth } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.token]);

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default PersistLogin;
