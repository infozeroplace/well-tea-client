import axios from "@/api/axios";
import {
  Banner,
  BestSellers,
  Category,
  CategoryOffer,
  Hero,
  VariableCategoryProducts,
  WhyChooseUs,
} from "@/components";

export default async function Home() {
  // const category = "tea" || "teaware" || "gift";
  const category = "gift";

  const urlForCategory = `/public/product/list?page=1&limit=10&category=tea&type=green tea`;

  const urlForBestSeller = `/public/product/list?page=1&limit=10&isBestSeller=true`;

  const urlForVariableCategory = `/public/product/list?page=1&limit=10&category=${category}`;

  const urlForSystemData = "/public/system";

  const {
    data: { data: categoryData },
  } = await axios.get(urlForCategory);

  const {
    data: { data: bestSellerData },
  } = await axios.get(urlForBestSeller);

  const {
    data: { data: variableCategoryData },
  } = await axios.get(urlForVariableCategory);

  const {
    data: { data: systemData },
  } = await axios.get(urlForSystemData);


  return (
    <>
      <Hero data={systemData?.hero || []} />
      <CategoryOffer data={systemData?.offer || {}}/>
      <Category initialProducts={categoryData || []} />
      <BestSellers initialProducts={bestSellerData || []} />
      <Banner />
      <VariableCategoryProducts initialProducts={variableCategoryData || []} />
      <WhyChooseUs />
    </>
  );
}
