"use client";

import useCookie from "@/hooks/useCookie";
import useToast from "@/hooks/useToast";
import { useResetPasswordMutation } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const ResetPasswordScreen = () => {
  const dispatch = useAppDispatch();
  const { handleSetCookie } = useCookie();
  const { handleSuccess, handleError } = useToast();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/.test(
    password
  );

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const redirect = searchParams.get("redirect");

  const [resetPassword, { data, isLoading, error }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (data) {
      handleSetCookie("authToken", data?.data?.refreshToken, {
        expires: 7,
        secure: true,
        sameSite: "None",
      });

      dispatch(setAuth(data?.data));

      handleSuccess(data?.message);

      window.location.href = redirect || "/profile";
    }

    if (error?.status) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data) => {
    data.token = token;
    await resetPassword({ data });
  };

  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <div className="max-w-[500px] w-full p-10 rounded-lg mx-auto shadow bg-teagreen-200 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl text-teagreen-600 font-semibold text-center">
            Reset Password
          </h4>
          <p className="text-center text-sm mb-3">Please enter new password.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                  message:
                    "Password must contain one special character and minimum six characters.",
                },
                onChange: (e) => setPassword(e.target.value),
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
              label="New Password"
              type={showPassword ? "text" : "password"}
              size="lg"
              variant="bordered"
              labelPlacement="outside"
            />
            <div>
              <button
                type="submit"
                disabled={!isPassword}
                className={`${
                  !isPassword
                    ? "bg-text__gray cursor-not-allowed"
                    : "bg-teagreen-600 hover:bg-teagreen-700 cursor-pointer"
                } w-full py-2 text-white duration-300 rounded-full`}
              >
                {isLoading ? "Resetting..." : "Reset"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
