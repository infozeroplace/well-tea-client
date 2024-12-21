import React from 'react'

import { CiSearch } from 'react-icons/ci';

function NavbarIcon() {
  return (
    <button className={`nav-button ${navIconsClasses}`}>
        <CiSearch />
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
    </button>
  );
}

export default NavbarIcon