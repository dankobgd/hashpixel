const nodemailer = require('nodemailer');

module.exports = class EmailService {
  constructor(body) {
    this.body = body;

    this.mailOptions = {
      from: '<office@hashpixel.com>',
      to: this.body.email,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: `
      <span><strong>Hashpixel</strong> - new contact message</span>
      <br />
      <ul>
        <p><strong>From</strong>: ${this.body.name}</p>
        <p><strong>Email</strong>: ${this.body.email}</p>
        <p><strong>Phone</strong>: ${this.body.phone}</p>
        <p><strong>Message</strong>: ${this.body.message}</p>
      </ul>
      `
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: {
          user: process.env.MAILGUN_USER,
          pass: process.env.MAILGUN_PW,
          api_key: process.env.MAILGUN_API_KEY,
          domain: process.env.MAILGUN_DOMAIN
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }


  sendEmail() {
    this.transporter.sendMail(this.mailOptions, (error, info) => {
      if (error) {
          console.log(error);
      }

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })

  }
}
