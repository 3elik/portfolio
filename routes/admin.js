const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const isAdmin = function (req, res, next) {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/');
};

/* GET admin page. */
router.get('/', isAdmin, function(req, res) {
  let obj = {
  };
  const Model = mongoose.model('skills');
  Model.find().then(items => {
    Object.assign(obj, {skills:items});
    res.render('pages/admin', obj);
  });
});

module.exports = router;
