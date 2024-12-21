import React from "react";

const SectionButton = ({ title, onClick=()=>{} }) => {
  return (
    <button onClick={onClick} className="bg-teagreen-700 hover:bg-teagreen-600 text-white text-lg rounded-full px-10 py-3 text-center mx-auto">
      {title}
    </button>
  );
};

export default SectionButton;
