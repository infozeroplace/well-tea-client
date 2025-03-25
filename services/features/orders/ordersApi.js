import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/order/list", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["orders"],
    }),
  }),
});

export const { useGetOrderListQuery } = ordersApi;
