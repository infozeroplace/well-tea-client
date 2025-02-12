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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  useEditPasswordMutation,
  useEditSocialPasswordMutation,
} from "@/services/features/profile/profileApi";
import useToast from "@/hooks/useToast";

const EditPassword = ({ user, token, isOpen, onOpenChange }) => {
  const { handleSuccess, handleError } = useToast();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Defined Api function
  const [editSocialPassword, { data, error, isLoading }] =
    useEditSocialPasswordMutation({}, { skip: !token });
  const [editPassword, { data: editPasswordData, error: editPasswordError }] =
    useEditPasswordMutation({}, { skip: !token });

  // react-hook-form-function
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Toggle Show Password
  const handleShowCurrentPassword = () =>
    setShowCurrentPassword((show) => !show);
  const handleShowNewPassword = () => setShowNewPassword((show) => !show);

  // Submit for update
  const onSubmit = async (e) => {
    const options = {
      data: user?.isPasswordHas
        ? { currentPassword: e.currentPassword, newPassword: e.newPassword }
        : { newPassword: e.newPassword },
    };

    console.log("options", options);

    try {
      const res = user?.isPasswordHas
        ? await editPassword(options)
        : await editSocialPassword(options);
      if (res?.success) handleSuccess(res?.message);

      onOpenChange(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  useEffect(() => {
    reset();
  }, [user, isOpen]);

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
              Change Password
            </ModalHeader>
            <ModalBody>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 my-3"
              >
                {/* Current password field */}
                {user?.isPasswordHas && (
                  <Input
                    {...register("currentPassword", {
                      required: true,
                      pattern: {
                        value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                        message:
                          "Password must contain one special character and minimum six characters.",
                      },
                    })}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={handleShowCurrentPassword}
                      >
                        {showCurrentPassword ? (
                          <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <FaEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    errorMessage={getAuthErrorMessage(errors, "password")}
                    isInvalid={!!getAuthErrorMessage(errors, "password")}
                    isRequired
                    type={showCurrentPassword ? "text" : "password"}
                    label="Current Password"
                    variant="bordered"
                  />
                )}

                {/* New password field */}
                <Input
                  {...register("newPassword", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                      message:
                        "Password must contain one special character and minimum six characters.",
                    },
                  })}
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={handleShowNewPassword}
                    >
                      {showNewPassword ? (
                        <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  errorMessage={getAuthErrorMessage(errors, "password")}
                  isInvalid={!!getAuthErrorMessage(errors, "password")}
                  isRequired
                  type={showNewPassword ? "text" : "password"}
                  label="New Password"
                  variant="bordered"
                />
                <div className="flex justify-end gap-2">
                  <Button type="submit" className="bg-teagreen-600 text-white">
                    {/* {isLoading ? <Spinner /> : <span>Update Profile</span>} */}
                    {user?.isPasswordHas ? "Update" : "Set Password"}
                  </Button>
                  <Button
                    onPress={onClose}
                    color="danger"
                    type="reset"
                    variant="flat"
                  >
                    Cancel
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

export default EditPassword;
