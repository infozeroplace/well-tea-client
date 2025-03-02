import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/blog/blog-list", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
  }),
});

export const { useGetBlogListQuery } = productApi;
