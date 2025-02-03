"use client";

import useToast from "@/hooks/useToast";
import { useForgotPasswordMutation } from "@/services/features/auth/authApi";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { Input, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ForgetPasswordScreen = () => {
  const { handleSuccess, handleError } = useToast();
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const [forgotPassword, { data, isLoading, error }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
    }
    if (error) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSent(true);
    await forgotPassword({ data });
  };

  return (
    (<div className="flex justify-center items-center bg-[#EEF2F2]">
      <div className="max-w-[510px] w-full px-5 section-gap">
          <div className="my-12 text-center">
            <h4 className="text-4xl font-semibold text-teagreen-600 mb-3">
              Forgot password?
            </h4>
            <p className="tracking-tight px-5">
              Please enter your registered email address, and we'll send you a
              link to reset your password.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 xl:gap-4"
          >
            <Input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
                onChange: (e) => setEmail(e.target.value),
              })}
              errorMessage={getAuthErrorMessage(errors, "email")}
              isInvalid={!!getAuthErrorMessage(errors, "email")}
              isRequired
              label="Email"
              type="email"
              variant="bordered"
            />
            <button
              type="submit"
              disabled={!isEmail}
              className={`${
                !isEmail
                  ? "bg-text__gray cursor-not-allowed"
                  : "bg-teagreen-600 hover:bg-teagreen-700 cursor-pointer"
              } w-full text-center text-white duration-400 p-4 rounded-xl uppercase tracking-wider`}
            >
              {isLoading ? "Sending..." : isSent ? "Resend" : "Send"}
            </button>
          </form>
      </div>
    </div>)
  );
};

export default ForgetPasswordScreen;
