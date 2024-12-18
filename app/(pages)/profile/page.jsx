"use client";

import { useAppSelector } from "@/services/hook";

const ProfileScreen = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <br /> Hello {user?.firstName}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProfileScreen;
