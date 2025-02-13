import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/cart/add-to-cart"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    getCart: builder.query({
      query: (query) => ({
        url: generateServiceUrl("/public/cart/wtc", query),
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery } = cartApi;
