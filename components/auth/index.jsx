import { useState } from "react";
// import { Link } from "react-router-hash-link";
// import churchLogo from "../../assets/logo/churchlogo.png";
// import CustomButton from "../UI/CustomButton";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Link from "next/link";

export default function Auth() {
  const [showForm, setShowForm] = useState("sign-in");

  const handleShowForm = (text) => setShowForm(text);

  const isSignIn = showForm.includes("sign-in");

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-full max-h-[600px] h-full mx-auto rounded-xl p-2">
      <div className="h-full flex flex-row-reverse justify-between rounded-xl">
        <div className="basis-[50%] w-full h-full hidden sm:flex flex-col justify-end bg-login__background bg-no-repeat bg-center bg-cover rounded-tr-xl rounded-br-xl">
          <p className="text-brand__font__size__xs text-center text-white p-5">
            By proceeding, you agree to our{" "}
            <Link href="/terms-conditions#terms" className="underline">
              Terms & Conditions
            </Link>{" "}
            and confirm you have read our{" "}
            <Link href="/privacy-policy#privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="basis-[100%] sm:basis-[50%] w-full h-full flex flex-col items-center justify-center gap-y-5 bg-white rounded-tl-lg rounded-lg">
          <div>
            <div className="text-center w-fit mx-auto pt-10 pb-6">
              <Link href="/#">
                {/* <img
                  className="max-w-[200px] w-full"
                  src={churchLogo}
                  alt="churchlogo"
                /> */}
                Logo
              </Link>
            </div>

            <div className="w-full flex justify-center items-center gap-2 text-brand__font__size__sm font-brand__font__500 text-primary">
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
  );
}