import React from 'react'

function Category() {
  const product = {
    name: "Organic White Tea",
    price: "$20",
    image: "/images/organic_white_tea.png",
  }
  return (
    <div className="py-14">
      <h1 className="text-center">Explore our single teas</h1>
      <div className="flex gap-5 w-full mx-auto items-center justify-center">
        <button className="border-2 border-primary rounded-full py-2 px-5">Organic tea</button>
        <button>Green tea</button>
        <button>Black tea</button>
        <button>Herbal tea</button>
        <button>Jasmine tea</button>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Category;