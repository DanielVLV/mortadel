const router = require('express').Router;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/order', async (req, res) => {
//   const { items } = req.body;
//   const items = [{ id: 1, quantity: 2 }, { id: 3, quantity: 4 }];

  //   const lineItems = [];
  //   items.forEach((item) => lineItems.push({
  //     price: item.id,
  //     quantity: item.quantity,
  //   }));

//   const session = await stripe.checkout.sessions.create({
//     line_items: lineItems,
//     mode: 'payment',
//     success_url: 'http://localhost:3003/success',
//     cancel_url: 'http://localhost:3003/cancel',
//   });
//   try {
//     res.send(JSON.stringify({ url: session.url }));
//     // res.sendStatus(200);
//   } catch (error) {
//     res.send({ msg: error.message });
//   }
});

module.exports = router;
