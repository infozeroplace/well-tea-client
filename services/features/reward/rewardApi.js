import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const rewardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postRewards: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/secure/reward/redeem"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reward", "user"],
    }),
  }),
});

export const { usePostRewardsMutation } = rewardApi;