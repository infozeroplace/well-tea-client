import { api } from "@/services/api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTest: builder.query({
      query: (query) => {
        const url = "/"

        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetTestQuery } = authApi;
