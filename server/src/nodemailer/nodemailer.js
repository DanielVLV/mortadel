const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true только для 465 порта! false для остальных!
    auth: {
      user: 'mortadeltest@mail.ru',
      pass: 'gKVNR3Us1Cxajbg5kDVE',
    },
  },
  {
    from: 'Mailer test <mortadeltest@mail.ru>',
    // to: '<mortadeltest@mail.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
