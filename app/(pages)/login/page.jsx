"use client"

import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import Link from "next/link";
import { useState } from "react";

// import churchLogo from "../../assets/logo/churchlogo.png";
// import SignIn from "../../components/Auth/SignIn";
// import SignUp from "../../components/Auth/SignUp";

export default function SignInScreen() {
  const [showForm, setShowForm] = useState("sign-in");

  const handleShowForm = (text) => setShowForm(text);

  const isSignIn = showForm.includes("sign-in");

  return (
    <section className="text-brand__black__color min-h-[90vh]">
        <div className="container h-full flex flex-col justify-center items-center my-14 mx-auto">
          <div className="max-w-[800px] w-full max-h-[600px] h-full mx-auto rounded-xl">
              <div className="w-full h-full flex flex-col items-center justify-center gap-y-5 bg-gray-200 rounded-lg p-8">
                <div>
                  <div className="w-full flex justify-center items-center gap-2 text-primary">
                    <button
                      onClick={() => handleShowForm("sign-in")}
                      className={`border border-primary px-4 py-0.5 rounded-full duration-300 ${
                        isSignIn ? "bg-primary text-white" : "bg-transparent"
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => handleShowForm("sign-up")}
                      className={`border border-primary px-4 py-0.5 rounded-full duration-300 ${
                        isSignIn ? "bg-transparent" : "bg-primary text-white"
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
        </div>
      </section>
  );
}