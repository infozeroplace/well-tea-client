"use client";

import { useEffect, useState } from "react";

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
          className="text-gray-300 flex items-center gap-2 group uppercase"
        >
          Back to top
          <i className="bx bx-up-arrow-circle text-[25px] text-gray-300 group-hover:-translate-y-[2px]  transition-all duration-300"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
