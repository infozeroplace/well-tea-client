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
        body: { addressId: data.id, ...data },
      }),
      invalidatesTags: ["address"],
    }),
    deleteAddress: builder.mutation({
      query: ( id ) => ({
        url: "/secure/address/delete",
        method: "DELETE",
        body: {addressId: id},
      }),
      invalidatesTags: ["address"],
    }),
    // editSocialPassword: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/secure/profile/edit-social-password",
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["password"],
    // }),
    // editPassword: builder.mutation({
    //   query: ({ data }) => ({
    //     url: "/secure/profile/edit-password",
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["password"],
    // }),
    
  }),
});

export const { useGetAddressQuery, useAddAddressMutation, useEditAddressMutation, useDeleteAddressMutation } = addressApi;