import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const addressApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: "/secure/address/delete",
        method: "DELETE",
        body: { addressId: id },
      }),
      invalidatesTags: ["address"],
    }),
    editAddress: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/address/edit",
        method: "PUT",
        body: { addressId: data.id, ...data },
      }),
      invalidatesTags: ["address"],
    }),
    addAddress: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/address/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["address"],
    }),
    address: builder.query({
      query: (query) => ({
        url: generateServiceUrl("/secure/address/get", query),
        method: "GET",
      }),
      providesTags: ["address"],
    }),
  }),
});

export const {
  useDeleteAddressMutation,
  useEditAddressMutation,
  useAddAddressMutation,
  useAddressQuery,
} = addressApi;
