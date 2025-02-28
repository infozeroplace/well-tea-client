import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const commonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWt: builder.query({
      query: (query) => ({
        url: generateServiceUrl("/public/common/wt", query),
        method: "GET",
      }),
      providesTags: ["wt"],
    }),
  }),
});

export const { useGetWtQuery } = commonApi;
