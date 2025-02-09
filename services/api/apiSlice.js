import { env } from "@/config/env";
import { logOut, setAuth } from "@/services/features/auth/authSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery(
      { url: "/auth/refresh/user", method: "GET" },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setAuth(refreshResult?.data?.data));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
      if (typeof window !== "undefined") {
        window.location.href = "/login"; // Redirect to login page
      }
    }
  }
  if (result?.error?.status === 401) {
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
