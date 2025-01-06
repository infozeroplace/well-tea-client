import React from 'react'

function Description({ description }) {
  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="font-light text-xl mb-2">Description</h1>
        <p className="columns-2 gap-10 text-justify">
          {description}
        </p>
      </div>
      {/* <div className="">
        <h1 className="font-light text-xl mb-2">Health Benefits</h1>
        <ul className="text-sm font-extralight">
          <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div> */}
    </div>
  );
}

export default Description