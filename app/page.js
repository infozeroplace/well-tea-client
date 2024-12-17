"use client"

import { Banner, Category, Hero } from "@/components";
import { useGetTestQuery } from "@/services/features/auth/authApi";

export default function Home() {
  const { data, isLoading } = useGetTestQuery({});

  return (
    <div className="">
      <Hero />
      <Category />
      <Banner />
    </div>
  );
}
