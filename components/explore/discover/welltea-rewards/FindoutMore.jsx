"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";

const FindoutMore = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Accordion className="accordiontitle font-medium">
        <AccordionItem key="1" aria-label="Signing Up" title="Signing Up">
          <div className="mb-3">
            <p className="font-normal mb-2">What is WellTea Rewards?</p>
            <p>
              WellTea Rewards is a loyalty programme offering a vast range of
              rewards to say thanks for shopping with us. You’ll receive free
              gifts, exclusive offers, early access to new releases, and be able
              to take advantage of redeemable points earned through purchases
              both in-store and online.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">Who can join WellTea Rewards?</p>
            <p>
              Everybody is invited to join WellTea Rewards, whether you’re new
              to WellTea or have shopped with us before.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              How do I sign up for WellTea Rewards?
            </p>
            <p>
              Simply follow this{" "}
              <Link href="/login" className="underline text-teagreen-600">
                link
              </Link>{" "}
              and if you have a WellTea online account already, sign in and
              you’ll be able to join WellTea Rewards from your account
              homepage. Alternatively, you can create a WellTea Account and
              you’ll be able to join WellTea Rewards from your account
              homepage. You can also sign up in-store when completing a purchase
              at the till point.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              I always buy in-store. Do I need to create an online account?
            </p>
            <p>
              No. You can sign up in-store and enjoy the benefits of earning
              points and redeeming for future purchases. You can also claim your
              free gift without registering online. However, completing your
              online profile will give you access to many other benefits like
              bonus points and access to your membership details.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              What are the benefits of joining WellTea Rewards?
            </p>
            <p>
              Signing up with us is rewarded in a variety of ways. Not only do
              you get the benefit of earning points which can be redeemed on
              future purchases, but you’ll also get a free gift to redeem on
              your 2nd WellTea Rewards purchase. You’ll also receive a £5
              voucher every year on the anniversary of the day you signed up to
              WellTea Rewards, and because Rewards members get more, you’ll
              receive exclusive discounts and early access to shop newly
              released products.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Earning and Redeeming Points"
          title="Earning and Redeeming Points"
        >
          <div className="mb-3">
            <p className="font-normal mb-2">How do I earn points?</p>
            <p>
              Points are earned by purchasing from stores or our website, and
              through other opportunities, with or without a purchase. If you
              joined in-store, make sure to sign up for your online account to
              access your benefits and rewards. Otherwise, sign in to your
              WellTea account as usual and access your membership benefits
              there. For every £1 you spend you will earn 1 point, every 1 point
              is worth £0.02. For international customers your points value is
              equivalent to the UK points value and all values will be converted
              through the most recent exchange rates.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">How do I redeem my points?</p>
            <p>
              Points are redeemable once they reach a total balance of 50 points
              minimum. Points can be redeemed to reduce the total payable amount
              of your transaction, either in WellTea stores or on the WellTea
              website. You can choose whether you want to redeem your points
              balance partially or in full. For example, if you have 70 points
              and your shopping (excluding delivery if placing an order online)
              comes to £12.40 then you can redeem all your 70 points to reduce
              your shopping bill by £1.40 to £11.00 payable, or you can choose
              to redeem 50 points to reduce your shopping bill by £1 to £11.40
              payable.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              Can I earn points online and redeem them in-store and vice versa?
            </p>
            <p>
              Yes. You can earn and redeem your points anywhere that is
              convenient to you.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              Can I earn and redeem points in another country?
            </p>
            <p>
              Yes, WellTea Rewards is available to anyone who resides in a
              country that either has a WellTea store or that WellTea ships
              to, you can view the full list of countries here.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              What are the WellTea Rewards points worth?
            </p>
            <p>
              For every £1 you spend you will earn 1 point, every 1 point is
              worth £0.02. For international customers your points value is
              equivalent to the UK points value and all values will be converted
              through the most recent exchange rates.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              Where do I view my points balance?
            </p>
            <p>
              Your points balance is visible on your WellTea Rewards account
              page, and you can view this on your WellTea Rewards digital pass.
              When shopping in-store, you can also ask a store staff member and
              they can look it up on the till system for you. Alternatively, you
              can contact our Customer Services team here and they can inform
              you of your points balance.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              What happens to my points if I don’t redeem them?
            </p>
            <p>
              Points are valid for 24 months from the first date of issue.
              Irrespective of which date in any month you earn the points, your
              points will expire on the last day of the final calendar month.
              For example, if you earned 20 points on 20th September 2024, those
              20 points will expire on 30th September 2026.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="WellTea Rewards Pass"
          title="WellTea Rewards Pass"
        >
          <div className="mb-3">
            <p className="font-normal mb-2">
              What is a “WellTea Rewards Pass”?
            </p>
            <p>
              WellTea Rewards Pass is a digital card for loyalty members that
              is attached to WellTea emails and can be downloaded onto Apple or
              Android devices for future use. The pass will have key information
              like your membership number and your latest points balance. It
              will also contain a barcode that can be scanned each time you
              visit our store and make a transaction. By scanning the card, our
              till point staff can recognise you as a WellTea Reward member,
              allocate the latest points earned to your membership account and
              enable you to redeem any points that you may have in your account.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              Where can I find my WellTea Rewards pass and how do I use it?
            </p>
            <p>
              -Your WellTea Rewards digital pass will be sent to you in your
              welcome email where you will be able to download this to your
              mobile wallet by clicking on either the ‘Add to Apple Wallet’ or
              ‘Add to Google Wallet’ buttons. Your digital pass can be used when
              shopping in a WellTea store to link your transaction to your
              WellTea Rewards account. The points you’ve earned in-store will
              be credited to your account but will be pending for seven days.
            </p>
          </div>
          <div className="mb-3">
            <p className="font-normal mb-2">
              Is it mandatory to show the WellTea Reward Pass each time I buy
              with WellTea?
            </p>
            <p>
              No. Although scanning the card is a quicker way to identify
              yourself as a WellTea Rewards member, it is not compulsory to
              have it in hand for you to benefit from the scheme. Simply,
              provide the store staff member with the email address linked to
              your WellTea Rewards account when you purchase, and your points
              will be automatically applied.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FindoutMore;
