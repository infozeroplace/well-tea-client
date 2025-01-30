import React from "react";

const SectionTitle = ({ title, exteraClasses = "" }) => {
  return (
    <h1
      className={`text-center uppercase text-2xl md:text-4xl text-teagreen-800 mb-8 md:mb-10 font-extralight md:font-thin ${exteraClasses}`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
