/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get('/config', (req, res) => {
  // console.log(process.env.STRIPE_PUBLIC_KEY);
  res.send({ publishableKey: process.env.STRIPE_PUBLIC_KEY });
});

router.post('/intention', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount: 100,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    // console.log(paymentIntent, '<><><><>><<<<<<<<<<');
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

router.post('/order', async (req, res) => {
  // const { items } = req.body;
  const items = [{ id: 1, quantity: 2 }, { id: 3, quantity: 4 }];

  const lineItems = [];

  for (const item of items) {
    const price = stripe.prices.retrieve(item.id);

    lineItems.push({
      price: price.id,
      quantity: item.quantity,
    });
  }
  // items.forEach((item) => lineItems.push({
  //   price: item.id,
  //   quantity: item.quantity,
  // }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3003/success',
    cancel_url: 'http://localhost:3003/cancel',
  });
  try {
    res.send(JSON.stringify({ url: session.url }));
    // res.sendStatus(200);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
