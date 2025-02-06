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
    // <div className="">
    //   {/* <CommonBanner bannerTitle={`Hello ${user?.firstName}`} breadcrumb="Profile"/> */}
    //   <div className="container px-20 py-20">
    //     <h1>Personal Information</h1>
    //     <div className="grid grid-cols-2">
    //     <div>Personal Profile</div>
    //     <div>Personal Address</div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="content-gap">{user?.firstName} {user?.lastName}</p>
            <p className="content-gap">
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
        <button className="bg-black text-white px-4 py-2 flex items-center gap-3 text-lg">
          Redeem Rewards <span className="text-xl"><GoArrowRight /></span>
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
