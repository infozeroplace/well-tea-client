"use client";

import useToast from "@/hooks/useToast";
import { useForgotPasswordMutation } from "@/services/features/auth/authApi";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { Input, Button } from "@nextui-org/react";
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
    <div className="h-[50vh] flex flex-col items-center justify-center">
      <div className="max-w-[500px] w-full p-10 rounded-lg mx-auto shadow bg-teagreen-200 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl text-teagreen-600 font-semibold text-center">
            Forgot password?
          </h4>
          <p className="text-center text-sm mb-3">
            Please enter your registered email address, and we'll send you a
            link to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
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
              size="lg"
              variant="bordered"
              labelPlacement="outside"
            />
            <button
              type="submit"
              disabled={!isEmail}
              className={`${
                !isEmail
                  ? "bg-text__gray cursor-not-allowed"
                  : "bg-teagreen-600 hover:bg-teagreen-700 cursor-pointer"
              } w-full py-2 text-white duration-300 rounded-full`}
            >
              {isLoading ? "Sending..." : isSent ? "Resend" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordScreen;
