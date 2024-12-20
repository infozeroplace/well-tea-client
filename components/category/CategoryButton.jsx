"use client";
import { useState, useEffect } from "react";

function CategoryButton({ }) {
  const [active, setActive] = useState("");
//   const [activeCategory, setActiveCategory] = useState("");
  const activeClass = "border-[0.5px] border-teagreen-600";

  // useEffect(() => {
  //   setActive(categoryButtons[0].title);
  // }, [])
  // const handleActive = (title) => {
  //   setActive(title);
  // };
  
  return (
    <>
      {categoryButtons.map((item, index) => (
        <button
            key={index}
          className={
            active === item.title
              ? activeClass + " rounded-full py-2 px-5"
              : "bg-teagreen-100 text-teagreen-600" + " rounded-full py-2 px-5"
          }
          onClick={()=> handleActive(item.title)}
        >
          {item.title}
        </button>
      ))}
    </>
  );
}

export default CategoryButton;
