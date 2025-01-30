"use client";

const SectionButton = ({
  title,
  textClass,
  buttonClass,
  hoverClass,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "relative block text-nowrap h-12 group overflow-hidden border-1 border-teagreen-500 hover:border-teagreen-800 text-lg rounded-full px-10 py-3 text-center transition-all duration-300 " +
        buttonClass
      }
    >
      <span
        className={
          "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 text-teagreen-700 group-hover:text-white transition-all duration-300 " +
          textClass
        }
      >
        {title}
      </span>
      <div
        className={
          "absolute z-10 top-0 left-0 w-0 h-full group-hover:w-full bg-teagreen-800 transition-all duration-300 " +
          hoverClass
        }
      ></div>
    </button>
  );
};

export default SectionButton;
