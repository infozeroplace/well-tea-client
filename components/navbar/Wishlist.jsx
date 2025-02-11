import React from 'react'
import { CiHeart } from 'react-icons/ci'
function Wishlist({ buttonClass }) {
  return (
    <div>
      <button className={buttonClass}>
        <CiHeart />
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>
    </div>
  );
}

export default Wishlist