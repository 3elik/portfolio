var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let obj = {
    socials : [
      {
        item: 'vk',
        link: 'https://vk.com/id13047302'
      },
      {
        item: 'github',
        link: 'https://github.com/3elik'
      },
      {
        item:'in',
        link: 'https://www.linkedin.com/in/alex-herbut-277343106/'
      }
    ]
  };
  res.render('pages/index', obj);
});

module.exports = router;

