import React from "react";
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
                />
                <Input
                  radius="none"
                  className=""
                  variant="bordered"
                  label="Last Name"
                  type="text"
                />
              </div>
              <Input
                  radius="none"
                  className=""
                  variant="bordered"
                  label="Email"
                  type="email"
                />
                <Input
                  radius="none"
                  className=""
                  variant="bordered"
                  label="Phone"
                  type="text"
                />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700" onPress={onClose}>
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
