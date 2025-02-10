"use client";

import useToast from "@/hooks/useToast";
import { FaEye, FaEyeSlash } from "@/icons";
import {
  useGoogleSignInMutation,
  useSignUpMutation,
} from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { Input, Spinner } from "@heroui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GoogleLoginButton from "./GoogleLoginButton";

const SignUp = ({ showForm, handleShowForm = () => {} }) => {
  const { handleSuccess, handleError } = useToast();

  // Password states
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectedUrl = searchParams.get("redirect");

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Defined Api function
  const [signUp, { data, error, isLoading }] = useSignUpMutation();
  const [googleSignIn, { data: googleSignInData, error: googleSignInError }] =
    useGoogleSignInMutation();

  useEffect(() => {
    if (data?.success || googleSignInData?.success) {
      dispatch(setAuth(data?.data || googleSignInData?.data));

      handleSuccess(data?.message || googleSignInData?.message);

      // window.location.href = redirectedUrl || "/";
      redirect(redirectedUrl || "/");
    }

    if (error) {
      handleError(error?.data?.message || googleSignInError?.data?.message);
    }
  }, [data, error, googleSignInData, googleSignInError]);

  const handleInput = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  // react-hook-form-function
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (e) => {
    const options = {
      data: credentials,
    };

    await signUp(options);
    setCredentials((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }));
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

  const handleFormChange = () => {
    handleShowForm("sign-in");
    reset();
  };

  return (
    <div
      className={`${
        showForm === "sign-up"
          ? "block translate-x-0 opacity-1"
          : "hidden translate-x-[100%] opacity-0"
      }`}
    >
      <div className="my-12 text-center">
        <h4 className="text-4xl font-semibold text-teagreen-600 mb-3">
          Create Account
        </h4>
        <p className="tracking-tight">Complete the form below to join us</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 xl:gap-4 mb-6"
      >
        <Input
          {...register("firstName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z]{2,30}$/,
              message: "Please enter only letters within 2 to 30 characters",
            },
            onChange: (e) => handleInput("firstName", e.target.value),
          })}
          errorMessage={getAuthErrorMessage(errors, "firstName")}
          isInvalid={!!getAuthErrorMessage(errors, "firstName")}
          isClearable
          type="text"
          label="First Name"
          variant="bordered"
          isRequired
        />
        <Input
          {...register("lastName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z]{2,30}$/,
              message: "Please enter only letters within 2 to 30 characters",
            },
            onChange: (e) => handleInput("lastName", e.target.value),
          })}
          errorMessage={getAuthErrorMessage(errors, "lastName")}
          isInvalid={!!getAuthErrorMessage(errors, "lastName")}
          isClearable
          type="text"
          label="Last Name"
          variant="bordered"
        />
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
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          isRequired
        />
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
        <button
          type="submit"
          className="text-center text-white w-full bg-teagreen-600 hover:bg-teagreen-700 duration-400 p-4 rounded-xl flex justify-center items-center gap-2 uppercase tracking-wider mt-3"
        >
          {isLoading ? <Spinner /> : <span>Submit</span>}
        </button>
      </form>
      <div className="text-teagreen-500 text-center">
        Have an account?{" "}
        <span
          onClick={handleFormChange}
          className="underline cursor-pointer hover:text-teagreen-600"
        >
          Sign in now
        </span>
      </div>
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
