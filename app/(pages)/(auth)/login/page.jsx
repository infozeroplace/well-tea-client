"use client";

import {
  LiaShippingFastSolid,
  LuClipboardPenLine,
  RiCustomerService2Line,
  RiSecurePaymentLine,
} from "@/icons";

import { SignIn, SignUp } from "@/components";
import { useState } from "react";

export default function SignInScreen() {
  const [showForm, setShowForm] = useState("sign-in");

  const [isAnimating, setIsAnimating] = useState(false);

  const handleShowForm = (form) => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowForm(form);
      setIsAnimating(false);
    }, 300);
  };
  // const handleShowForm = (text) => setShowForm(text);

  const isSignIn = showForm.includes("sign-in");

  return (
    <div>
      <div className="flex justify-center items-center bg-[#EEF2F2]">
        {/* Forms */}
        <div
          className={`flex flex-col ${
            showForm === "sign-in" && "flex-col-reverse"
          } max-w-[500px] w-full section-gap`}
        >
          <div
            className={`w-full transition-opacity duration-300 ${
              isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <SignIn showForm={showForm} handleShowForm={handleShowForm} />
          </div>

          <div
            className={`w-full transition-opacity duration-300 ${
              isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <SignUp showForm={showForm} handleShowForm={handleShowForm} />
          </div>
        </div>
      </div>

      {/* Services Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
        <div className="text-center md:border-r border-gray-200 p-6">
          <div className="mb-5 flex text-4xl font-thin hover:text-teagreen-600 justify-center">
            <LiaShippingFastSolid />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            free shipping
          </div>
          <div className="tracking-tight">On all orders over $100</div>
        </div>
        <div className="text-center lg:border-r border-gray-200 p-6">
          <div className="mb-5 flex text-4xl font-thin hover:text-teagreen-600 justify-center">
            <RiSecurePaymentLine />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Secure Payments
          </div>
          <div className="tracking-tight">Secure payments methods</div>
        </div>
        <div className="text-center md:border-r border-gray-200 p-6">
          <div className="mb-5 flex text-4xl font-thin hover:text-teagreen-600 justify-center">
            <RiCustomerService2Line />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Customer Service
          </div>
          <div className="tracking-tight">Quick responses and solution</div>
        </div>
        <div className="text-center p-6">
          <div className="mb-5 flex text-4xl font-thin hover:text-teagreen-500 justify-center">
            <LuClipboardPenLine />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Othanthik Tea
          </div>
          <div className="tracking-tight">Shop for items with confidence</div>
        </div>
      </div>
    </div>
  );
}
