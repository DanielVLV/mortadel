/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

function PaymentForm() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  //   const PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

  //   const stripeTestPromise = loadStripe(PUBLIC_KEY);
  //   console.log(PUBLIC_KEY);

  useEffect(() => {
    fetch('http://localhost:3003/stripe/config').then(async (res) => {
      const { publishableKey } = await res.json();

      //   console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3003/stripe/intention', {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
    }).then(async (res) => {
      const { clientSecret } = await res.json();

      //   console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>

      <h1>REACT STRIPE PAYMENT FORM</h1>
      {stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
      )}


    </>

  );
}

export default PaymentForm;
