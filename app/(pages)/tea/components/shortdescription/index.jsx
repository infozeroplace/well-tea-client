"use client";

import { useState } from "react";

const ShortDescription = ({ desc }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="mt-4">
      <p>
        {showFullDescription ? desc : `${desc?.slice(0, 150)}...`}{" "}
        {desc?.length > 150 && (
          <button
            onClick={toggleDescription}
            className="text-teagreen-800 font-brand__font__500"
          >
            {showFullDescription ? "See less" : "See more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ShortDescription;
