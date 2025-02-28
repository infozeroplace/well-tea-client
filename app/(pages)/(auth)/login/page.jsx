"use client";

import {
  SignIn,
  SignUp,
} from "@/components";
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
    </div>
  );
}
