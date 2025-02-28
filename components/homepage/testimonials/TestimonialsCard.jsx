import { StarRating } from '@/components/shared/';
import React from 'react'

const TestimonialsCard = ({ item }) => {
    return (
      <div className="border border-slate-200 rounded-lg p-6 max-w-sm shadow-sm">
        {/* Avatar and Name */}
        <div className="flex items-center space-x-4">
          <img
            src={item.avatar}
            alt={`${item.name}'s avatar`}
            className="w-12 h-12 rounded-full border border-slate-200"
          />
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {item.name}
            </h3>
            <p className="text-sm text-slate-500">{item.date}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-4">
          <StarRating rating={item.rating} />
        </div>

        {/* Title */}
        <h4 className="mt-4 text-md font-medium text-slate-700">
          {item.title}
        </h4>

        {/* Message */}
        <p className="mt-2 text-sm text-slate-600">{item.message}</p>
      </div>
    );
  };
  
  export default TestimonialsCard;