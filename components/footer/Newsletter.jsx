"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Form,
  Select,
  SelectItem,
  Checkbox,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { useSubscribeNewsletterMutation } from "@/services/features/newsletter/newsletterApi";
import { toast } from "react-hot-toast";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

function Newsletter() {
  const [subscribeNewsletter, {data: subscribeNewsletterData, isLoading, isError, isSuccess, error }] = useSubscribeNewsletterMutation();
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
    <div>
      <div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
          <input
            type="text"
            placeholder="mail@example.com"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address!",
              },
            })}
            className="w-full px-5 py-3 max-w-96 text-black"
          />

          <button
            type="submit"
            className="bg-teagreen-600 text-white px-4 uppercase"
          >
            Subscribe
          </button>
        </form>
        {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
      </div>
      <LoadingOverlay isLoading={isLoading} />
    </div>
  );
}

export default Newsletter;