import { Banner, Category, Hero, NewReleases, TeaRange, ChooseType, SelectedTeas, WhyChooseUs, CompanyServices, GiftItems, CategoryOffer } from "@/components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CategoryOffer />
      <Category />
      <NewReleases />
      <Banner />
      <GiftItems />
      <ChooseType />
      {/* <TeaRange /> */}
      {/* <SelectedTeas /> */}
      <WhyChooseUs />
      <CompanyServices />
    </div>
  );
}
