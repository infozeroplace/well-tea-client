"use client"

import React from 'react'

const Subscription = () => {
  return (
    <div className="relative bg-cover h-[300px] flex items-center bg-black">
        <div
          style={{ backgroundImage: `url("/images/about-image-8.jpg")` }}
          className="absolute inset-0 bg-cover h-[300px] opacity-60"
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 container-narrow z-10">
          <div className="text-[1.75rem] text-white pr-[7rem]">
            Sign up to receive our emails and enjoy 15% off your first order.
          </div>
          <div className="my-auto">
            {/* <div className="flex items-center border border-white w-[90%]">
              <Input
                placeholder="Enter Email..."
                type="email"
                variant="flat"
                radius="none"
                className="!bg-green-500 !my-0"
              />
              <button className="uppercase px-4 text-sm font-semibold">
                subscribe
              </button>
            </div> */}
            <div className="flex items-center border border-green-200/50 w-[90%] hover:border-[#A8CC3C] bg-white/30 backdrop-blur-lg">
              <input
                placeholder="Enter Email..."
                type="email"
                className="!bg-transparent !text-white placeholder:text-white w-full py-4 pl-4 focus:outline-none"
              />
              <button className="uppercase px-4 text-sm font-semibold text-[#A8CC3C] hover:text-white tracking-wide hover:bg-[#A8CC3C] py-5">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Subscription