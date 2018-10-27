const EmailService = require('../services/EmailService');


module.exports.contact_post = (req, res, next) => {
  const mailer = new EmailService(req.body);
  mailer.sendEmail();
}