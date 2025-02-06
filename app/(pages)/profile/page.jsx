"use client";

import { useAppSelector } from "@/services/hook";
import { CommonBanner } from "@/components";
import { GoArrowRight } from "react-icons/go";

const ProfileScreen = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  console.log("user", user);

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white p-6 section-gap">
        <p className="text-2xl content-gap">Personal Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-3">{user?.firstName} {user?.lastName}</p>
            <p className="mb-3">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p className="content-gap">
              <span className="font-semibold">Phone:</span> {user?.phone}
            </p>
          </div>
          <div>
            <p className="mb-2 font-medium">Address</p>
            <p className="">{user?.firstName} {user?.lastName}</p>
            <p className="">{user?.address || "Location"}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <p className="content-gap">You’re currently a</p>
        <p className="text-2xl content-gap">VIP Member - 2,186 Points</p>
        <button className="bg-teagreen-700 hover:bg-teagreen-600 text-white px-5 py-4 flex items-center gap-3 text-lg">
          Redeem Rewards <span className="text-xl"><GoArrowRight /></span>
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
