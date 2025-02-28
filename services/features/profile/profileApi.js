import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit-profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    editSocialPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit-social-password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    editPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/secure/profile/edit-password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useEditSocialPasswordMutation, useEditPasswordMutation,useEditProfileMutation } =
  profileApi;
