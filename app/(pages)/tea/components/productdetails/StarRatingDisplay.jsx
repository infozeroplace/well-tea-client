import React from "react";

const StarRatingDisplay = ({ rating }) => {
  const numericRating = isNaN(Number(rating)) ? 0 : Number(rating); // Fallback to 0 if invalid
  const fullStars = Math.floor(numericRating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      <span className="text-lg font-semibold text-gray-800 mr-2">
        {numericRating.toFixed(1)}
      </span>
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`} className="text-orange-500 text-lg">
          ★
        </span>
      ))}
      {/* Render Half Star if applicable */}
      {halfStar && (
        <span
          className="text-gray-300 text-lg relative"
          style={{
            display: "inline-block",
            position: "relative",
            width: "1em",
          }}
        >
          ★
          <span
            className="text-orange-500 overflow-hidden w-[50%] absolute top-0 left-0"
          >
            ★
          </span>
        </span>
      )}
      {/* Render Empty Stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-lg">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRatingDisplay;