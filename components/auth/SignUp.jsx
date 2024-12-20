"use client";

import useCookie from "@/hooks/useCookie";
import useToast from "@/hooks/useToast";
import { useGoogleSignInMutation, useSignUpMutation } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { Spinner } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import { useGoogleLogin } from "@react-oauth/google";

const SignUp = ({ showForm }) => {
  const { handleSuccess, handleError } = useToast();
  const { handleGetCookie, handleSetCookie } = useCookie();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("redirect");

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signUp, { data, error, isLoading }] = useSignUpMutation();

const [googleSignIn, { data: googleSignInData, error: googleSignInError }] =
    useGoogleSignInMutation();

  useEffect(() => {
    if (data?.success || googleSignInData?.success) {
      handleSetCookie("authToken", data?.data?.refreshToken || googleSignInData?.data?.refreshToken, {
        expires: 7,
        secure: true,
        sameSite: "None",
      });

      dispatch(setAuth(data?.data || googleSignInData?.data));

      handleSuccess(data?.message || googleSignInData?.message);

      window.location.href = search || "/";
    }

    if (error) {
      handleError(error?.data?.message || googleSignInError?.data?.message);
    }
  }, [data, error, googleSignInData, googleSignInError]);

  const handleInput = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      data: credentials,
    };

    await signUp(options);
  };

  // Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      await googleSignIn({ data: { code } });
    },
    flow: "auth-code",
    onError: () => {
      handleError(400, "Something went wrong!");
    },
  });

  return (
    <div
      className={`${
        showForm === "sign-up"
          ? "block translate-x-0 opacity-1"
          : "hidden translate-x-[100%] opacity-0"
      }`}
    >
      <h4 className="text-2xl font-semibold text-center mb-4">
        Create Account
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 xl:gap-4">
        {/* <div className="flex justify-between gap-2"> */}
          <input
            className="w-full border border-gray-400 p-2 rounded-full bg-teagreen-300"
            type="text"
            placeholder="First Name"
            onChange={(e) => handleInput("firstName", e.target.value)}
          />
          <input
            className="w-full border border-gray-400 p-2 rounded-full bg-teagreen-300"
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleInput("lastName", e.target.value)}
          />
        {/* </div> */}
        <input
          className="w-full border border-gray-400 p-2 rounded-full bg-teagreen-300"
          type="text"
          placeholder="Email"
          onChange={(e) => handleInput("email", e.target.value)}
        />
        <input
          className="w-full border border-gray-400 p-2 rounded-full bg-teagreen-300 mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => handleInput("password", e.target.value)}
        />
        <button
          type="submit"
          className="text-center text-white w-full bg-teagreen-600 hover:bg-teagreen-700 duration-400 p-2 rounded-full flex justify-center items-center gap-2"
        >
          {isLoading ? <Spinner /> : <span>Submit</span>}
        </button>
      </form>
      <div className="flex items-center my-4 xl:my-6">
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="text-xl font-semibold text-center mx-2">Or</div>
        <div className="w-full h-[1px] bg-slate-300"></div>
      </div>
      <div className="text-center mb-1">Sign in with</div>
      <div className="flex justify-center gap-3">
        <GoogleLoginButton onLogin={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default SignUp;
