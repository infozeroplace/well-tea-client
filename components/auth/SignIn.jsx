"use client";

import useCookie from "@/hooks/useCookie";
import useToast from "@/hooks/useToast";
import {
  useGoogleSignInMutation,
  useSignInMutation,
} from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { Input, Spinner } from "@nextui-org/react";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import AppleLoginButton from "./AppleLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";

const SignIn = ({ showForm, handleShowForm = () => {} }) => {
  const { handleSuccess, handleError } = useToast();
  const { handleGetCookie, handleSetCookie } = useCookie();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [signIn, { data, error, isLoading }] = useSignInMutation();

  const [googleSignIn, { data: googleSignInData, error: googleSignInError }] =
    useGoogleSignInMutation();

  useEffect(() => {
    if (data?.success || googleSignInData?.success) {
      handleSetCookie(
        "authToken",
        data?.data?.refreshToken || googleSignInData?.data?.refreshToken,
        {
          expires: 7,
          secure: true,
          sameSite: "None",
        }
      );

      dispatch(setAuth(data?.data || googleSignInData?.data));

      handleSuccess(data?.message || googleSignInData?.message);

      window.location.href = redirect || "/";
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

    await signIn(options);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      await googleSignIn({ data: { code } });
    },
    flow: "auth-code",
    onError: () => {
      handleError(400, "Something went wrong!");
    },
  });

  const handleFacebookLogin = () => {
    alert("login start");
  };

  return (
    <div
      className={`${
        showForm === "sign-in"
          ? "block translate-x-0 opacity-1"
          : "hidden translate-x-[100%] opacity-0"
      }`}
    >
      <div className="my-12 text-center">
        <h4 className="text-4xl font-semibold text-teagreen-600 mb-3">
          Sign In
        </h4>
        <p className="tracking-tight">
          Provide your email and password to proceed
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 xl:gap-4 mb-6">
        <Input
          className=""
          type="email"
          onChange={(e) => handleInput("email", e.target.value)}
          label="Email"
          variant="bordered"
        />
        <div>
          <Input
            className=""
            type="password"
            onChange={(e) => handleInput("password", e.target.value)}
            label="Password"
            variant="bordered"
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="underline cursor-pointer text-teagreen-500 hover:text-teagreen-600 text-sm"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="text-center text-white w-full bg-teagreen-600 hover:bg-teagreen-700 duration-400 p-4 rounded-xl flex justify-center items-center gap-2 uppercase tracking-wider"
        >
          {isLoading ? <Spinner /> : <span>Login</span>}
        </button>
      </form>

      <div className="text-teagreen-500 text-center">
        New customer?{" "}
        <span
          onClick={() => handleShowForm("sign-up")}
          className="underline cursor-pointer hover:text-teagreen-600"
        >
          Create an account
        </span>
      </div>
      <div className="flex items-center my-4 xl:my-6">
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="text-xl font-semibold text-center mx-2">Or</div>
        <div className="w-full h-[1px] bg-slate-300"></div>
      </div>
      <div className="text-center mb-1">Sign in with</div>
      <div className="flex justify-center items-center gap-3">
        <GoogleLoginButton onLogin={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default SignIn;
