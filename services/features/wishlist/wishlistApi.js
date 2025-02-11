import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishlist: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/wishlist/add-to-wishlist"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    getWtw: builder.query({
      query: (query) => ({
        url: generateServiceUrl("/public/wishlist/wtw", query),
        method: "GET",
      }),
      providesTags: ["wishlist"],
    }),
  }),
});

export const { useAddToWishlistMutation, useGetWtwQuery } = wishlistApi;
