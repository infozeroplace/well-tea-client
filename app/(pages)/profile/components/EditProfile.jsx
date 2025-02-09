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

const EditProfile = ({ user, isOpen, onOpenChange }) => {
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phone || "",
  });

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
    await console.log(e);
  };

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
                // onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mb-3"
              >
                <div className="flex flex-col md:flex-row gap-8 mb-5 justify-between">
                  <Input
                    {...register("firstName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]$/,
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
                        value: /^[a-zA-Z]$/,
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
              </form>
            </ModalBody>
            <ModalFooter>
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
                  // resetForm();
                  onClose();
                }}
              >
                {/* {isLoading ? <Spinner /> : <span>Update Profile</span>} */}
                Update Profile
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditProfile;
