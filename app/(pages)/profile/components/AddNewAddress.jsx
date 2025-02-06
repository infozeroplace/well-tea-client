import React from "react";
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

export const countries = [
  { key: "au", label: "Australia" },
  { key: "bd", label: "Bangladesh" },
  { key: "br", label: "Brazil" },
  { key: "ca", label: "Canada" },
  { key: "cn", label: "China" },
  { key: "fr", label: "France" },
  { key: "de", label: "Germany" },
  { key: "in", label: "India" },
  { key: "jp", label: "Japan" },
  { key: "mx", label: "Mexico" },
  { key: "ru", label: "Russia" },
  { key: "za", label: "South Africa" },
  { key: "gb", label: "United Kingdom" },
  { key: "us", label: "United States" },
];

const AddNewAddress = ({ user, isOpen, onOpenChange }) => {
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
              Add New Address
            </ModalHeader>
            <ModalBody>
              <Input
                radius="none"
                className=""
                variant="bordered"
                label="Company"
                type="text"
              />
              <Input
                radius="none"
                className=""
                variant="bordered"
                label="Address 1"
                type="text"
              />
              <Input
                radius="none"
                className=""
                variant="bordered"
                label="Address 2"
                type="text"
              />
              <Select
                isRequired
                radius="none"
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
                radius="none"
                className=""
                variant="bordered"
                label="City"
                type="text"
              />

              <Input
                radius="none"
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
              <Button className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700" onPress={onClose}>
                Add Address
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddNewAddress;
