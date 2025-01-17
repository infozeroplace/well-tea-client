import { useState } from "react";

const  BrewInstructions = ({ brewInstruction }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-teagreen-1000 py-10 px-5">
      <div className="flex bg-teagreen-100 text-brand__font__size__base text-teagreen-600">
        {brewInstruction.map((item, index) => (
          <button
            key={index}
            className={
              "w-1/2 py-2 " +
              (currentIndex === index && "bg-teagreen-600 text-white")
            }
            onClick={() => setCurrentIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex py-5 text-teagreen-700 text-lg">
        <div className="w-1/2 space-y-2 pl-5">
          {brewInstruction[currentIndex].requirements.map((requirement, index) => (
            <p key={index} className="font-light">
              {requirement}
            </p>
          ))}
        </div>
        <div className="w-1/2 space-y-2 pl-5">
          {brewInstruction[currentIndex].steps.map((step, index) => (
            <p key={index} className="">
              <span className="font-light mr-3">{index + 1}.</span> {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrewInstructions;

// import { useState } from "react";

// const BrewInstructions = ({ brewInstruction }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="bg-teagreen-1000 py-10 px-5">
//       {/* Conditional rendering for buttons */}
//       {brewInstruction.length > 1 && (
//         <div className="flex bg-teagreen-100 text-brand__font__size__base text-teagreen-600">
//           {brewInstruction.map((item, index) => (
//             <button
//               key={index}
//               className={`w-1/${brewInstruction.length} py-2 ${
//                 currentIndex === index ? "bg-teagreen-600 text-white" : ""
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             >
//               {item.title}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="flex py-5 text-teagreen-700 text-lg">
//         {/* Requirements Section */}
//         <div className="w-1/2 space-y-2 pl-5">
//           {brewInstruction[currentIndex].requirements.map(
//             (requirement, index) => (
//               <p key={index} className="font-light">
//                 {requirement}
//               </p>
//             )
//           )}
//         </div>

//         {/* Steps Section */}
//         <div className="w-1/2 space-y-2 pl-5">
//           {brewInstruction[currentIndex].steps.map((step, index) => (
//             <p key={index}>
//               <span className="font-light mr-3">{index + 1}.</span> {step}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BrewInstructions;
