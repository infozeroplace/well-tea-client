import CategoryOfferCard from "./CategoryOfferCard";

const CategoryOffer = ({ data }) => {
  return (
    <div className="container px-5 sm:px-10 md:px-14 lg:px-10 section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <CategoryOfferCard
          title={data?.offerOne?.subTitle || ""}
          subTitle={data?.offerOne?.title || ""}
          thumbnail={data?.offerOne?.thumbnail}
          url={`/collection/${data?.offerOne?.category}?isSale=true`}
        />
        <CategoryOfferCard
          title={data?.offerTwo?.subTitle || ""}
          subTitle={data?.offerTwo?.title || ""}
          thumbnail={data?.offerTwo?.thumbnail}
          url={`/collection/${data?.offerTwo?.category}?isSale=true`}
        />
        <CategoryOfferCard
          title={data?.offerThree?.subTitle || ""}
          subTitle={data?.offerThree?.title || ""}
          thumbnail={data?.offerThree?.thumbnail}
          url={`/collection/${data?.offerThree?.category}?isSale=true`}
        />
        <CategoryOfferCard
          title={data?.offerFour?.subTitle || ""}
          subTitle={data?.offerFour?.title || ""}
          thumbnail={data?.offerFour?.thumbnail}
          url={`/collection/${data?.offerFour?.category}?isSale=true`}
        />
      </div>
    </div>
  );
};

export default CategoryOffer;
