const router = require('express').Router();
const mailer = require('../nodemailer/nodemailer');

router.post('/order', async (req, res) => {
  try {
    console.log(req.body);

    const message = {
    //   from: 'Mailer test <nettie12@ethereal.email>',
      to: ['mortadeltest@mail.ru', 'odindlrus@mail.ru'],
      //   to: 'odindlrus@mail.ru',
      subject: 'NODEMAILER',
      text: `Mail text, req.body: , ${req.body.body}`,
    };
    mailer(message);

    res.json({ msg: 'message sent' });
  } catch (error) {
    console.error({ msg: error });
  }
});

module.exports = router;
