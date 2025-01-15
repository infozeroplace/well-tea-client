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

// export const metadata = {
//   title: "Well Tea",
//   description: "Well Tea - Fresh and Organic Tea Products",
//   keywords: "tea, organic tea, well tea, premium tea",
// };

export const revalidate = 0;

const Home = async () => {
  const {
    data: { data: categoryData },
  } = await axios.get(
    `/public/product/list?page=1&limit=10&category=tea&type=green tea`
  );

  const {
    data: { data: bestSellerData },
  } = await axios.get(`/public/product/list?page=1&limit=10&isBestSeller=true`);

  const {
    data: { data: featuredProducts },
  } = await axios.get(`/public/product/list?page=1&limit=10&isFeatured=true`);

  const {
    data: { data: systemData },
  } = await axios.get("/public/system");

  return (
    <>
      <Hero data={systemData?.hero || []} />
      <CategoryOffer data={systemData?.offer || {}} />
      <Category initialProducts={categoryData || []} />
      <Banner data={systemData?.featured || []} />
      <VariableCategoryProducts initialProducts={featuredProducts || []} />
      <WhyChooseUs data = {systemData?.whyChooseUs || []}/>
      <BestSellers initialProducts={bestSellerData || []} />
    </>
  );
};

export default Home;
