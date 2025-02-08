import { env } from "@/config/env";
import { logOut, setAuth } from "@/services/features/auth/authSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: env.app_route_url,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const token = Cookies.get("authToken");

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // send the refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: "/auth/refresh/token", method: "POST", body: { token } },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setAuth(refreshResult?.data?.data));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      Cookies.remove("authToken");
      api.dispatch(logOut());
      if (typeof window !== "undefined") {
        window.location.href = "/login"; // Redirect to login page
      }
    }
  }
  if (result?.error?.status === 401) {
    Cookies.remove("authToken");
    api.dispatch(logOut());
    if (typeof window !== "undefined") {
      window.location.href = "/login"; // Redirect to login page
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["user", "product", "review", "system", "address"],
  endpoints: () => ({}),
});
