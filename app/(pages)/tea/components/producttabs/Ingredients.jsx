import React from 'react'

function Ingredients() {
    const ingredients = ["cacao", "cardamom", "carob", "ginger"];
  return (
    <div className="p-10">
      <h3 className="text-xl font-light">Ingredients</h3>
      <div className="mt-3">
        {ingredients.map((ingredient, index) => (
          <p key={index}><span className="mr-3">{index+1}.</span>{ingredient}</p>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;