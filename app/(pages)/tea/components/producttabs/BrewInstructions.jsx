import { useState } from "react";
import DOMPurify from "dompurify";
import HtmlParser from "react-html-parser";

const BrewInstructions = ({ brewInstruction }) => {
  const sanitizedContent = DOMPurify.sanitize(brewInstruction);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="p-5">
      <div className='quill-classNames'>{HtmlParser(sanitizedContent)}</div>
      {/* <div className="flex bg-teagreen-100 text-brand__font__size__base text-teagreen-600">
        {brewInstruction?.map((item, index) => (
          <button
            key={index}
            className={`w-1/2 py-2 capitalize ${
              currentIndex === index && "bg-teagreen-600 text-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <div className="flex py-5 text-teagreen-700 text-lg">
        <div className="w-1/2 space-y-2 pl-5">
          {brewInstruction[currentIndex]?.requirements?.map(
            (requirement, index) => (
              <p key={index} className="font-light">
                {requirement}
              </p>
            )
          )}
        </div>
        <div className="w-1/2 space-y-2 pl-5">
          {brewInstruction[currentIndex]?.steps?.map((step, index) => (
            <p key={index} className="">
              <span className="font-light mr-3">{index + 1}.</span> {step}
            </p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BrewInstructions;
