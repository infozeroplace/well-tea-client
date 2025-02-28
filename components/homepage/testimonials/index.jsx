import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import StarRatingDisplay from "@/components/shared/StarRatingDisplay";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider";
import { SectionTitle } from "@/components/shared";

const Testimonials = () => {
  return (
    <div className="section-gap bg-teagreen-100 py-10">
      <div className="container px-4 lg:px-20">
        <div className="max-w-[638px] mx-auto content-gap">
          <SectionTitle title="Reviews & Testimonials" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2 mx-1">
            <div className="flex gap-2 items-center">
              <StarRatingDisplay rating={4.5} />{" "}
              <span className="font-extralight">{1033}</span>{" "}
              <span className="font-extralight">reviews</span>
            </div>
            <Link href={"/"} className="hover:text-teagreen-700">
              See all reviews
            </Link>
          </div>
          {/* Cards Slider */}
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
