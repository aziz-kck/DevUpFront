import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { notify } from "../../../utils/HelperFunction";
import { toast, ToastContainer } from "react-toastify";
import "./payment.css"
import "react-toastify/dist/ReactToastify.css";


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href, // Use the current page URL as the return_url
      },
    });
  
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
        setSuccesMessage(null);
      } else {
        setMessage("An unexpected error occurred.");
        setSuccesMessage(null);
      }
    } else {
      setSuccesMessage("Payment successful!");
      setMessage(null);
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button style={{background: "#4cc424",
        borderRadius: "var(--radius)",
        color: "white",
        border: "0",
        padding: "12px 16px",
        marginTop: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "block",
        }} disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          Pay now
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      {succesMessage && <div style={{color:"green"}} id="payment-message">{succesMessage}</div>}
    </form>
  );
}