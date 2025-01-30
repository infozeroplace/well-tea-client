"use client";

import { useAppSelector } from "@/services/hook";
import { CommonBanner } from "@/components";

const ProfileScreen = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  return (
    <div className="">
      <CommonBanner bannerTitle={`Hello ${user?.firstName}`} breadcrumb="Profile"/>
      <div className="container px-20 py-20">
        <h1>Profile Screen</h1>
      </div>
    </div>
  );
};

export default ProfileScreen;
