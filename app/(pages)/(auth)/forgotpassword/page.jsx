
import React from "react";

const ResetPassword = ({ showForm }) => {
  return (
    <div className="my-14 w-[600px] p-4 rounded-lg mx-auto shadow bg-teagreen-200">
      <h4 className="text-2xl text-teagreen-600 font-semibold text-center">Forgot Password?</h4>
      <p className="text-center text-sm mb-3">Please enter your registered email address, and we'll send you a link to reset your password.</p>
      <form action="" className="gap-3">
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-4"
          type="email"
          placeholder="Email"
        />
        <button
          type="submit"
          className="text-center text-white w-full bg-teagreen-600 p-2 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
