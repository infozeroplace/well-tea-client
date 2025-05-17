"use client";

import { env } from "@/config/env";
import { removeCart } from "@/services/features/cart/cartSlices";
import { useAppDispatch, useAppSelector } from "@/services/hook";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

let stripePromise;

async function initializeStripe() {
  if (!stripePromise) {
    stripePromise = await loadStripe(env.stripe_publishable_key);
  }
}

const SuccessScreen = () => {
  const {
    carts: { carts },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { search } = window.location;
  const clientSecret = new URLSearchParams(search).get(
    "payment_intent_client_secret"
  );

  const [loading, setLoading] = useState(true);
  const [stripe, setStripe] = useState(null);

  const [message, setMessage] = useState({
    title: "Payment Successful!",
    message: "Thank you for completing your secure online payment.",
    isError: false,
  });

  useEffect(() => {
    const setupStripe = async () => {
      await initializeStripe();
      setStripe(stripePromise);
    };

    setupStripe();
  }, []);

  useEffect(() => {
    const handleGetPaymentIntent = async () => {
      if (clientSecret && stripe) {
        try {
          const { paymentIntent } = await stripe.retrievePaymentIntent(
            clientSecret
          );

          if (paymentIntent && paymentIntent.status === "succeeded") {
            if (carts?.items?.length > 0) {
              dispatch(removeCart());
            }
          } else {
            setMessage({
              title: "Payment Unsuccessful!",
              message:
                "Please contact to our support team at support@welltea.co",
              isError: true,
            });
          }
        } catch (error) {
          setMessage({
            title: "Something went wrong!",
            message: "Please contact to our support team at support@welltea.co",
            isError: true,
          });
        } finally {
          setLoading(false);
        }
      }
    };

    handleGetPaymentIntent();
  }, [clientSecret, stripe]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className={`text-${
              message.isError ? "error" : "success"
            } w-16 h-16 mx-auto my-6`}
          >
            {message.isError ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              />
            )}
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              {message.title}
            </h3>
            <p className="text-gray-600 my-2 font-brand__font__500">
              {message.message}
            </p>
            <div className="py-10 text-center"></div>
            <div className="py-10 text-center"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessScreen;
