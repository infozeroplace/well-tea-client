"use client"
import { useState } from 'react'

function FaqSection({ faqContents}) {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleOnClick = (index) => {
        setActiveIndexes(
          !activeIndexes.includes(index)
            ? [...activeIndexes, index]
            : activeIndexes.filter((i) => i !== index)
        );
    }

  return (
    <div className="w-[500px] my-24 space-y-2">
      {faqContents.map((faqContent, index) => (
        <div key={index} className="w-full">
          <button
            onClick={() => handleOnClick(index)}
            className="w-full bg-teagreen-200 px-10 py-5 flex justify-between overflow-hidden"
          >
            {faqContent.question}
            <span
              className={`text-2xl origin-center transition-all duration-300 ${
                activeIndexes.length > 0 ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
          <p
            className={`origin-top transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndexes.includes(index)
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {faqContent.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaqSection