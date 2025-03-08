import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const socialApi = api.injectEndpoints({
    endpoints: (builder) => ({
      getSocialPostList: builder.query({
        query: (query) => {
          const url = generateServiceUrl("public/post/list", query);

          return {
            url,
            method: "GET",
          };
        },
        providesTags: ["social"],
      }),
    }),
  });

  export const { useGetSocialPostListQuery } = socialApi;