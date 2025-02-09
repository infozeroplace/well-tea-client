"use client";

import { useGetAddressQuery } from "@/services/features/address/addressApi";
import { useAppSelector } from "@/services/hook";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { AddNewAddress, EditAddress, EditPassword, EditProfile } from "../components";
import { GoKey } from "react-icons/go";

function AddressScreen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editType, setEditType] = useState("");

  const {
    auth: { user, token },
  } = useAppSelector((state) => state);

  const {
    data: { data } = {},
    isLoading,
    error,
  } = useGetAddressQuery({}, { skip: !token });

  const handleEdit = (data) => {
    setEditType(data);
    onOpen();
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
          <span className="pt-1 text-sm"><GoKey /></span> Change Password
        </div>
      </div>
      <div className="flex justify-between gap-4 bg-gray-100 p-6">
        <div>
          <p className="text-2xl content-gap">Your Address</p>
          <p className="">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="content-gap">{user?.address || "Location"}</p>
          <div className="flex gap-8">
            <div
              onClick={() => {
                handleEdit("address");
              }}
              className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
            >
              Edit
            </div>
            <div className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600">
              Delete
            </div>
          </div>
        </div>
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

      {/* Porfile Update form */}
      {editType === "profile" && (
        <EditProfile user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

      {/* Password Update Form */}
      {editType === "password" && (
        <EditPassword user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

      {/* Address Update form */}
      {editType === "address" && (
        <EditAddress user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
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
