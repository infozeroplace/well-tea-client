import React from "react";
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`} className="text-orange-500 text-lg">
          ★
        </span>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-lg">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;