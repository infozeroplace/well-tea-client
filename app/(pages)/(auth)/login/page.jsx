"use client";

import { LiaShippingFastSolid } from "react-icons/lia";
import { LuClipboardPenLine } from "react-icons/lu";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

import { SignIn, SignUp } from "@/components";
// import SignIn from "@/components/auth/SignIn";
// import SignUp from "@/components/auth/SignUp";
import Image from "next/image";
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
      <div className="flex justify-center items-center ">
        {/* <div className="w-[45%] aspect-[667/1000] relative transition-opacity duration-300">
          <div
            className={`absolute inset-0 z-[1] text-white mt-10 px-20 transition-opacity duration-300 ${
              isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <div className="text-center text-3xl mb-4">Welcome!</div>
            {isSignIn && (
              <p className="mb-10">
                Log in to your personal account to access your WellTea visit history, discover your favorite teas, and make your next purchase effortlessly!
              </p>
            )}
            {!isSignIn && (
              <p className="mb-10">
                Create your personal account today to connect with us and explore our collection of premium teas. Sign up now and enjoy a delightful journey into the world of exquisite flavors!
              </p>
            )}
            {!isSignIn && (
              <button
                onClick={() => handleShowForm("sign-in")}
                className={`border-2 border-teagreen-600 hover:bg-teagreen-600 px-4 py-3 rounded-full duration-300`}
              >
                Login to your account
              </button>
            )}
            {isSignIn && (
              <button
                onClick={() => handleShowForm("sign-up")}
                className={`border-2 border-teagreen-600 hover:bg-teagreen-600 px-4 py-3 rounded-full duration-300`}
              >
                Sign Up for a new account
              </button>
            )}
          </div>
          <Image
            src="/images/loginform-bg.jpg"
            alt="login"
            fill
            className={`w-full transition-opacity duration-300 ${
              isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          />
        </div> */}

        {/* Form */}
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
          <div className="mb-5 flex text-5xl hover:text-teagreen-600 justify-center">
            <LiaShippingFastSolid />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            free standard delevery
          </div>
          <div className="tracking-tight">On all orders over $100</div>
        </div>
        <div className="text-center lg:border-r border-gray-200 p-6">
          <div className="mb-5 flex text-5xl hover:text-teagreen-600 justify-center">
          <LuClipboardPenLine />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Handmaid guarantee
          </div>
          <div className="tracking-tight">Shop for items with confidence</div>
        </div>
        <div className="text-center md:border-r border-gray-200 p-6">
          <div className="mb-5 flex text-5xl hover:text-teagreen-600 justify-center">
          <RiSecurePaymentLine />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            secure payments
          </div>
          <div className="tracking-tight">Secure payments methods</div>
        </div>
        <div className="text-center p-6">
          <div className="mb-5 flex text-5xl hover:text-teagreen-500 justify-center">
          <RiCustomerService2Line />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            top rated customer service
          </div>
          <div className="tracking-tight">Quick responses and solution</div>
        </div>
      </div>
    </div>
  );
}
