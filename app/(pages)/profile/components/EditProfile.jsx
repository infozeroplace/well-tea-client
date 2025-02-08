import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

const EditProfile = ({ user, isOpen, onOpenChange }) => {
  const [formInputs, setFormInputs] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone
  })
  const handleSubmit = (e) => {
    // e.preventDefault();
    // Update user profile here
    console.log(formInputs);
    // setFormInputs({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    // });
    // onOpenChange(false);
  }
  // console.log(formInputs);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="!w-full md:!max-w-[700px] lg:!max-w-[850px] !my-auto"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b-2">
              Edit Profile
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-3 justify-between">
                <Input
                  radius="none"
                  className=""
                  variant="bordered"
                  label="First Name"
                  type="text"
                  value={formInputs.firstName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, firstName: e.target.value })
                  }
                />
                <Input
                  radius="none"
                  className=""
                  variant="bordered"
                  label="Last Name"
                  type="text"
                  value={formInputs.lastName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, lastName: e.target.value })
                  }
                />
              </div>
              <Input
                radius="none"
                className=""
                variant="bordered"
                label="Email"
                type="email"
                value={formInputs.email}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, email: e.target.value })
                }
              />
              <Input
                radius="none"
                className=""
                variant="bordered"
                label="Phone"
                type="text"
                value={formInputs.phone}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, phone: e.target.value })
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                className="bg-teagreen-600 hover:bg-teagreen-800 text-white"
                onPress={handleSubmit}
              >
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
