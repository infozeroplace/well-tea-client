"use client";

import {
  useDeleteAddressMutation,
  useGetAddressQuery,
} from "@/services/features/address/addressApi";
import { useAppSelector } from "@/services/hook";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { GoKey } from "react-icons/go";
import {
  AddNewAddress,
  EditAddress,
  EditPassword,
  EditProfile,
} from "../components";

function AddressScreen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editType, setEditType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState({});

  const {
    auth: { user, token },
  } = useAppSelector((state) => state);

  const {
    data: { data } = {},
    isLoading,
    error,
  } = useGetAddressQuery({}, { skip: !token });

  const [deleteAddress, { isLoading: deleteLoading }] =
    useDeleteAddressMutation();

  const handleEdit = (data, addressData) => {
    setEditType(data);
    onOpen();
    setSelectedAddress(addressData);
  };

  const handleDeleteAddress = async (id) => {
    await deleteAddress(id);
  };

  // console.log(data);

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white p-6 section-gap">
        <p className="text-2xl content-gap">Personal Information</p>
        <div className="content-gap">
          <p className="mb-3">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p className="content-gap">
            <span className="font-semibold">Phone:</span> {user?.phone}
          </p>

          <div
            onClick={() => {
              handleEdit("profile");
            }}
            className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
          >
            Edit
          </div>
        </div>

        {/* Password Section */}
        <div
          onClick={() => {
            handleEdit("password");
          }}
          className="capitalize flex gap-2 border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
        >
          <span className="pt-1 text-sm">
            <GoKey />
          </span>{" "}
          Change Password
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="flex justify-between gap-4">
          <p className="text-2xl content-gap">Your Address</p>
          <div
            onClick={() => {
              handleEdit("addAddress");
            }}
            className="flex gap-2 cursor-pointer hover:text-teagreen-600"
          >
            <div className="flex items-center justify-center pb-[1px] w-7 h-7 text-[2.5rem] font-thin bg-white text-gray-800 rounded-full">
              +
            </div>
            <div className="relative text-gray-800">
              <span className="block hover:text-teagreen-600">
                Add New Address
              </span>
              <span className="block w-full h-[1.5px] bg-teagreen-500 mt-[-2px]"></span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {data?.map((item, index) => (
            <div key={index} className="space-y-2">
              <p className="">
                {item?.firstName} {item?.lastName}
              </p>
              <p className="">{item?.company}</p>
              <p className="">{item?.address1}</p>
              <p className="">{item?.address2}</p>
              <p className="">{item?.city}</p>
              <p className="">{item?.country}</p>
              <p className="">{item?.postalCode}</p>
              <p className="">{item?.phone}</p>
              <div className="flex gap-8">
                <div
                  onClick={() => {
                    handleEdit("address", item);
                  }}
                  className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
                >
                  Edit
                </div>
                <div
                  onClick={() => handleDeleteAddress(item._id)}
                  className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
                >
                  Delete
                  {/* {deleteLoading && <Spinner />} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Porfile Update form */}
      {editType === "profile" && (
        <EditProfile user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

      {/* Password Update Form */}
      {editType === "password" && (
        <EditPassword user={user} token={token} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

      {/* Address Update form */}
      {editType === "address" && (
        <EditAddress
          currentAddressData={selectedAddress}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}

      {/* New Address Add form */}
      {editType === "addAddress" && (
        <AddNewAddress
          user={user}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </div>
  );
}

export default AddressScreen;
