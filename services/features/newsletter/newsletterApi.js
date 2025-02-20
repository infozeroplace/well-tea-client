import { api } from "@/services/api/apiSlice";

const newsletterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation({
      query: ({ data }) => ({
        url: "/public/newsletter/subscribe",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubscribeNewsletterMutation } = newsletterApi;
