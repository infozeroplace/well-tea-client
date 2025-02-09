import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEditPasswordMutation, useEditSocialPasswordMutation } from "@/services/features/profile/profileApi";
// import {
//   useEditPasswordMutation,
//   useEditSocialPasswordMutation,
// } from "@/services/features/address/addressApi";

const EditPassword = ({ user, isOpen, onOpenChange }) => {
  // Password states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [updatedPassword, setUpdatedPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // Defined Api function
  const [editSocialPassword, { data, error, isLoading }] =
    useEditSocialPasswordMutation({}, { skip: !token });
  const [editPassword, { data: editPasswordData, error: editPasswordError }] =
    useEditPasswordMutation({}, { skip: !token });
  //   console.log("updatedPassword", updatedPassword);

  const handleInput = (field, value) =>
    setUpdatedPassword((prev) => ({ ...prev, [field]: value }));

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

    user?.isPasswordHas
      ? await editPassword(options)
      : await editSocialPassword(options);

    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="!w-full md:!max-w-[700px] lg:!max-w-[850px] !mb-auto !mt-20"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b-2">
              Change Password
            </ModalHeader>
            <ModalBody className="mt-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mb-3"
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
                      onChange: (e) =>
                        handleInput("currentPassword", e.target.value),
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
                    onChange: (e) => handleInput("newPassword", e.target.value),
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
                <Button
                  size="lg"
                  type="submit"
                  className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700"
                  onPress={onClose}
                >
                  {/* {isLoading ? <Spinner /> : <span>Update Profile</span>} */}
                  {user?.isPasswordHas ? "Update" : "Set Password"}
                </Button>
              </form>
            </ModalBody>
            {/* <ModalFooter> */}
            {/* <Button
                color="danger"
                variant="light"
                onPress={() => {
                  resetForm();
                  onClose();
                }}
              >
                Close
              </Button> */}
            {/* <Button
                type="submit"
                className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700"
                onPress={() => {
                  handleSubmit(onSubmit);
                  resetForm();
                  onClose();
                }}
              >
                 {user?.isPasswordHas?"Update":"Set Password"}
              </Button> */}
            {/* </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditPassword;
