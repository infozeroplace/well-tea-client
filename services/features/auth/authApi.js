import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/reset-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    forgotPassword: builder.mutation({
      query: ({ data }) => ({
        url: "/public/auth/forgot-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
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
    welcome: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/", query);

        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useGetRefreshTokenMutation,
  useGoogleSignInMutation,
  useSignInMutation,
  useSignUpMutation,
  useWelcomeQuery,
} = authApi;