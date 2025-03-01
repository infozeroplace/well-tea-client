"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { FaStripe } from "react-icons/fa";

export default function CheckoutForm({
  grandTotal = 0,
  user,
  email,
  shippingAddress,
  billingAddress,
  useSameShipping,
  onShowAlert,
  loading,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !shippingAddress ||
      !email ||
      !shippingAddress.country ||
      !shippingAddress.city ||
      !shippingAddress.firstName ||
      !shippingAddress.lastName ||
      !shippingAddress.address1 ||
      !shippingAddress.postalCode ||
      !shippingAddress.phone
    ) {
      return onShowAlert("Please fill out required fields");
    } else if (
      !useSameShipping &&
      (!billingAddress ||
        !email ||
        !billingAddress.country ||
        !billingAddress.city ||
        !billingAddress.firstName ||
        !billingAddress.lastName ||
        !billingAddress.address1 ||
        !billingAddress.postalCode ||
        !billingAddress.phone)
    ) {
      return onShowAlert("Please fill out required fields");
    }

    // Ensure Stripe.js has loaded before proceeding
    if (!stripe || !elements) {
      return setMessage("Stripe has not loaded yet. Please try again.");
    }

    // Set processing state
    setIsProcessing(true);

    try {
      // Attempt to confirm the payment
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url:
            typeof window !== "undefined"
              ? `${window.location.origin}/order-placed`
              : undefined,
        },
        redirect: "if_required",
      });
      // Handle errors from Stripe
      if (error) {
        const errorMessage =
          error.type === "card_error" || error.type === "validation_error"
            ? error.message
            : "An unexpected error occurred. Please try again.";
        setMessage(errorMessage);
      } else if (paymentIntent?.status === "succeeded") {
        // If payment is successful, clear local storage and show success message
        localStorage.removeItem("paymentIntent");
        setMessage("Payment successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/profile";
        }, 2000);
      } else {
        setMessage(
          "Payment is still pending. Please wait or check your email for updates."
        );
      }
    } catch (err) {
      setMessage(
        "An unexpected error occurred while processing the payment. Please try again."
      );
    } finally {
      // Reset processing state
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            disabled={loading || isProcessing || !stripe || !elements}
            className="bg-teagreen-800 hover:bg-teagreen-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out w-full mt-3"
          >
            <span>
              {isProcessing ? "Processing... " : `Pay $${grandTotal}`}
            </span>
          </button>
          {message && <div>{message}</div>}
        </form>
      </div>
      <div className="flex items-center gap-x-3 text-text__gray__2">
        <div className="flex items-center gap-x-1">
          <span>Powered by</span> <FaStripe size={35} className="mt-0.5" />
        </div>
      </div>
    </div>
  );
}
