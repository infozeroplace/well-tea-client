"use client";

import { useAppSelector } from "@/services/hook";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { AddNewAddress, EditAddress, EditForm, EditProfile } from "../components";

function AddressScreen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editType, setEditType] = useState("");

  console.log("useDiscloser", useDisclosure());

  const {
    auth: { user },
  } = useAppSelector((state) => state);

  console.log("user", user);

  const handleEdit = (data) => {
    setEditType(data);
    onOpen();
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white p-6 section-gap">
        <p className="text-2xl content-gap">Personal Information</p>
        <div>
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

      {/* Update or Add form */}
      {/* <EditForm
        user={user}
        editType={editType}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      /> */}

      {/* Update Porfile form */}
      {editType === "profile" && (
        <EditProfile user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

      {/* Update Address form */}
      {editType === "address" && (
        <EditAddress user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}

       {/* Add New Address form */}
       {editType === "addAddress" && (
        <AddNewAddress user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </div>
  );
}

export default AddressScreen;
