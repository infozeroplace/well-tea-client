import CategorySlider from "@/components/category/CategorySlider";

const VariableCategoryProducts = ({ initialProducts }) => {
  return (
    <div className="section-gap">
      <div className="container px-4 md:px-20">
        <CategorySlider products={initialProducts} />
      </div>
    </div>
  );
};

export default VariableCategoryProducts;
