import { env } from "@/config/env";
import useToast from "@/hooks/useToast";
import { removeCart } from "@/services/features/cart/cartSlices";
import { useCreatePaymentIntentMutation } from "@/services/features/payment/paymentApi";
import { useAppDispatch } from "@/services/hook";
import {
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { FaStripe } from "react-icons/fa";

const stripePromise = loadStripe(env.stripe_publishable_key);

const StripeWrapper = ({ props, children }) => {
  const grandTotal = Math.round(props.grandTotal) || 0;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: grandTotal * 100,
        currency: "gbp",
        paymentMethodTypes: ["card", "paypal"],
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

const StripePayment = ({ props }) => {
  const {
    isShipping,
    shippingMethodId,
    discount,
    email,
    shippingAddress,
    billingAddress,
    cartId,
    grandTotal,
    onRequiredErrors,
  } = props;

  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const { handleError } = useToast();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "GB",
      currency: "gbp",
      total: {
        label: "Total",
        amount: grandTotal * 100,
      },
      requestPayerEmail: true,
      requestPayerPhone: true,
    });

    // Check payment availability
    pr.canMakePayment().then((result) => {
      console.log("Available payment methods:", result);
      if (result) {
        setPaymentRequest(pr);
      }
    });

    // Handle payment completion
    pr.on("paymentmethod", async (evt) => {
      // Here you would typically:
      // 1. Get a client secret from your backend
      // 2. Confirm the payment
      // 3. Call evt.complete('success') or evt.complete('fail')
    });
  }, [stripe, grandTotal]);

  const validateForm = () => {
    let isValid = true;

    // Validate each field using switch cases
    const validateField = (fieldName, value) => {
      switch (fieldName) {
        case "email":
          if (!value) {
            onRequiredErrors("email", "Email is required!");
            isValid = false;
          }
          break;

        // Shipping address fields
        case "shippingFirstName":
          if (!value) {
            onRequiredErrors("sFirstName", "First name is required!");
            isValid = false;
          }
          break;
        case "shippingLastName":
          if (!value) {
            onRequiredErrors("sLastName", "Last name is required!");
            isValid = false;
          }
          break;
        case "shippingAddress1":
          if (!value) {
            onRequiredErrors("sAddress", "Address is required!");
            isValid = false;
          }
          break;
        case "shippingCity":
          if (!value) {
            onRequiredErrors("sCity", "City is required!");
            isValid = false;
          }
          break;
        case "shippingPostalCode":
          if (!value) {
            onRequiredErrors("sPostalCode", "Postal is required!");
            isValid = false;
          }
          break;
        case "shippingPhone":
          if (!value) {
            onRequiredErrors("sPhone", "Phone is required!");
            isValid = false;
          }
          break;

        // Billing address fields
        case "billingFirstName":
          if (!isShipping && !value) {
            onRequiredErrors("bFirstName", "First name is required!");
            isValid = false;
          }
          break;
        case "billingLastName":
          if (!isShipping && !value) {
            onRequiredErrors("bLastName", "Last name is required!");
            isValid = false;
          }
          break;
        case "billingAddress1":
          if (!isShipping && !value) {
            onRequiredErrors("bAddress", "Address is required!");
            isValid = false;
          }
          break;
        case "billingCity":
          if (!isShipping && !value) {
            onRequiredErrors("bCity", "City is required!");
            isValid = false;
          }
          break;
        case "billingPostalCode":
          if (!isShipping && !value) {
            onRequiredErrors("bPostalCode", "Postal is required!");
            isValid = false;
          }
          break;
        case "billingPhone":
          if (!isShipping && !value) {
            onRequiredErrors("bPhone", "Phone is required!");
            isValid = false;
          }
          break;
      }
    };

    // Validate all fields
    validateField("email", email);
    validateField("shippingFirstName", shippingAddress?.firstName);
    validateField("shippingLastName", shippingAddress?.lastName);
    validateField("shippingAddress1", shippingAddress?.address1);
    validateField("shippingCity", shippingAddress?.city);
    validateField("shippingPostalCode", shippingAddress?.postalCode);
    validateField("shippingPhone", shippingAddress?.phone);

    if (!isShipping) {
      validateField("billingFirstName", billingAddress?.firstName);
      validateField("billingLastName", billingAddress?.lastName);
      validateField("billingAddress1", billingAddress?.address1);
      validateField("billingCity", billingAddress?.city);
      validateField("billingPostalCode", billingAddress?.postalCode);
      validateField("billingPhone", billingAddress?.phone);
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!stripe || !elements) return;

    try {
      // 1. First validate the PaymentElement
      const { error: submitError } = await elements.submit();
      if (submitError) return;

      if (!validateForm()) {
        return;
      }

      setIsProcessing(true);

      // 2. Then fetch the PaymentIntent
      const { data: clientSecret } = await createPaymentIntent({
        data: {
          billingAddress: billingAddress || {},
          shippingAddress: shippingAddress || {},
          coupon: discount?.coupon || "",
          cartId: cartId || "",
          email: email || "",
          shippingMethodId: shippingMethodId || "",
        },
      }).unwrap();

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
        handleError(errorMessage);
        return;
      }

      dispatch(removeCart());
      if (paymentIntent.status === "succeeded") {
        setMessage("Payment successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      setIsProcessing(false);
      handleError(
        error?.data?.errorMessages[0]?.message ||
          "An unexpected error occurred while processing the payment. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="w-full">
        {paymentRequest && (
          <PaymentRequestButtonElement
            options={{
              paymentRequest,
              style: {
                paymentRequestButton: {
                  type: "buy",
                  theme: "dark",
                  height: "48px",
                },
              },
            }}
          />
        )}
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            disabled={isProcessing || !stripe || !elements}
            className="bg-teagreen-800 hover:bg-teagreen-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out w-full mt-3"
          >
            <span>
              {isProcessing ? "Processing... " : `Pay £${grandTotal}`}
            </span>
          </button>
          {message && (
            <div className="text-brand__font__size__sm mt-1">{message}</div>
          )}
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

const WrappedForm = (props) => (
  <StripeWrapper props={props}>
    <StripePayment props={props} />
  </StripeWrapper>
);

export default WrappedForm;
