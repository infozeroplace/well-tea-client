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
  Form
} from "@heroui/react";
import { useAddAddressMutation } from "@/services/features/address/addressApi";
import { countries } from "@/data/countries";

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
  const [ action, setAction ] = useState();
  const [ formData, setFormData ] = useState({})
  const [ addAddress, {data, isLoading, isError, isSuccess, error} ] = useAddAddressMutation();
  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));

    // setAction(`submit ${JSON.stringify(data)}`);
    // console.log(data);
    setFormData(data);
    await addAddress({
      data
    })
  };
  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data, error])

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b-2 mb-4">
              Add New Address
            </ModalHeader>
            <ModalBody>
              <Form
                className="w-full max-w-xs flex flex-col gap-4"
                validationBehavior="aria"
                onReset={() => setAction("reset")}
                onSubmit={handleSubmit}
              >
                <Input
                  isRequired
                  errorMessage="Please enter your first name"
                  radius="none"
                  className=""
                  variant="bordered"
                  label="First Name"
                  labelPlacement="inside"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                />

                <Input
                  isRequired
                  errorMessage="Please enter a your last name"
                  label="Last Name"
                  labelPlacement="inside"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                />
                <Input
                  // isRequired
                  // errorMessage="Please enter your company"
                  label="Company"
                  labelPlacement="inside"
                  name="company"
                  placeholder="Company"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter your address"
                  label="Address 1"
                  labelPlacement="inside"
                  name="address1"
                  placeholder="Address 1"
                  type="text"
                />
                <Input
                  label="Address 2"
                  labelPlacement="inside"
                  name="address2"
                  placeholder="Address 2"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter your city"
                  label="City"
                  labelPlacement="inside"
                  name="city"
                  placeholder="City"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter your country"
                  label="Country"
                  labelPlacement="inside"
                  name="country"
                  placeholder="Country"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter your postal code"
                  label="Postal Code"
                  labelPlacement="inside"
                  name="postalCode"
                  placeholder="Postal Code"
                  type="text"
                />
                <Input
                  isRequired
                  errorMessage="Please enter your phone number"
                  label="Phone"
                  labelPlacement="inside"
                  name="phone"
                  placeholder="Phone"
                  type="text"
                />
                <div className="flex gap-2">
                  <Button color="danger" type="submit">
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
