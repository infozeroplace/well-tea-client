import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRefreshToken: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/auth/refresh/user", query);

        return {
          url,
          method: "GET",
        };
      },
    }),
    checkAuth: builder.query({
      query: (query) => {
        const url = generateServiceUrl("/public/auth/me", query);

        return {
          url,
          method: "GET",
        };
      },
    }),
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
  useGetRefreshTokenQuery,
  useCheckAuthQuery,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useGoogleSignInMutation,
  useSignInMutation,
  useSignUpMutation,
  useWelcomeQuery,
} = authApi;
