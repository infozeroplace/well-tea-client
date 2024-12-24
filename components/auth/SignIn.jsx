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
import GoogleLoginButton from "./GoogleLoginButton";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = ({ showForm, handleShowForm = () => {} }) => {
  const { handleSuccess, handleError } = useToast();
  const { handleGetCookie, handleSetCookie } = useCookie();

  // Password strates
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/.test(
    password
  );

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

  // react-hook-form-fuctions
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (e) => {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 xl:gap-4 mb-6"
      >
        <Input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
            onChange: (e) => handleInput("email", e.target.value),
          })}
          errorMessage={getAuthErrorMessage(errors, "email")}
          isInvalid={!!getAuthErrorMessage(errors, "email")}
          type="email"
          label="Email"
          variant="bordered"
          isRequired
        />
        <div>
          <Input
            
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                message:
                  "Password must contain one special character and minimum six characters.",
              },
              onChange: (e) => handleInput("password", e.target.value),
            })}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            errorMessage={getAuthErrorMessage(errors, "password")}
            isInvalid={!!getAuthErrorMessage(errors, "password")}
            isRequired
            type={showPassword ? "text" : "password"}
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
