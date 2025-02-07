import CategorySlider from "@/components/category/CategorySlider";

const VariableCategoryProducts = ({ initialProducts }) => {
  return (
    <div className="section-gap">
      <div className="container px-5 sm:px-10 md:px-14 lg:px-10">
        <CategorySlider products={initialProducts} />
      </div>
    </div>
  );
};

export default VariableCategoryProducts;
