const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const crypto = require('crypto');

router.post('/', (req, res) => {
  if (!req.body.login || !req.body.pass) {
    return res.json({status: 'Укажите логин и пароль!'});
  }

  const Model = mongoose.model('user');
  const password = crypto.createHash('md5').update(req.body.pass).digest('hex');

  Model.findOne({login: req.body.login, password: password}).then(item => {
    if (!item) {
      req.session.isAdmin = false;
      res.json({status: 'Логин и/или пароль введены неверно!'});
    } else {
      req.session.isAdmin = true;
      res.json({status: '1'});
    }
  });
});

module.exports = router;
