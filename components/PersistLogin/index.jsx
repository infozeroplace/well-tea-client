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

  const { data, refetch, isFetching } = useGetRefreshTokenQuery(undefined, {
    skip: !!auth?.token, // ✅ Avoid calling API if the token already exists
  });

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      if (!auth?.token) {
        await refetch();
      }
      if (isMounted) setIsLoading(false);
    };

    verifyRefreshToken();

    return () => {
      isMounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.token]);

  useEffect(() => {
    if (data?.data) {
      dispatch(setAuth(data.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  if (isLoading || isFetching) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return children;
};

export default PersistLogin;
