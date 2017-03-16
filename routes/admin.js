var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  let obj = {
  };
  res.render('pages/admin', obj);
});

module.exports = router;
