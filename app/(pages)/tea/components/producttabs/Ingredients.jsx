import React from 'react'

function Ingredients({ ingredient }) {
  // const ingredients = ["cacao", "cardamom", "carob", "ginger"];
  return (
    <div className="p-10">
      <h3 className="text-xl font-light">Ingredients</h3>
      <div className="mt-3">
        {ingredient.map((item, index) => (
          <p key={index}>
            <span className="mr-3">{index + 1}.</span>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;