import CategoryOfferCard from "./CategoryOfferCard";

const CategoryOffer = ({ data }) => {
  return (
    <div className="container px-5 sm:px-10 md:px-14 lg:px-20 section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <CategoryOfferCard
          title=""
          subTitle={data?.allOffer?.title || ""}
          thumbnail={data?.allOffer?.thumbnail?.path}
          url="/product-category?isSale=true"
        />
        <CategoryOfferCard
          title="tea"
          subTitle={data?.teaOffer?.title || ""}
          thumbnail={data?.teaOffer?.thumbnail?.path}
          url="/product-category?category=tea&isSale=true"
        />
        <CategoryOfferCard
          title="teawares"
          subTitle={data?.teawareOffer?.title || ""}
          thumbnail={data?.teawareOffer?.thumbnail?.path}
          url="/product-category?category=teaware&isSale=true"
        />
        <CategoryOfferCard
          title="gifts"
          subTitle={data?.giftOffer?.title || ""}
          thumbnail={data?.giftOffer?.thumbnail?.path}
          url="/product-category?category=gift&isSale=true"
        />
      </div>
    </div>
  );
};

export default CategoryOffer;
