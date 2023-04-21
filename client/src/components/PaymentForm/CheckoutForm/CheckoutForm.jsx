import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
        // return_url: 'http://localhost:3000/payment/completion'
      },
      redirect: 'if_required'
    });


    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      const newLocal = `Payment status: ${paymentIntent.status} 🤑`;
      // console.log(newLocal);
      setMessage(newLocal);
    } else if (paymentIntent && paymentIntent.status === 'insufficient_funds') {
      const newLocal = `Payment status: ${paymentIntent.status} 😱`;
      // console.log(newLocal);
      setMessage(newLocal);
    } else {
      setMessage("An unexpected error occured.");
    }

    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // }

    setIsProcessing(false);

    setTimeout(() => {

      window.location.href = 'http://localhost:3000/';
    }, 1500);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
        width: '800px',

      }}
      id="payment-form"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" />
      <button type="submit" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
      <div
        style={{
          height: '200px',
          width: '400px',
          textAlign: 'center'
        }}
        id="payment-message"
      >
        {message}
      </div>
      )}
    </form>
  );
}

export default CheckoutForm;
