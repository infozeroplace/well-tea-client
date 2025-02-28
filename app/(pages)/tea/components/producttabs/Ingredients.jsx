function Ingredients({ teaIngredient=[] }) {
  console.log("teaIngredient", teaIngredient);
  
  return (
    <div className="p-5">
      {teaIngredient?.map((item, index) => (
        <p key={index}>
          <span className="mr-2">{index + 1}.</span>
          {item?.assortment}
        </p>
      ))}
    </div>
  );
}

export default Ingredients;
