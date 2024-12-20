"use client";

import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import Image from "next/image";
import { useState } from "react";

export default function SignInScreen() {
  const [showForm, setShowForm] = useState("sign-in");

  const handleShowForm = (text) => setShowForm(text);

  const isSignIn = showForm.includes("sign-in");

  return (
    <div className="relative min-h-[90vh] h-full flex justify-center items-center  bg-opacity-40 ">
      <div className="z-[1] md:w-[70%] my-4 lg:my-10 h-full mx-auto grid grid-cols-2 bg-gray-200 rounded-lg">
            <Image src="/images/loginform-bg.jpg" alt="login" width={667} height={1000} className="rounded-l-lg w-full" />
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-5 p-8 mx-auto">
          <div>
            <div className="w-full flex justify-center items-center gap-2 text-primary">
              <button
                onClick={() => handleShowForm("sign-in")}
                className={`border border-teagreen-600 px-4 py-0.5 rounded-full duration-300 ${
                  isSignIn ? "bg-teagreen-600 text-white" : "bg-transparent"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleShowForm("sign-up")}
                className={`border border-teagreen-600 px-4 py-0.5 rounded-full duration-300 ${
                  isSignIn ? "bg-transparent" : "bg-teagreen-600 text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full overflow-hidden">
            <SignIn showForm={showForm} />
            <SignUp showForm={showForm} />
          </div>

        </div>
      </div>
      <div className="w-full absolute inset-0 blur-sm bg-[url('/images/login-bg.jpg')] bg-cover bg-center"></div>
    </div>
  );
}
