"use client";

import { useAppSelector } from "@/services/hook";
import { GoArrowRight } from "react-icons/go";

const ProfileScreen = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  return (
    <div className="w-full p-4">
      <div className=" bg-teagreen-100 p-6 section-gap rounded-lg">
        <p className="text-2xl content-gap">Personal Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-3">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user?.phone}
            </p>
          </div>
          <div>
            <p className="mb-2 font-medium">Address</p>
            <p className="">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="">{user?.address || "Location"}</p>
          </div>
        </div>
      </div>
      <div className="bg-teagreen-100 p-6 rounded-lg">
        <p className="content-gap">You’re currently a</p>
        <p className="text-2xl content-gap">VIP Member - 2,186 Points</p>
        <button className="bg-teagreen-700 hover:bg-teagreen-600 text-white px-5 py-4 flex items-center gap-3 text-lg">
          Redeem Rewards{" "}
          <span className="text-xl">
            <GoArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
