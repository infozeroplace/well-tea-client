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
import { useEditProfileMutation } from "@/services/features/profile/profileApi";

const EditProfile = ({ user, isOpen, onOpenChange }) => {
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const [editProfile, { isLoading }] = useEditProfileMutation();

  const handleInput = (field, value) =>
    setProfileData((prev) => ({ ...prev, [field]: value }));

  // react-hook-form-function
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit for update
  const onSubmit = async (e) => {
    // e.preventDefault();
    await editProfile({ data: profileData });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await editAddress({data: addressData});
  //   onOpenChange(false);
  // };

  const resetForm = () => {
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
              Edit Profile
            </ModalHeader>
            <ModalBody className="mt-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mb-3"
              >
                <div className="flex flex-col md:flex-row gap-8 mb-5 justify-between">
                  <Input
                    {...register("firstName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]{2,30}$/,
                        message: "Please enter only letters",
                      },
                      onChange: (e) => handleInput("firstName", e.target.value),
                    })}
                    errorMessage={getAuthErrorMessage(errors, "firstName")}
                    isInvalid={!!getAuthErrorMessage(errors, "firstName")}
                    variant="bordered"
                    label="First Name"
                    type="text"
                    defaultValue={user?.firstName || ""}
                  />
                  <Input
                    {...register("lastName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]{2,30}$/,
                        message: "Please enter only letters",
                      },
                      onChange: (e) => handleInput("lastName", e.target.value),
                    })}
                    errorMessage={getAuthErrorMessage(errors, "lastName")}
                    isInvalid={!!getAuthErrorMessage(errors, "lastName")}
                    variant="bordered"
                    label="Last Name"
                    type="text"
                    defaultValue={user?.lastName || ""}
                  />
                </div>
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
                  defaultValue={user?.email || ""}
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
                    onChange: (e) => handleInput("phone", e.target.value),
                  })}
                  errorMessage={getAuthErrorMessage(errors, "phone")}
                  isInvalid={!!getAuthErrorMessage(errors, "phone")}
                  variant="bordered"
                  label="Phone"
                  type="text"
                  defaultValue={user?.phone || ""}
                  isClearable
                />

                <div className="flex gap-2">
                  <Button type="submit" className="bg-teagreen-600 text-white">
                    Submit
                  </Button>
                  <Button type="reset" variant="flat">
                    Reset
                  </Button>
                </div>
              </form>
            </ModalBody>
            {/* <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  resetForm();
                  onClose();
                }}
              >
                Close
              </Button>
              <Button
                type="submit"
                className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700"
                onPress={() => {
                  handleSubmit(onSubmit);
                  onClose();
                }}
              >
                Update Profile
              </Button>
            </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditProfile;
