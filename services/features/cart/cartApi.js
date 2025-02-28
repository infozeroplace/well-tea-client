import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/common/cart/add-to-cart"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wt"],
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
