import React from "react";
import { CommonBanner, FAQsCollapse } from "@/components";

const FAQs = () => {
  const faqContents = [
    {
      question: "What is the return policy?",
      answer:
        "We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we do! We offer international shipping to most countries.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order has been shipped, you will receive an email with your tracking information.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel your order within 24 hours of placing it. Please contact us as soon as possible if you wish to cancel.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer gift cards in various denominations. They make the perfect gift for any occasion!",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team via email at",
    },
  ];

  // Subscriptions data
  const rewardssFAQs = [
    {
      question: "What is WellTea Rewards?",
      answer:
        "WellTea Rewards is a loyalty programme offering a vast range of rewards to say thanks for shopping with us. You’ll receive free gifts, exclusive offers, early access to new releases, and be able to take advantage of redeemable points earned through purchases both in-store and online.",
    },
    {
      question: "Who can join WellTea Rewards?",
      answer:
        "Everybody is invited to join WellTea Rewards, whether you’re new to WellTea or have shopped with us before.",
    },
    {
      question: "How do I sign up for WellTea Rewards?",
      answer:
        "Simply follow this link. If you have a WellTea online account already, sign in and you’ll be able to join WellTea Rewards from your account homepage. Alternatively, you can create a WellTea Account and join WellTea Rewards from your account homepage. You can also sign up in-store when completing a purchase at the till point.",
    },
    {
      question: "I always buy in-store. Do I need to create an online account?",
      answer:
        "No. You can sign up in-store and enjoy the benefits of earning points and redeeming for future purchases. However, completing your online profile will give you access to additional benefits like bonus points and access to your membership details.",
    },
    {
      question: "What are the benefits of joining WellTea Rewards?",
      answer:
        "Joining WellTea Rewards allows you to earn points redeemable on future purchases, receive a free gift on your 2nd Rewards purchase, and enjoy exclusive discounts and early access to new products. Members also receive a £5 voucher every year on the anniversary of joining.",
    },
    {
      question: "How do I earn points?",
      answer:
        "Points are earned by purchasing in-store or online. For every £1 you spend, you earn 1 point, which is worth £0.02. International customers earn equivalent points based on exchange rates.",
    },
    {
      question: "How do I redeem my points?",
      answer:
        "Points can be redeemed once you have a minimum balance of 50 points. They can be used to reduce the total payable amount of your transaction in-store or online, either partially or fully.",
    },
    {
      question:
        "Can I earn points online and redeem them in-store and vice versa?",
      answer:
        "Yes. Points can be earned and redeemed across both online and in-store purchases.",
    },
    {
      question: "What happens to my points if I don’t redeem them?",
      answer:
        "Points are valid for 24 months from the date of issue. If unused, they will expire on the last day of the final calendar month after 24 months.",
    },
    {
      question: "What is a WellTea Rewards Pass?",
      answer:
        "The WellTea Rewards Pass is a digital card for loyalty members. It contains key information like your membership number and points balance and can be scanned in-store for transactions.",
    },
    {
      question: "Where can I find my WellTea Rewards pass and how do I use it?",
      answer:
        "Your digital pass is sent in your welcome email and can be downloaded to your mobile wallet. It can be scanned in-store to link transactions to your account.",
    },
    {
      question: "What happens if I return an order?",
      answer:
        "If you return an order within the valid returns period, points earned will be deducted from your balance. Points redeemed for the purchase will be credited back to your account.",
    },
    {
      question: "How do I opt out of WellTea Rewards?",
      answer:
        "You can opt out of WellTea Rewards by contacting the Customer Services team. They will assist you with the process.",
    },
  ];

  return (
    <div>
      <CommonBanner
        bannerTitle="FAQs"
        bannerDescription={
          "Got a burning question? Check the frequently asked questions below - or contact us if you don't find what you're looking for, and we'll be happy to help."
        }
      />
      <div className="container px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 banner-gap">
        <div className="flex flex-col items-center lg:items-end">
          <FAQsCollapse
            faqTitle={"Delivery and returns"}
            faqContents={faqContents}
          />
          <FAQsCollapse faqTitle={"Ordering"} faqContents={faqContents} />
          <FAQsCollapse faqTitle={"General FAQs"} faqContents={faqContents} />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <FAQsCollapse
            faqTitle={"Whittard Rewards"}
            faqContents={rewardssFAQs}
          />
          <FAQsCollapse faqTitle={"Subscriptions"} faqContents={faqContents} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
