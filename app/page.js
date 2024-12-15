import Image from "next/image";
import { Hero, Category, Banner } from "@/components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Category />
      <Banner />
    </div>
  );
}
