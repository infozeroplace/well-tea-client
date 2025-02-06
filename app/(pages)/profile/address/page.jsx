import React from "react";

function AddressScreen() {
  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="bg-white p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2">Hriday Baidya</p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> hcb2433@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span>
            </p>
          </div>
          <div>
            <p className="mb-2">Hriday Baidya</p>
            <p className="mb-2">United Kingdom</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <p className="mb-2">You’re currently a</p>
        <p className="text-2xl font-semibold mb-4">VIP Member - 2,186 Points</p>
        <button className="bg-black text-white px-4 py-2 flex items-center">
          Redeem Rewards <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default AddressScreen;
