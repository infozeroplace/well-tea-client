import { Banner, Category, Hero, NewReleases, TeaRange, ChooseType, SelectedTeas, WhyChooseUs } from "@/components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Category />
      <NewReleases />
      <Banner />
      <ChooseType />
      {/* <TeaRange /> */}
      {/* <SelectedTeas /> */}
      <WhyChooseUs />
    </div>
  );
}
