"use client";

import { AddNewAddress } from "@/app/(pages)/profile/components";
import { useDisclosure } from "@heroui/react";
import { FiPlus } from "react-icons/fi";

const AddressSelection = ({
  user,
  methods = [],
  addresses = [],
  selectedMethod,
  shippingAddress,
  handleMethodChange,
  handleShippingAddressChange,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Shipping Method Selection */}
      <div className="flex flex-col gap-2 border-b pb-4">
        <span>Shipping Method</span>
        <div className="flex flex-col gap-2">
          {methods?.map((method) => (
            <label
              key={method._id}
              className={`flex items-center gap-2 cursor-pointer p-3 border rounded-md text-brand__font__size__sm ${
                selectedMethod?._id === method._id
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="shippingMethod"
                value={method._id}
                checked={selectedMethod?._id === method._id}
                onChange={handleMethodChange}
                className="cursor-pointer"
              />
              <span>
                {method.title} - £{method.cost.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2">Shipping Address</h2>
        {addresses?.length > 0 ? (
          <div className="flex flex-col gap-2">
            {addresses.map((address) => (
              <label
                key={address._id}
                className={`p-3 rounded cursor-pointer flex items-center gap-2 transition ${
                  shippingAddress?._id === address._id
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  checked={shippingAddress?._id === address._id}
                  onChange={() => handleShippingAddressChange(address._id)}
                  className="cursor-pointer"
                />
                <div>
                  <span className="font-brand__font__regular text-brand__font__size__base">
                    {address.firstName} {address.lastName}, {address.address1}
                  </span>
                  <span className="text-brand__font__size__sm block text-gray-500">
                    {address.city}, {address.postalCode}, {address.country}
                  </span>
                </div>
              </label>
            ))}
          </div>
        ) : (
          <p
            onClick={onOpen}
            className="flex items-center gap-1 text-blue-600 font-brand__font__500 text-brand__font__size__sm cursor-pointer w-fit"
          >
            <FiPlus size={20} /> <span>Add a shipping address</span>
          </p>
        )}
      </div>

      <AddNewAddress user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default AddressSelection;
