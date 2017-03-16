const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* GET works page. */
router.get('/', function(req, res, next) {
  let obj = {
    title: "Мои работы"
  };
  const Model = mongoose.model('work');
  Model.find().then(items => {
    console.log(items);
    if (!items) {
      items = [];
    }
    Object.assign(obj, {items:items});
    res.render('pages/works', obj);
  });
});

module.exports = router;

