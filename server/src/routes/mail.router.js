const router = require('express').Router();
const mailer = require('../nodemailer/nodemailer');

router.post('/order', async (req, res) => {
  try {
    console.log(req.body);

    const message = {
    //   from: 'Mailer test <nettie12@ethereal.email>',
      to: ['mortadeltest@mail.ru'],
      //   to: 'odindlrus@mail.ru',
      subject: 'NODEMAILER',
      text: `Номер телефона: ${req.body.form.phone}, 
            Имя: ${req.body.form.name}, 
            Артикул товара: ${req.body.productId}`,
    };
    mailer(message);

    res.json({ msg: 'message sent' });
  } catch (error) {
    console.error({ msg: error });
  }
});

module.exports = router;
