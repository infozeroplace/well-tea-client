"use client"

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { useSubscribeNewsletterMutation } from "@/services/features/newsletter/newsletterApi";
import { toast } from "react-hot-toast";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

const Subscription = () => {
  const [
    subscribeNewsletter,
    { data: subscribeNewsletterData, isLoading, isError, isSuccess, error },
  ] = useSubscribeNewsletterMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (formData) => {
    await subscribeNewsletter({
      data: formData,
    });
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(subscribeNewsletterData.message);
    }
  }, [isSuccess]);

  return (
    <>
    <div className="relative bg-cover h-[300px] flex items-center bg-black">
        <div
          style={{ backgroundImage: `url("/images/about-image-8.jpg")` }}
          className="absolute inset-0 bg-cover h-[300px] opacity-60"
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 container-narrow z-10 items-center">
          <div className="text-[1.75rem] text-white pr-[7rem]">
            Sign up to receive our emails and enjoy 15% off your first order.
          </div>
          <div className="">
            <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex items-center border border-green-200/50 w-[90%] hover:border-[#A8CC3C] bg-white/30 backdrop-blur-lg">
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address!",
                  },
                })}
                placeholder="Enter Email..."
                className="!bg-transparent !text-white placeholder:text-white w-full py-4 pl-4 focus:outline-none"
              />
              <button type="submit" className="uppercase px-4 text-sm font-semibold text-[#A8CC3C] hover:text-white tracking-wide hover:bg-[#A8CC3C] py-5">
                subscribe
              </button>
            </form>
            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
          </div>
        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} />
    </>
  )
}

export default Subscription