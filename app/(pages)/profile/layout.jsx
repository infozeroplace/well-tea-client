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
      <div className="container-narrow my-20">
        <div className="flex gap-10">
          <ProfileSidebar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default layout;
