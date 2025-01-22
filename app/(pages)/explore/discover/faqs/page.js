import React from 'react';
import FaqSection from './FaqSection';

const FAQs = () => {
  const faqContents = [
    {
      question: "What is the return policy?",
      answer: "We have a 30-day return policy, which means you have 30 days after receiving your item to request a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we do! We offer international shipping to most countries."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has been shipped, you will receive an email with your tracking information."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 24 hours of placing it. Please contact us as soon as possible if you wish to cancel."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer gift cards in various denominations. They make the perfect gift for any occasion!"
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team via email at"
    }
  ]
  return (
    <div>
      <FaqSection faqContents={faqContents}/>
    </div>
  )
}

export default FAQs