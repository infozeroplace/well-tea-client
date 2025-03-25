import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updatePaymentIntent: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/payment/update-payment-intent"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),
    createPaymentIntent: builder.mutation({
      query: ({ data }) => ({
        url: generateServiceUrl("/public/payment/create-payment-intent"),
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const {
  useUpdatePaymentIntentMutation,
  useCreatePaymentIntentMutation,
} = paymentApi;
