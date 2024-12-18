import useCookie from "@/hooks/useCookie";
import { useGetRefreshTokenMutation } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { useEffect } from "react";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const { handleGetCookie } = useCookie();
  const token = handleGetCookie("authToken");
  const [getRefreshToken, { data }] = useGetRefreshTokenMutation();

  const refresh = async () => {
    const options = {
      data: { token },
    };
    await getRefreshToken(options);
  };

  useEffect(() => {
    if (data) {
      dispatch(setAuth(data.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return refresh;
};

export default useRefreshToken;
