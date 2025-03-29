import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { countries } from "@/data/countries";
import { useAddAddressMutation } from "@/services/features/address/addressApi";
import { getAuthErrorMessage } from "@/utils/getAuthErrorMessage";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddNewAddress = ({ user, isOpen, onOpenChange }) => {
  const [action, setAction] = useState();
  const [isDefault, setIsDefault] = useState(false);

  const [addAddress, { data: addressData, isLoading: addressLoading }] =
    useAddAddressMutation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
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
    if (addressData?.message) {
      toast.success(addressData?.message);
    }
  }, [addressData]);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setIsDefault(false);
    }
  }, [isOpen, reset]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
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
                  className="w-full"
                  validationBehavior="native"
                  onReset={() => setAction("reset")}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid grid-cols-2 gap-5 w-full">
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
                      isClearable
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
                      isClearable
                      errorMessage={getAuthErrorMessage(errors, "lastName")}
                      isInvalid={!!getAuthErrorMessage(errors, "lastName")}
                      label="Last Name"
                      labelPlacement="inside"
                      name="lastName"
                      type="text"
                    />

                    <Input
                      {...register("company", {
                        required: false,
                      })}
                      variant="bordered"
                      isClearable
                      label="Company"
                      labelPlacement="inside"
                      name="company"
                      type="text"
                      className="col-span-2"
                    />
                    <Input
                      {...register("address1", {
                        required: true,
                      })}
                      variant="bordered"
                      isRequired
                      isClearable
                      errorMessage={getAuthErrorMessage(errors, "address1")}
                      isInvalid={!!getAuthErrorMessage(errors, "address1")}
                      label="Address 1"
                      labelPlacement="inside"
                      name="address1"
                      type="text"
                      className="col-span-2"
                    />
                    <Input
                      {...register("address2", {
                        required: false,
                      })}
                      variant="bordered"
                      isClearable
                      errorMessage={getAuthErrorMessage(errors, "address2")}
                      isInvalid={!!getAuthErrorMessage(errors, "address2")}
                      label="Address 2"
                      labelPlacement="inside"
                      name="address2"
                      type="text"
                      className="col-span-2"
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
                      isClearable
                      errorMessage={getAuthErrorMessage(errors, "city")}
                      isInvalid={!!getAuthErrorMessage(errors, "city")}
                      label="City"
                      labelPlacement="inside"
                      name="city"
                      type="text"
                    />
                    <Autocomplete
                      {...register("country", {
                        required: true,
                      })}
                      isRequired
                      errorMessage={getAuthErrorMessage(errors, "country")}
                      isInvalid={!!getAuthErrorMessage(errors, "country")}
                      variant="bordered"
                      label="Country"
                      name="country"
                    >
                      {countries.map((country) => (
                        <AutocompleteItem key={country}>
                          {country}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                    <Input
                      {...register("postalCode", {
                        required: true,
                      })}
                      variant="bordered"
                      isRequired
                      isClearable
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
                      isClearable
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
                  </div>
                  <div className="flex gap-2 justify-end w-full pb-5">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                      className="bg-rose-100"
                    >
                      Close
                    </Button>
                    <Button type="reset" variant="flat">
                      Reset
                    </Button>
                    <Button
                      type="submit"
                      className="bg-teagreen-600 text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <LoadingOverlay isLoading={addressLoading} />
    </>
  );
};

export default AddNewAddress;
