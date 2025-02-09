import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const addressApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/secure/address/get", query);

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["address"],
    }),
    addAddress: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/address/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["address"],
    }),
    editAddress: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/address/edit",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["address"],
    }),
    deleteAddress: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/address/delete",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["address"],
    }),
  }),
});

export const { useGetAddressQuery, useAddAddressMutation, useEditAddressMutation, useDeleteAddressMutation } = addressApi;