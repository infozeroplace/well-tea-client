function Ingredients({ ingredient }) {
  return (
    <div className="p-5">
      {ingredient.map((item, index) => (
        <p key={index}>
          <span className="mr-2">{index + 1}.</span>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Ingredients;
