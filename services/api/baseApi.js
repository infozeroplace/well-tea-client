
// import { getBaseUrl } from "@/lib/utils";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/api/axiosBaseQuery";
import { getBaseUrl } from "@/utils/temp";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
//   tagTypes: tagTypesList,
});
