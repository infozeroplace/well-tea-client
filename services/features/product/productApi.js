import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/product/list", query);

        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductListQuery } = productApi;
