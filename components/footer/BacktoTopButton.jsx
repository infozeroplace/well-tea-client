"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-20 bg-teagreen-700 p-3 rounded-full text-teagreen-100 flex items-center gap-2 group uppercase"
        >
          {/* <i className="bx bx-up-arrow-circle text-[25px] text-teagreen-500 group-hover:-translate-y-[2px]  transition-all duration-300"></i> */}
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
