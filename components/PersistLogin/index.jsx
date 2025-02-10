"use client";

import { useGetRefreshTokenQuery } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/services/hook";
import { Spinner } from "@heroui/react";
import { useEffect, useState } from "react";

const PersistLogin = ({ children }) => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const { data, refetch } = useGetRefreshTokenQuery();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refetch();
      } catch (error) {
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.token]);

  useEffect(() => {
    if (data) {
      dispatch(setAuth(data.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
