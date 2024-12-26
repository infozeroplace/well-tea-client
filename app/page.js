import { Banner, Category, Hero, NewReleases, TeaRange, ChooseType, SelectedTeas, WhyChooseUs, CompanyServices, GiftItems } from "@/components";

export default function Home() {
  return (
    <div className="">
      <Hero />
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
