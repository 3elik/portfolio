const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config.json');
const smtpTransport = require('nodemailer-smtp-transport');

//send contact data
router.post('/', function(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.msg) {
    return res.json({status: 'Укажите данные!'});
  }

  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: config.mail.user,
      pass: config.mail.pass
    }
  }));

  const mailOptions = {
    from: req.body.email,
    to: config.mail.user,
    subject: config.mail.subject,
    text: 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage:\n' + req.body.msg
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({status: 'При отправке письма произошла ошибка'});
    }
    res.json({status: 'Письмо успешно отправлено'});
  });
});

module.exports = router;

