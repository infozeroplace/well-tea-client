import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishlist: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/common/wishlist/add-to-wishlist"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wt"],
    }),
  }),
});

export const { useAddToWishlistMutation } = wishlistApi;
