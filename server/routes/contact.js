const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact');
const { validateBody, contactSchema } = require('../middleware/validation');


router.post('/', validateBody(contactSchema), ContactController.contact_post);


module.exports = router;
