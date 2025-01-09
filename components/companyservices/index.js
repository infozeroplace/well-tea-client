"use client"

import React from 'react'
import {
    LiaShippingFastSolid,
    PiTeaBag,
    RiCustomerService2Line,
    RiSecurePaymentLine,
  } from "@/icons";

const CompanyServices = () => {
  return (
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center md:border-r border-gray-200 p-6 xl:p-8 group lg:border-b">
          <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
            <LiaShippingFastSolid />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            free shipping
          </div>
          <div className="tracking-tight">On all orders over $100</div>
        </div>
        <div className="text-center lg:border-r border-gray-200 p-6 xl:p-8 group lg:border-b">
          <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
            <RiSecurePaymentLine />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Secure Payments
          </div>
          <div className="tracking-tight">Secure payments methods</div>
        </div>
        <div className="text-center md:border-r border-gray-200 p-6 xl:p-8 group lg:border-b">
          <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
            <RiCustomerService2Line />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Customer Service
          </div>
          <div className="tracking-tight">Quick responses and solution</div>
        </div>
        <div className="text-center p-6 xl:p-8 mb-6 lg:mb-0 group lg:border-b">
          <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-500 justify-center">
            <PiTeaBag />
          </div>
          <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
            Othanthik Tea
          </div>
          <div className="tracking-tight">Shop for items with confidence</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyServices