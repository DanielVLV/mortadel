/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Dialog from "@mui/material/Dialog";
import CheckoutForm from './CheckoutForm/CheckoutForm';


function PaymentForm({ openPayment, setOpenPayment, summaryPrice }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  //   const [open, setOpen] = useState(true);
  //   const PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

  //   const stripeTestPromise = loadStripe(PUBLIC_KEY);
  //   console.log(PUBLIC_KEY);

  const handleClose = () => {
    setOpenPayment(false);
  };

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
      body: JSON.stringify({ summaryPrice })
    }).then(async (res) => {
      const { clientSecret } = await res.json();

      //   console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div>
      <Dialog
        fullScreen
        // width="xl"
        // maxWidth="xl"
        open={openPayment}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <h1>REACT STRIPE PAYMENT FORM</h1>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </Dialog>



    </div>
  );
//   return (
//     <div>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{product?.title}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             <img src={product?.img} />
//             Описание:
//             {' '}
//             {product?.description}
//             <br />
//             Состав:
//             {' '}
//             {product?.fullDescription}
//             <br />
//             Вес:
//             {' '}
//             {product?.weight}
//             <br />
//             <FormOrder productId={product?.id} />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Закрыть</Button>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose}>Agree</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
}

export default PaymentForm;
