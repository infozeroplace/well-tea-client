import { Banner, Category, Hero, NewReleases, TeaRange, ChooseType, SelectedTeas } from "@/components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ChooseType />
      <NewReleases />
      <Banner />
      <Category />
      <TeaRange />
      <SelectedTeas />
    </div>
  );
}
