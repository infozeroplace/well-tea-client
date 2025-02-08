import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@heroui/react";

import { countries } from "./countriesData";

const EditAddress = ({ user, isOpen, onOpenChange }) => {
  const [addressData, setAddressData] = useState({
    address1: "",
    address2: "",
  });

  const handleInput = (field, value) =>
    setAddressData((prev) => ({ ...prev, [field]: value }));
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="!w-full md:!max-w-[700px] lg:!max-w-[850px] !mb-auto !mt-20"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b-2 mb-4">
              Edit Address
            </ModalHeader>
            <ModalBody className="gap-6">
              <Input
                className=""
                variant="bordered"
                label="Company"
                type="text"
              />
              <Input
                className=""
                variant="bordered"
                label="Address 1"
                type="text"
                isRequired
                onChange={(e) => {
                  handleInput("address1", e.target.value);
                }}
              />
              <Input
                className=""
                variant="bordered"
                label="Address 2"
                type="text"
              />
              <Select
                isRequired
                className=""
                variant="bordered"
                defaultSelectedKeys={["gb"]}
                label="Choose Country"
                placeholder="Select an country"
              >
                {countries.map((country) => (
                  <SelectItem key={country.key}>{country.label}</SelectItem>
                ))}
              </Select>

              <Input
                className=""
                variant="bordered"
                label="City"
                type="text"
                isRequired
              />

              <Input
                className=""
                variant="bordered"
                label="Postal Code"
                type="text"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700"
                onPress={onClose}
              >
                Edit Address
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditAddress;
