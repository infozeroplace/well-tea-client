import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@heroui/react";
import { countries } from "@/data/countries";
import { useEditAddressMutation } from "@/services/features/address/addressApi";

const EditAddress = ({ currentAddressData, isOpen, onOpenChange }) => {
  const [action, setAction] = useState();
  const [addressData, setAddressData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    isDefault: false,
  });
  const [editAddress, { isLoading }] = useEditAddressMutation();

  // console.log(currentAddressData);

  // Populate addressData when user data is available or modal opens
  useEffect(() => {
    if (currentAddressData) {
      setAddressData({
        id: currentAddressData._id || "",
        firstName: currentAddressData.firstName || "",
        lastName: currentAddressData.lastName || "",
        company: currentAddressData.company || "",
        address1: currentAddressData.address1 || "",
        address2: currentAddressData.address2 || "",
        city: currentAddressData.city || "",
        country: currentAddressData.country || "",
        postalCode: currentAddressData.postalCode || "",
        phone: currentAddressData.phone || "",
        isDefault: currentAddressData.isDefault || false,
      });
    }
  }, [currentAddressData, isOpen]);

  // Handle input change
  const handleInput = (field, value) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle checkbox toggle
  const handleChecked = (e) => {
    setAddressData({ ...addressData, isDefault: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editAddress({data: addressData});
    onOpenChange(false);
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
            <ModalHeader className="flex flex-col gap-1 border-b-2 mb-4">
              Edit Address
            </ModalHeader>
            <ModalBody className="gap-6">
              <Form
                className="w-full flex gap-6"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
                  <Input
                    variant="bordered"
                    isRequired
                    errorMessage="Please enter your first name"
                    label="First Name"
                    labelPlacement="inside"
                    name="firstName"
                    type="text"
                    value={addressData.firstName}
                    onChange={(e) => handleInput("firstName", e.target.value)}
                  />
                  <Input
                    variant="bordered"
                    errorMessage="Please enter your last name"
                    label="Last Name"
                    labelPlacement="inside"
                    name="lastName"
                    type="text"
                    value={addressData.lastName}
                    onChange={(e) => handleInput("lastName", e.target.value)}
                  />
                </div>

                <Input
                  variant="bordered"
                  label="Company"
                  labelPlacement="inside"
                  name="company"
                  type="text"
                  value={addressData.company}
                  onChange={(e) => handleInput("company", e.target.value)}
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your address"
                  label="Address 1"
                  labelPlacement="inside"
                  name="address1"
                  type="text"
                  value={addressData.address1}
                  onChange={(e) => handleInput("address1", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="Address 2"
                  labelPlacement="inside"
                  name="address2"
                  type="text"
                  value={addressData.address2}
                  onChange={(e) => handleInput("address2", e.target.value)}
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your city"
                  label="City"
                  labelPlacement="inside"
                  name="city"
                  type="text"
                  value={addressData.city}
                  onChange={(e) => handleInput("city", e.target.value)}
                />

                <Select
                  variant="bordered"
                  isRequired
                  errorMessage="Please select your country"
                  label="Country"
                  name="country"
                  selectedKeys={[addressData.country]}
                  onSelectionChange={(keys) =>
                    handleInput("country", [...keys][0])
                  }
                >
                  {countries.map((country) => (
                    <SelectItem key={country} name="country">
                      {country}
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your postal code"
                  label="Postal Code"
                  labelPlacement="inside"
                  name="postalCode"
                  type="text"
                  value={addressData.postalCode}
                  onChange={(e) => handleInput("postalCode", e.target.value)}
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your phone number"
                  label="Phone"
                  labelPlacement="inside"
                  name="phone"
                  type="text"
                  value={addressData.phone}
                  onChange={(e) => handleInput("phone", e.target.value)}
                />

                <Checkbox
                  isSelected={addressData.isDefault}
                  onChange={handleChecked}
                  className="custom-checkbox"
                >
                  <span className="text-sm font-extralight">
                    Set as default address
                  </span>
                </Checkbox>

                <div className="flex gap-2">
                  <Button type="submit" className="bg-teagreen-600 text-white">
                    Submit
                  </Button>
                  <Button type="reset" variant="flat">
                    Reset
                  </Button>
                </div>

                {action && (
                  <div className="text-small text-default-500">
                    Action: <code>{action}</code>
                  </div>
                )}
              </Form>
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
