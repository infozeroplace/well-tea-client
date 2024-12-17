
import Link from "next/link";
import React from "react";

const ResetPassword = ({ showForm }) => {
  return (
    <div className="p-14">
      <h4 className="text-2xl font-semibold text-center mb-2">Set New Password</h4>
      <form action="" className="gap-3">
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-2"
          type="text"
          placeholder="New Password"
        />
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-4"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          className="text-center text-white w-full bg-primary p-2 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
