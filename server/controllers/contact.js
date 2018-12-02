const { sendUserContactConfirmationEmail, recieveContactEmail } = require('../services/mailer');



module.exports.contact_post = (req, res, next) => {
  const { body } = req;
  console.log('BODY', body);
  sendUserContactConfirmationEmail(body);
  recieveContactEmail(body);
}