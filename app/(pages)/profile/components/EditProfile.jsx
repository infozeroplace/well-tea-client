import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { useEditProfileMutation } from "@/services/features/profile/profileApi";
import { useAppDispatch } from "@/services/hook";
import { setAuth } from "@/services/features/auth/authSlice";

const EditProfile = ({ auth, isOpen, onOpenChange, editProfile, editProfileData }) => {
  const dispatch = useAppDispatch();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit for update
  const onSubmit = async (data) => {
    try {
      await editProfile({ data }).unwrap();
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  useEffect(() => {
    if (editProfileData?.data) {
      dispatch(
        setAuth({
          ...auth,
          user: editProfileData?.data,
        })
      );
    }
  }, [editProfileData?.data]);

  useEffect(() => {
    reset();
  }, [auth?.user, isOpen, reset]);

  return (
    <Modal
      backdrop="blur"
      placement="center"
      scrollBehavior="inside"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: "max-w-full md:max-w-[700px] lg:max-w-[650px]",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b-2">
              Edit Profile
            </ModalHeader>
            <ModalBody>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 my-3"
              >
                <div className="flex flex-col gap-5 md:flex-row justify-between">
                  <Input
                    {...register("firstName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]{2,30}$/,
                        message: "Please enter only letters",
                      },
                    })}
                    errorMessage={getAuthErrorMessage(errors, "firstName")}
                    isInvalid={!!getAuthErrorMessage(errors, "firstName")}
                    variant="bordered"
                    label="First Name"
                    type="text"
                    defaultValue={auth?.user?.firstName || ""}
                  />
                  <Input
                    {...register("lastName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]{2,30}$/,
                        message: "Please enter only letters",
                      },
                    })}
                    errorMessage={getAuthErrorMessage(errors, "lastName")}
                    isInvalid={!!getAuthErrorMessage(errors, "lastName")}
                    variant="bordered"
                    label="Last Name"
                    type="text"
                    defaultValue={auth?.user?.lastName || ""}
                  />
                </div>
                <Input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  errorMessage={getAuthErrorMessage(errors, "email")}
                  isInvalid={!!getAuthErrorMessage(errors, "email")}
                  isClearable
                  type="email"
                  label="Email"
                  variant="bordered"
                  defaultValue={auth?.user?.email || ""}
                  isRequired
                />
                <Input
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^\+?[0-9]{7,14}$/,
                      message:
                        "Please enter only numbers at least 7 to 14 digits",
                    },
                  })}
                  errorMessage={getAuthErrorMessage(errors, "phone")}
                  isInvalid={!!getAuthErrorMessage(errors, "phone")}
                  variant="bordered"
                  label="Phone"
                  type="text"
                  defaultValue={auth?.user?.phone || ""}
                  isClearable
                />
                <div className="flex justify-end gap-2">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="bg-rose-100"
                  >
                    Close
                  </Button>
                  {/* <Button type="reset" variant="flat">
                    Reset
                  </Button> */}
                  <Button type="submit" className="bg-teagreen-600 text-white">
                    Update
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditProfile;
