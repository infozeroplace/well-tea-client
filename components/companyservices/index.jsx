"use client";

import {
  LiaShippingFastSolid,
  PiTeaBag,
  RiCustomerService2Line,
  RiSecurePaymentLine,
} from "@/icons";
import Image from "next/image";
import { env } from "@/config/env";

const CompanyServices = ({ data }) => {

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item.title} className="text-center md:border-r border-gray-200 p-6 xl:p-8 group">
            <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
              {/* <LiaShippingFastSolid /> */}
              <Image src={`${env.app_url}${item.iconPath}`} alt={item.title} width={20} height={20}/>
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              {item.title}
            </div>
            <div className="tracking-tight">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyServices;
