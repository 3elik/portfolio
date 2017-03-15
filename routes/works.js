var express = require('express');
var router = express.Router();

/* GET works page. */
router.get('/', function(req, res, next) {
  let obj = {
    works:  [
      {
        "img" : "./assets/img/work-1.png",
        "title" : "Сайт школы онлайн образования",
        "technologies" : "HTML, CSS, Javascript",
        "link" : "#"
      },
      {
        "img" : "./assets/img/work-2.png",
        "title" : "Агентство интернет решений",
        "technologies" : "Wordpress, PHP, CSS, jQuery",
        "link" : "#"
      },
      {
        "img" : "./assets/img/work-3.png",
        "title" : "LoftBlog - Портал видеоуроков",
        "technologies" : "Wordpress, PHP, CSS, jQuery",
        "link" : "#"
      },
      {
        "img" : "./assets/img/work-4.png",
        "title" : "Сайт студии йоги AtmaYoga",
        "technologies" : "HTML, CSS, Javascript",
        "link" : "#"
      }
    ]
  };
  res.render('pages/works', obj);
});

module.exports = router;

