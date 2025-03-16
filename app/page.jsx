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
  try {
    const {
      data: { data: teaTypes },
    } = await axios.get("/public/system/get-tea-types");

    const {
      data: { data: categoryData },
    } = await axios.get(
      `/public/product/list?page=1&limit=10&category=tea&productType=${
        teaTypes[0] || "green tea"
      }`
    );

    const {
      data: { data: bestSellerData },
    } = await axios.get(
      `/public/product/list?page=1&limit=10&isBestSeller=true`
    );

    const {
      data: { data: featuredProducts },
    } = await axios.get(`/public/product/list?page=1&limit=10&isFeatured=true`);

    const {
      data: { data: systemData },
    } = await axios.get("/public/system");

    return (
      <>
        <Hero data={systemData?.hero || []} />
        {/* <CategoryOffer data={systemData?.offer || {}} />
        <Category initialProducts={categoryData || []} teaTypes={teaTypes} />
        <Banner data={systemData?.featured || []} />
        <VariableCategoryProducts initialProducts={featuredProducts || []} />
        <WhyChooseUs data={systemData?.whyChooseUs || []} />
        <BestSellers initialProducts={bestSellerData || []} /> */}
      </>
    );
  } catch (error) {
    return <div>Something went wrong!</div>;
  }
};

export default Home;
