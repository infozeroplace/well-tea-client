"use client";

import LoadingOverlay from "@/components/shared/LoadingOverlay";
import {
  useDeleteAddressMutation,
  useGetAddressQuery,
} from "@/services/features/address/addressApi";
import { useEditProfileMutation } from "@/services/features/profile/profileApi";
import { useAppSelector } from "@/services/hook";
import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FiPlusCircle } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import {
  AddNewAddress,
  ConfirmDelete,
  EditAddress,
  EditPassword,
  EditProfile,
} from "../components";

function AddressScreen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editType, setEditType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState({});
  const [addressId, setAddressId] = useState("");

  const [
    editProfile,
    { data: editProfileData, isLoading: editProfileLoading },
  ] = useEditProfileMutation();

  const {
    auth: { user, token },
  } = useAppSelector((state) => state);

  // console.log(user);

  const {
    data: { data: allAddressData } = {},
    isLoading: addressLoading,
    error,
  } = useGetAddressQuery({}, { skip: !token });

  const [deleteAddress, { isLoading: deleteLoading }] =
    useDeleteAddressMutation();

  const handleEdit = (type, addressData) => {
    if (type === "addAddress" && allAddressData.length >= 5) {
      return toast.error("You can only add up to 5 addresses");
    }
    setEditType(type);
    setSelectedAddress(addressData);
    onOpen();
  };

  const handleDelete = (type, id) => {
    setEditType(type);
    setAddressId(id);
    onOpen();
  };

  useEffect(() => {
    if (editProfileData?.message) {
      toast.success(editProfileData?.message);
    }
  }, [editProfileData]);

  return (
    <div className="w-full p-4 flex flex-col gap-5">
      <div className="p-6 bg-teagreen-100 rounded">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-brand__font__size__lg mb-1">
              Personal Information
            </p>
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p>
              <span className="font-brand__font__regular">Email:</span>{" "}
              {user?.email}
            </p>
            <p className="content-gap">
              {user?.phone && (
                <>
                  <span className="font-brand__font__regular">Phone:</span>{" "}
                  {user?.phone}
                </>
              )}
            </p>
          </div>

          <button
            onClick={() => {
              handleEdit("profile");
            }}
            className="border-b-2 border-teagreen-500 px-[1px] w-fit h-fit cursor-pointer hover:text-teagreen-600 font-brand__font__regular"
          >
            Edit profile
          </button>
        </div>

        {/* Password Section */}
        <div
          onClick={() => {
            handleEdit("password");
          }}
          className="flex gap-2 border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600 font-brand__font__regular"
        >
          <span className="pt-1 text-sm">
            <GoKey />
          </span>{" "}
          Change password
        </div>
      </div>

      <div className="p-6 bg-teagreen-200 rounded">
        <div className="flex items-start justify-between gap-4 border">
          <p className="text-brand__font__size__lg mb-1 content-gap">Your Address</p>
          <div
            onClick={() => {
              handleEdit("addAddress");
            }}
            className="cursor-pointer hover:text-teagreen-600 group"
          >
            <div className="text-gray-800 h-fit border-b-2 border-teagreen-500 flex gap-1 items-center">
              <FiPlusCircle className="text-gray-800 group-hover:text-teagreen-600" />
              <span className="hover:text-teagreen-600">Add new address</span>
            </div>
          </div>
        </div>
        <div>
          {allAddressData
            ?.slice()
            .sort((a, b) => (b.isDefault ? 1 : 0) - (a.isDefault ? 1 : 0))
            .map((item, index) => (
              <div
                key={index}
                className="space-y-2 py-5 flex items-start justify-between border-b"
              >
                <div className="space-y-2">
                  <p className="">
                    {item?.firstName} {item?.lastName}
                    {item?.isDefault && (
                      <span className="bg-teagreen-400 rounded-xl px-3 ml-3 text-sm">
                        Default
                      </span>
                    )}
                  </p>
                  <p className="">{item?.company}</p>
                  <p className="">{item?.address1}</p>
                  <p className="">{item?.address2}</p>
                  <p className="">{item?.city}</p>
                  <p className="">{item?.country}</p>
                  <p className="">{item?.postalCode}</p>
                  <p className="">{item?.phone}</p>
                </div>
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
                    onClick={() => handleDelete("delete", item._id)}
                    className=" border-b-2 border-teagreen-500 px-[1px] w-fit cursor-pointer hover:text-teagreen-600"
                  >
                    Delete
                    {/* {deleteLoading && <Spinner />} */}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex text-teagreen-600 text-brand__font__size__sm">
          <span>At most 5 addresses can be added!</span>
        </div>
      </div>

      {/* Porfile Update form */}
      {editType === "profile" && (
        <EditProfile
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          editProfile={editProfile}
          editProfileData={editProfileData}
          auth={{ user, token }}
        />
      )}

      {/* Password Update Form */}
      {editType === "password" && (
        <EditPassword
          user={user}
          token={token}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}

      {/* Address Update form */}
      {editType === "address" && (
        <EditAddress
          currentAddressData={selectedAddress}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
      {editType === "delete" && (
        <ConfirmDelete
          addressId={addressId}
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
      <LoadingOverlay isLoading={editProfileLoading || deleteLoading} />
    </div>
  );
}

export default AddressScreen;
