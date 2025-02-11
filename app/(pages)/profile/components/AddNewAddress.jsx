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
import { useForm } from "react-hook-form";
import { countries } from "@/data/countries";
import { FaSquare } from "react-icons/fa";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";

const AddNewAddress = ({ user, isOpen, onOpenChange }) => {
  const [action, setAction] = useState();
  // const [addressData, setAddressData] = useState({
  //   isDefault: false,
  // });
  const [isDefault, setIsDefault] = useState(false);

  // Checkbox toggle
  // const handleChecked = (e) => {
  //   // console.log(e.target.checked);
  //   setAddressData({ ...addressData, isDefault: e.target.checked });
  // };

  //  // Updating form data state
  // const handleInput = (field, value) =>
  //   setAddressData((prev) => ({ ...prev, [field]: value }));
 
  const [addAddress, { data, isLoading, isError, isSuccess, error }] =
    useAddAddressMutation();
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
    },
  });

  const onSubmit = async (formData) => {
    formData.isDefault = isDefault;
    await addAddress({
      data: formData,
    });

    onOpenChange(false);
    reset();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
      setIsDefault(false);
    }
  }, [isOpen, reset]);


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
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
                  <Input
                    {...register("firstName", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Please enter only letters",
                      },
                    })}
                    variant="bordered"
                    isRequired
                    errorMessage={getAuthErrorMessage(errors, "firstName")}
                    isInvalid={!!getAuthErrorMessage(errors, "firstName")}
                    label="First Name"
                    labelPlacement="inside"
                    name="firstName"
                    type="text"
                  />
                  <Input
                    {...register("lastName", {
                      required: false,
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Please enter only letters",
                      },
                    })}
                    variant="bordered"
                    errorMessage={getAuthErrorMessage(errors, "lastName")}
                    isInvalid={!!getAuthErrorMessage(errors, "lastName")}
                    label="Last Name"
                    labelPlacement="inside"
                    name="lastName"
                    type="text"
                  />
                </div>

                <Input
                  {...register("company", {
                    required: false,
                  })}
                  variant="bordered"
                  // isRequired
                  // errorMessage="Please enter your company"
                  label="Company"
                  labelPlacement="inside"
                  name="company"
                  type="text"
                />
                <Input
                  {...register("address1", {
                    required: true,
                  })}
                  variant="bordered"
                  isRequired
                  errorMessage={getAuthErrorMessage(errors, "address1")}
                  isInvalid={!!getAuthErrorMessage(errors, "address1")}
                  label="Address 1"
                  labelPlacement="inside"
                  name="address1"
                  type="text"
                />
                <Input
                  {...register("address2", {
                    required: false,
                  })}
                  variant="bordered"
                  // isRequired
                  errorMessage={getAuthErrorMessage(errors, "address2")}
                  isInvalid={!!getAuthErrorMessage(errors, "address2")}
                  label="Address 2"
                  labelPlacement="inside"
                  name="address2"
                  type="text"
                />
                <Input
                  {...register("city", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Please enter only letters",
                    },
                  })}
                  variant="bordered"
                  isRequired
                  errorMessage={getAuthErrorMessage(errors, "city")}
                  isInvalid={!!getAuthErrorMessage(errors, "city")}
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
                  {...register("country", {
                    required: true,
                  })}
                  variant="bordered"
                  isRequired
                  errorMessage={getAuthErrorMessage(errors, "country")}
                  isInvalid={!!getAuthErrorMessage(errors, "country")}
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
                  {...register("postalCode", {
                    required: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter only numbers",
                    },
                  })}
                  variant="bordered"
                  isRequired
                  errorMessage={getAuthErrorMessage(errors, "postalCode")}
                  isInvalid={!!getAuthErrorMessage(errors, "postalCode")}
                  label="Postal Code"
                  labelPlacement="inside"
                  name="postalCode"
                  type="text"
                />
                <Input
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^[-+()0-9\s]+$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  variant="bordered"
                  isRequired
                  errorMessage={getAuthErrorMessage(errors, "phone")}
                  isInvalid={!!getAuthErrorMessage(errors, "phone")}
                  label="Phone"
                  labelPlacement="inside"
                  name="phone"
                  type="text"
                />

                {/* <Checkbox isSelected={isSelected} onValueChange={setIsSelected}> */}
                <Checkbox
                  // isSelected={addressData?.isDefault}
                  isSelected={isDefault}
                  name="isDefault"
                  onChange={() => setIsDefault(!isDefault)}
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
