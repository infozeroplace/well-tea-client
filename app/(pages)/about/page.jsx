"use client";

import { SectionButton } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LiaShippingFastSolid,
  LuClipboardPenLine,
  RiCustomerService2Line,
  RiSecurePaymentLine,
} from "@/icons";
import { image, Input } from "@nextui-org/react";

const About = () => {
  const handleContact = () => {};
  return (
    <div>
      {/* First Section */}
      <div className="flex flex-col items-center mt-14 section-gap container">
        <div className="text-center content-gap">
          <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
            About Us
          </div>
          <h2 className="text-3xl lg:text-6xl px-20">
            The Perfect Blend of Tea and Tranquility
          </h2>
        </div>
        <Image
          src="/images/about-image-1.jpg"
          alt="Tea"
          width={1730}
          height={750}
        />
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 section-gap container-narrow">
        <div className="flex flex-col justify-center lg:border-r px-10 border-slate-200">
          <div>
            <div className="text-center content-gap">
              <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                Our Story
              </div>
              <h2 className="text-3xl lg:text-6xl px-20">
                It all began in 2010
              </h2>
            </div>
            <div className="text-center text-gray-500 content-gap">
              <p className="content-gap font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptas dolore possimus eveniet vero autem sequi animi aliquid
                ratione omnis! Molestias sunt facilis minima neque eligendi,
                porro rerum doloremque nesciunt!
              </p>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis ullam iusto facere beatae animi dicta impedit ab
                inventore incidunt, vel sint, dignissimos officia earum.
                Deserunt ab voluptate beatae unde pariatur.
              </p>
            </div>
            <div className="group content-gap w-fit mx-auto">
              <SectionButton title="Contact" onClick={handleContact} />
            </div>
          </div>
        </div>
        <div className="relative aspect-[758/450] lg:aspect-[630/800] w-full overflow-hidden lg:overflow-visible">
          <Image
            src="/images/about-image-2.jpg"
            alt="Tea"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="section-gap bg-[#F9F6EE] pb-10">
        <div className="container">
          <div className="text-center content-gap pt-10">
            <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
              Core values
            </div>
            <h5 className="text-3xl lg:text-6xl px-20">
              Enjoy the uniqueness we bring to life.
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:border-r border-slate-200 mb-8 lg:mb-0 px-4">
              <div className="relative aspect-[720/350] md:aspect-[410/350] w-full overflow-hidden lg:overflow-visible content-gap">
                <Image
                  src="/images/about-image-4.jpg"
                  alt="Tea"
                  width={410}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-4">
                <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                  Sustainability
                </div>
                <h4 className="mb-2 text-xl lg:text-3xl font-medium">
                  For The Environment
                </h4>
                <p className="text-gray-500 font-medium">
                  All of our ingredients are sourced directly from sustainable
                  accredited gardens and all of our packaging is recyclable.
                </p>
              </div>
            </div>
            <div className="lg:border-r border-slate-200 mb-8 lg:mb-0 px-4">
              <div className="relative aspect-[720/350] md:aspect-[410/350] w-full overflow-hidden lg:overflow-visible content-gap">
                <Image
                  src="/images/about-image-5.jpg"
                  alt="Tea"
                  width={410}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-4">
                <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                  satisfaction
                </div>
                <h4 className="mb-2 text-xl lg:text-3xl font-medium">
                  For The People
                </h4>
                <p className="text-gray-500 font-medium">
                  We source the finest quality speciality teas, herbs, spices
                  and flowers from around the world. Are you ready to be
                  inspired?
                </p>
              </div>
            </div>
            <div className="md:border-r border-slate-200 mb-8 lg:mb-0 px-4">
              <div className="relative aspect-[720/350] md:aspect-[410/350] w-full overflow-hidden lg:overflow-visible content-gap">
                <Image
                  src="/images/about-image-6.jpg"
                  alt="Tea"
                  width={410}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-4">
                <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                  freshness
                </div>
                <h4 className="mb-2 text-xl lg:text-3xl font-medium">
                  For The Taste
                </h4>
                <p className="text-gray-500 font-medium">
                  We are passionate about fresh, small batch blends tha capture
                  the vitality of their ingredients and are bursting with
                  flavour and therapeutic potential.
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0 px-4">
              <div className="relative aspect-[720/350] md:aspect-[410/350] w-full overflow-hidden lg:overflow-visible content-gap">
                <Image
                  src="/images/about-image-7.jpg"
                  alt="Tea"
                  width={410}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center px-4">
                <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                  quality
                </div>
                <h4 className="mb-2 text-xl lg:text-3xl font-medium">
                  For The Health
                </h4>
                <p className="text-gray-500 font-medium">
                  We source the finest quality speciality teas, herbs, spices
                  and flowers from around the world. Are you ready to be
                  inspired?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 section-gap container-narrow">
        <div className="relative aspect-[758/450] lg:aspect-[630/800] w-full overflow-hidden lg:overflow-visible content-gap">
          <Image
            src="/images/about-image-3.jpg"
            alt="Tea"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-10 lg:border-l border-slate-200">
          <div>
            <div className="text-center content-gap">
              <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
                amazing people
              </div>
              <h2 className="text-3xl lg:text-6xl px-20">
                Selected by a Master Tea Taster
              </h2>
            </div>
            <div className="text-center text-gray-500 content-gap">
              <p className="content-gap font-medium">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="font-medium">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </p>
            </div>
            <div className="group w-fit mx-auto">
              <SectionButton title="Our Team" onClick={handleContact} />
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="section-gap">
        <div>text slider</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
          <div className="text-center md:border-r md:border-b border-gray-200 p-6 group">
            <div className="mb-5 flex text-5xl font-thin group-hover:text-teagreen-600 justify-center">
              <LiaShippingFastSolid />
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              free standard delevery
            </div>
            <div className="tracking-tight">On all orders over $100</div>
          </div>
          <div className="text-center lg:border-r lg:border-b border-gray-200 p-6 group">
            <div className="mb-5 flex text-5xl font-thin group-hover:text-teagreen-600 justify-center">
              <LuClipboardPenLine />
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              Handmaid guarantee
            </div>
            <div className="tracking-tight">Shop for items with confidence</div>
          </div>
          <div className="text-center md:border-b md:border-r border-gray-200 p-6 group">
            <div className="mb-5 flex text-5xl font-thin group-hover:text-teagreen-600 justify-center">
              <RiSecurePaymentLine />
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              secure payments
            </div>
            <div className="tracking-tight">Secure payments methods</div>
          </div>
          <div className="text-center p-6 group border-b border-gray-200">
            <div className="mb-5 flex text-5xl font-thin group-hover:text-teagreen-500 justify-center">
              <RiCustomerService2Line />
            </div>
            <div className="uppercase text-xs text-teagreen-600 mb-2 font-semibold">
              top rated customer service
            </div>
            <div className="tracking-tight">Quick responses and solution</div>
          </div>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="section-gap container">slider</div>

      {/* Seventh Section */}
      <div className="relative bg-cover h-[300px] flex items-center bg-black">
        <div
          style={{ backgroundImage: `url("/images/about-image-8.jpg")` }}
          className="absolute inset-0 bg-cover h-[300px] opacity-60"
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 container-narrow z-10">
          <div className="text-[1.75rem] text-white pr-[7rem]">
            Sign up to receive our emails and enjoy 15% off your first order.
          </div>
          <div className="my-auto">
            {/* <div className="flex items-center border border-white w-[90%]">
              <Input
                placeholder="Enter Email..."
                type="email"
                variant="flat"
                radius="none"
                className="!bg-green-500 !my-0"
              />
              <button className="uppercase px-4 text-sm font-semibold">
                subscribe
              </button>
            </div> */}
            <div className="flex items-center border border-green-200/50 w-[90%] hover:border-[#A8CC3C] bg-white/30 backdrop-blur-lg">
              <input
                placeholder="Enter Email..."
                type="email"
                className="!bg-transparent !text-white placeholder:text-white w-full py-4 pl-4 focus:outline-none"
              />
              <button className="uppercase px-4 text-sm font-semibold text-[#A8CC3C] hover:text-white tracking-wide hover:bg-[#A8CC3C] py-5">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
