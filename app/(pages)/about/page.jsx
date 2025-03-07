import {
  AmazingPeople,
  CommonBanner,
  DiscoverUs,
  MarqueeText,
  Subscription,
} from "@/components";
import { aboutMetadata } from "@/data/staticMetaData";

import Image from "next/image";

export const revalidate = 0;

export async function generateMetadata() {
  return aboutMetadata;
}

// export const metadata = aboutMetadata;

const About = () => {
  return (
    <div>
      {/* First Section */}
      <CommonBanner bannerTitle="About Us" />
      <div className="container-narrow section-gap px-5 sm:px-10 md:px-14 lg:px-20">
        <h2 className="text-3xl lg:text-6xl px-10 lg:px20 text-center mt-8">
          The Perfect Blend of Tea and Tranquility
        </h2>
      </div>

      {/* Second Section */}
      {/* <OurStory /> */}
      <DiscoverUs />

      {/* Third Section */}
      <div className="section-gap bg-[#F9F6EE] pb-10">
        <div className="container px-5 sm:px-10 md:px-14 lg:px-20">
          <div className="text-center content-gap pt-10">
            <div className="text-sm lg:text-base tracking-wide uppercase font-semibold mb-2">
              Core values
            </div>
            <h5 className="text-3xl lg:text-6xl px-20">
              Enjoy the uniqueness we bring to life.
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="md:border-r border-slate-200 mb-8 lg:mb-0">
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
                <p>
                  All of our ingredients are sourced directly from sustainable
                  accredited gardens and all of our packaging is recyclable.
                </p>
              </div>
            </div>
            <div className="lg:border-r border-slate-200 mb-8 lg:mb-0">
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
                <p>
                  We source the finest quality speciality teas, herbs, spices
                  and flowers from around the world. Are you ready to be
                  inspired?
                </p>
              </div>
            </div>
            <div className="md:border-r border-slate-200 mb-8 lg:mb-0">
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
                <p>
                  We are passionate about fresh, small batch blends tha capture
                  the vitality of their ingredients and are bursting with
                  flavour and therapeutic potential.
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
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
                <p>
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
      {/* <AmazingPeople /> */}

      {/* Fifth Section */}
      {/* <div className="section-gap"> */}
        {/* <MarqueeText /> */}
        {/* Company Services */}
        {/* <CompanyServices /> */}
      {/* </div> */}

      {/* Sixth Section */}
      <Subscription />
    </div>
  );
};

export default About;
