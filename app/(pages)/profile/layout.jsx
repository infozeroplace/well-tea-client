"use client";

import { useAppSelector } from "@/services/hook";
import { CommonBanner } from "@/components";
import { ProfileSidebar } from "./components";

function layout({ children }) {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  return (
    <>
      <CommonBanner bannerTitle={`Hello ${user?.firstName}`} breadcrumb="Profile"/>
      <div className="px-5 sm:px-10 md:px-14 lg:px-20 xl:px-32 my-20">
        <div className="flex gap-20">
          <ProfileSidebar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default layout;
