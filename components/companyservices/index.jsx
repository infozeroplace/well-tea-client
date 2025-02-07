// // "use client";

import axios from "@/api/axios";
import { env } from "@/config/env";
import Image from "next/image";

const CompanyServices = async () => {
  const {
    data: { data },
  } = await axios.get("/public/system");

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.companyService?.map((item, idx) => (
          <div
            key={idx}
            className={`text-center border-gray-200 p-6 xl:p-8 group ${
              idx !== data?.companyService?.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
              {item?.iconPath[0]?.filepath && (
                <Image
                  src={`${env.app_url}${item?.iconPath[0]?.filepath}`}
                  alt={item?.iconPath[0]?.alternateText || ""}
                  width={20}
                  height={20}
                />
              )}
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              {item?.title}
            </div>
            <div className="tracking-tight">{item?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyServices;
// "use client";

// import { useState, useEffect } from "react";
// import axios from "@/api/axios";
// import { env } from "@/config/env";
// import Image from "next/image";

// const CompanyServices = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       const {
//         data: { data },
//       } = await axios.get("/public/system");
//       setServices(data?.companyService || []);
//     };

//     fetchServices();
//   }, []);

//   return (
//     <div className="container">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//         {services.map((item, idx) => (
//           <div
//             key={idx}
//             className="text-center md:border-r border-gray-200 p-6 xl:p-8 group"
//           >
//             <div className="mb-5 flex text-3xl font-thin group-hover:text-teagreen-600 justify-center">
//               {item?.iconPath && (
//                 <Image
//                   src={`${env.app_url}${item?.iconPath}`}
//                   alt={item?.title}
//                   width={20}
//                   height={20}
//                 />
//               )}
//             </div>
//             <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
//               {item?.title}
//             </div>
//             <div className="tracking-tight">{item?.description}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyServices;
