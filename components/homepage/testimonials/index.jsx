import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import StarRatingDisplay from "@/components/shared/StarRatingDisplay";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="container px-20 section-gap">
      <div className="max-w-[638px] mx-auto content-gap">
        <h1 className="uppercase text-center text-4xl text-teagreen-800">
          Reviews & Testimonials
        </h1>
      </div>
      <div>
        <div className="flex justify-between items-center">
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
  );
};

export default Testimonials;
