import { SectionTitle } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Subcriptions = () => {
  return (
    <div className="container px-4 lg:px-20 mt-10">
      <Image
        src="/images/subscriptions-header.webp"
        width={1081}
        height={210}
        alt="Subscribtion Header"
        className="w-full content-gap"
      />
      <h2 className="text-3xl lg:text-6xl px-20 text-center content-gap">
        Subscribe and Never Run Out
      </h2>
      <div className="text-center section-gap">
        <p className="font-normal">
          Your favourite brews on your doorstep, as often as you’d like.
        </p>
        <p>
          If you’re a UK customer, it takes less than five minutes to set up,
          and you never have to think about your cupboards going empty again.
        </p>
      </div>

      <div className="container-narrow bg-[#F4F0F0] px-4 py-8 text-center section-gap">
        <SectionTitle title="Why Subscribe?" />
        <p className="content-gap">
          Life can be busy, and your favourite brew should always be by your
          side. Your subscriptions make sure that’s always the case.
        </p>
        <p>
          You can manage your orders in one place, simply log into your account
          and go to <span className="font-normal">“My Subscriptions”</span>.
        </p>
      </div>

      <div className="container-narrow bg-[#F4F0F0] px-4 py-8 text-center section-gap">
        <SectionTitle title="How to Set Up a Subscription" />
        <p className="font-normal mb-2 content-gap">
          It’s simple to do, easy to manage and is one less thing on your to do
          list. Just follow the steps below and leave the rest to us.
        </p>
        <div>
          <div className="flex flex-col justify-center content-gap gap-2">
            <div className="text-4xl">1.</div>
            <div className="text-xl">PICK YOUR BREW</div>
            <Image
              src="/images/subscriptions-header.webp"
              width={1081}
              height={210}
              alt="Subscribtion Header"
              className="mx-auto w-64"
            />
          </div>
          <div className="flex flex-col justify-center content-gap gap-2">
            <div className="text-4xl">2.</div>
            <div className="text-xl">DECIDE WHEN</div>
            <Image
              src="/images/subscriptions-header.webp"
              width={1081}
              height={210}
              alt="Subscribtion Header"
              className="mx-auto w-64"
            />
          </div>
          <div className="flex flex-col justify-center content-gap gap-2">
            <div className="text-4xl">3.</div>
            <div className="text-xl">MAKE AMENDS</div>
            <Image
              src="/images/subscriptions-header.webp"
              width={1081}
              height={210}
              alt="Subscribtion Header"
              className="mx-auto w-64"
            />
          </div>
          <div className="flex flex-col justify-center content-gap gap-2">
            <div className="text-4xl">4.</div>
            <div className="text-xl">SET UP YOUR SUBSCRIPTION</div>
            <Image
              src="/images/subscriptions-header.webp"
              width={1081}
              height={210}
              alt="Subscribtion Header"
              className="mx-auto w-64"
            />
          </div>
        </div>
      </div>

      <div className="container-narrow px-4 py-8 text-center section-gap">
        <SectionTitle title="Subscriptions FAQs" />
        <p className="mb-2 content-gap">
          These are three of our most popular Subscriptions FAQs.
        </p>
        <div className="content-gap">
          <div className="font-normal bg-[#F4F0F0] mb-2">
            What is included in my subscription?
          </div>
          <p>
            It's completely up to you. You can choose a mixture from our tea,
            coffee, hot chocolate, and instant tea to include in your
            subscription. The frequency and quantity is up to you.
          </p>
        </div>

        <div>
          <div className="font-normal bg-[#F4F0F0] mb-2">
            Can I subscribe if I’m outside the UK?
          </div>
          <p>
            Unfortunately, our subscriptions service is only currently available
            to customers within the UK.
          </p>
        </div>
      </div>

      <div className="section-gap text-center">
        <h1 className="uppercase text-center text-2xl md:text-4xl text-teagreen-800 mb-2">
          Got More Questions?
        </h1>
        <Link
          href={"/explore/discover/faqs"}
          className="underline px-4 py-2 text-sm bg-teagreen-600 text-white"
        >
          SEE ALL FAQS
        </Link>
      </div>
    </div>
  );
};

export default Subcriptions;
