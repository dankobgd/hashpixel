const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports.sendUserContactConfirmationEmail = function (body) {
  const mailOpts = {
    from: '"Hashpixel" <office@hashpixel.xyz>',
    to: body.email,
    subject: 'Contact success confirmation',
    html: `
      <p>Hello ${body.name}, thanks for contacting us!</p>
      <p>We will reply as soon as possible!</p>`
  };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PW,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.sendMail(mailOpts, (err, info) => {
    if (err) {
      console.log('err: ', err);
    }

    console.log('info: ', info);
  })
}




module.exports.recieveContactEmail = function (body) {
  const mailOpts = {
    from: '"Hashpixel" <office@hashpixel.xyz>',
    to: 'office@hashpixel.xyz',
    subject: 'Hashpixel - New Contact',
    html: `
    <p><strong>Hashpixel</strong> - new contact message</p>
    <br />
    <p>Information about the user</p>
    <br />
    <ul>
      <p><strong>From</strong>: ${body.name}</p>
      <p><strong>Email</strong>: ${body.email}</p>
      <p><strong>Phone</strong>: ${body.phone}</p>
      <p><strong>Message</strong>: ${body.message}</p>
    </ul>
    `
  };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PW,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.sendMail(mailOpts, (err, info) => {
    if (err) {
      console.log('err: ', err);
    }

    console.log('info: ', info);
  })
}
