import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updatePaymentIntent: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/payment/update-payment-intent"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    createPaymentIntent: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/payment/create-payment-intent"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
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

export const {
  useUpdatePaymentIntentMutation,
  useCreatePaymentIntentMutation,
  useGetOrderListQuery,
} = ordersApi;
