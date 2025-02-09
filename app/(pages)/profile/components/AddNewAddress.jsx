import { useEffect, useState } from "react";
import axios from "@/api/axios";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Form,
  Select,
  SelectItem,
  Checkbox,
} from "@heroui/react";
import { useAddAddressMutation } from "@/services/features/address/addressApi";
import { countries } from "@/data/countries";
import { FaSquare } from "react-icons/fa";


const AddNewAddress = ({ user, isOpen, onOpenChange }) => {
  const [action, setAction] = useState();
  const [addressData, setAddressData] = useState({
    isSelected: false,
  });

  // Checkbox toggle
  const handleChecked = (e) => {
    setAddressData({ ...addressData, isSelected: e.target.checked });
  };

   // Updating form data state
  const handleInput = (field, value) =>
    setAddressData((prev) => ({ ...prev, [field]: value }));
 
  const [addAddress, { data, isLoading, isError, isSuccess, error }] =
    useAddAddressMutation();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));

    // setAction(`submit ${JSON.stringify(data)}`);
    console.log(data);
    setAddressData(data);
    await addAddress({
      data,
    });
  };
  // useEffect(() => {
  //   console.log(data);
  //   console.log(error);
  // }, [data, error])
  // console.log("isSelected", isSelected);

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
              Add New Address
            </ModalHeader>
            <ModalBody>
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
                  />
                  <Input
                    variant="bordered"
                    errorMessage="Please enter a your last name"
                    label="Last Name"
                    labelPlacement="inside"
                    name="lastName"                    type="text"
                  />
                </div>

                <Input
                  variant="bordered"
                  // isRequired
                  // errorMessage="Please enter your company"
                  label="Company"
                  labelPlacement="inside"
                  name="company"
                  type="text"
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your address"
                  label="Address 1"
                  labelPlacement="inside"
                  name="address1"
                  type="text"
                />
                <Input
                  variant="bordered"
                  label="Address 2"
                  labelPlacement="inside"
                  name="address2"
                  type="text"
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your city"
                  label="City"
                  labelPlacement="inside"
                  name="city"
                  type="text"
                />
                {/* <Input
                variant="bordered"
                  isRequired
                  errorMessage="Please enter your country"
                  label="Country"
                  labelPlacement="inside"
                  name="country"
                  placeholder="Country"
                  type="text"
                /> */}
                <Select
                  variant="bordered"
                  isRequired
                  errorMessage="Please select your country"
                  label="Country"
                  name="country"
                  // selectionMode="multiple"
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
                />
                <Input
                  variant="bordered"
                  isRequired
                  errorMessage="Please enter your phone number"
                  label="Phone"
                  labelPlacement="inside"
                  name="phone"
                  type="text"
                />

                {/* <Checkbox isSelected={isSelected} onValueChange={setIsSelected}> */}
                <Checkbox
                  isSelected={addressData?.isSelected}
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
