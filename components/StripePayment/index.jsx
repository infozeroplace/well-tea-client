import axios from "@/api/axios";
import { env } from "@/config/env";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { FaStripe } from "react-icons/fa";

const stripePromise = loadStripe(env.stripe_publishable_key);

const StripeWrapper = ({ grandTotal, children }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: grandTotal * 100,
        currency: "gbp",
        appearance: {
          variables: {
            colorPrimary: "#13a800",
          },
        },
      }}
    >
      {children}
    </Elements>
  );
};

const StripePayment = ({ grandTotal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      // 1. First validate the PaymentElement
      const { error: submitError } = await elements.submit();
      if (submitError) {
        console.error("Form validation failed:", submitError);
        return;
      }

      // 2. Then fetch the PaymentIntent
      const {
        data: { data: clientSecret },
      } = await axios.post(
        "/public/payment/create-payment-intent-test",
        { amount: grandTotal * 100 } // Send amount in cents
      );

      // 3. Finally confirm the payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/`,
        },
        redirect: "if_required",
      });

      if (error) {
        const errorMessage =
          error.type === "card_error" || error.type === "validation_error"
            ? error.message
            : "An unexpected error occurred. Please try again.";
        setMessage(errorMessage);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        setMessage("Payment successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setMessage("Payment is still processing. Check later.");
      }
    } catch (error) {
      setMessage(
        "An unexpected error occurred while processing the payment. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <PaymentElement
            options={{
              wallets: {
                applePay: "auto", // or 'always' or 'auto'
                googlePay: "auto", // or 'always' or 'auto'
              },
              layout: "tabs",
            }}
          />
          <button
            disabled={isProcessing || !stripe || !elements}
            className="bg-teagreen-800 hover:bg-teagreen-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out w-full mt-3"
          >
            <span>
              {isProcessing ? "Processing... " : `Pay £${grandTotal}`}
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
};

const WrappedForm = ({ grandTotal = 0 }) => (
  <StripeWrapper grandTotal={grandTotal}>
    <StripePayment grandTotal={grandTotal} />
  </StripeWrapper>
);

export default WrappedForm;
