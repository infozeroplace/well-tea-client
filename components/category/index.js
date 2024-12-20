import CategorySlider from "./CategorySlider";
import CategoryButton from "./CategoryButton";

function Category() {

  
  
  return (
    <div className="py-14">
      <h1 className="text-center text-4xl text-teagreen-800 mb-10">Explore our single teas</h1>
      <div className="flex gap-5 w-full mx-auto items-center justify-center mb-10">
        <CategoryButton />
      </div>
      <div className="">
        <div className="my-10 mx-20">
          <CategorySlider />
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-teagreen-700 hover:bg-teagreen-600 text-white rounded-full px-10 py-3 text-center mx-auto">
          Shop All Teas
        </button>
      </div>
    </div>
  );
}

export default Category;