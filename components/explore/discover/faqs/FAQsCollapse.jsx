"use client";

import { useState } from "react";

function FAQsCollapse({ key, faqTitle, faqInfo = [] }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleOnClick = (index) => {
    setActiveIndexes(
      !activeIndexes.includes(index)
        ? [...activeIndexes, index]
        : activeIndexes.filter((i) => i !== index)
    );
  };

  return (
    <div
      className={`w-full lg:max-w-[50rem] mx-auto inline-block ${
        faqTitle == "Subscriptions" ? "" : "content-gap"
      }`}
      key={key}
    >
      <h2 className="!text-2xl text-center lg:text-left font-medium mb-5">
        {faqTitle}
      </h2>
      {faqInfo?.map((info, index) => (
        <div key={info?.id} className="w-full">
          <button
            onClick={() => handleOnClick(index)}
            className="w-full text-left bg-teagreen-200 px-10 py-5 flex justify-between overflow-hidden"
          >
            {info?.question}
            <span
              className={`text-2xl origin-center transition-all duration-300 ${
                activeIndexes.includes(index) ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
          <p
            className={`origin-top transition-all !duration-500 ease-in-out overflow-hidden pl-1 ${
              activeIndexes.includes(index)
                ? "max-h-[50rem] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {info?.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FAQsCollapse;
