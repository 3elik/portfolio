var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET admin page. */
router.get('/', function(req, res, next) {
  let obj = {
  };
  const Model = mongoose.model('skills');
  Model.find().then(items => {
    Object.assign(obj, {skills:items});
    res.render('pages/admin', obj);
  });
});

module.exports = router;
