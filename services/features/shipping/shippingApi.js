import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const shippingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getShippingMethods: builder.query({
      query: (query) => ({
        url: generateServiceUrl("/public/shipping/list", query),
        method: "GET",
      }),
      providesTags: ["shipping"],
    }),
  }),
});

export const { useGetShippingMethodsQuery } = shippingApi;
