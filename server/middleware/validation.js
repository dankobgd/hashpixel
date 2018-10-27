const Joi = require('joi');
const joiErrors = require('./joiErrors');


// validate request query params
module.exports.validateParam = (schema, name) => {
  return (req, res, next) => {
    Joi.validate({ param: req['params'][name] }, schema, joiErrors,  (err, val) => {
      if (err) {
        return res.status(400).json(err);
      }

      req.params[name] = val.params;
      next();
    });
  }
}


// validate request body
module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    Joi.validate(req.body, schema, joiErrors, (err, val) => {
      if (err) {
        return res.status(400).json(err);
      }

      req.body = val;
      next();
    });
  }
}


module.exports.contactSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  email: Joi.string().max(50).email().required(),
  phone: Joi.string().min(8).max(12).required(),
  message: Joi.string().min(5).max(500).required(),
})
