"use client";

import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
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
    },300);
  };
  // const handleShowForm = (text) => setShowForm(text);

  const isSignIn = showForm.includes("sign-in");

  return (
    <div className=" min-h-[90vh] h-full">
      <div
        className={`flex transition-transform duration-300 ${
          !isSignIn ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-[45%] aspect-[667/1000] relative transition-opacity duration-300">
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
        </div>
        <div className="w-[55%] h-full flex flex-col items-center justify-center gap-y-5">
          <div className="flex-1 relative w-[80%] overflow-hidden mt-10">
            <div
              className={`w-full transition-opacity duration-300 ${
                isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
            >
              <SignIn showForm={showForm} />
            </div>

            <div
              className={`w-full transition-opacity duration-300 ${
                isAnimating ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
            >
              <SignUp showForm={showForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
