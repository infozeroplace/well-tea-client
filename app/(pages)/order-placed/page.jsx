"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/services/hook";
import { SectionLinkButton } from "@/components";
import { CiCircleCheck } from "react-icons/ci";

export default function OrderPlacedPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId") || "123456";

  const { auth: { user } } = useAppSelector((state) => state);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center space-y-5">
        <CiCircleCheck
          size={60}
          className="mx-auto text-teagreen-500 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-teagreen-600">
          Thank you for your order!
        </h1>
        <p className="mt-2">
          Your order has been placed successfully,{" "}
          <span className="text-teagreen-600 font-semibold">{user?.firstName}</span>!
        </p>

        {/* <div className="bg-gray-50 p-4 mt-4 rounded-md border">
          <p className="text-gray-600">Order ID:</p>
          <p className="text-lg font-semibold text-teagreen-600">{orderId}</p>
        </div> */}
        <p>Your order details has been sent to you email!</p>

        <SectionLinkButton
          title="Back to Home"
          url="/"
          buttonClass="!w-full mt-6"
        />
      </div>
    </div>
  );
}
