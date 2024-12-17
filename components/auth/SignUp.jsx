import React from "react";

const SignUp = ({ showForm }) => {
  return (
    <div className={`${showForm === "sign-up" ? "block translate-x-0 opacity-1" : "hidden translate-x-[100%] opacity-0"}`}>
        <h4 className="text-2xl font-semibold text-center mb-2">Create Account</h4>
      <form action="" className="gap-3">
        <div className="flex justify-between gap-2 mb-2">
            <input className="w-full border border-gray-400 p-2 rounded-lg" type="text" placeholder="First Name" />
            <input className="w-full border border-gray-400 p-2 rounded-lg" type="text" placeholder="Last Name" />
        </div>
          <input className="w-full border border-gray-400 p-2 rounded-lg mb-2" type="text" placeholder="Email" />
          <input className="w-full border border-gray-400 p-2 rounded-lg mb-2" type="password" placeholder="Password" />
          <input className="w-full border border-gray-400 p-2 rounded-lg mb-4" type="password" placeholder="Confirm Password" />
        <button type="submit" className="text-center text-white w-full bg-primary p-2 rounded-full">Submit</button>
      </form>
      <h4 className="text-xl font-semibold text-center my-4">Or</h4>
      <div className="flex justify-center gap-2">
        <div>Logos</div>
        <div>Logos</div>
        <div>Logos</div>
      </div>
    </div>
  );
};

export default SignUp;
