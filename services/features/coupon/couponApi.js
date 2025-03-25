import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const couponApi = api.injectEndpoints({
  endpoints: (builder) => ({
    applyCoupon: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/coupon/apply-coupon"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});

export const { useApplyCouponMutation } = couponApi;
