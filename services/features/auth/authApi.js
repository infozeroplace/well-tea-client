import { api } from "@/services/api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRefreshToken: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/refresh/token",
        method: "POST",
        body: data,
      }),
      providesTags: ["user"],
    }),
    googleSignIn: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/google-sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetRefreshTokenMutation,
  useGoogleSignInMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi;
