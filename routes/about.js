var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET about page. */
router.get('/', function(req, res, next) {
  let obj = {
  };
  const Model = mongoose.model('skills');
  Model.find().then(items => {
    Object.assign(obj, {skills:items});
    let contacts = [
      {
        "item": "skype",
        "text": "v_3elik_v"
      },
      {
        "item": "envelope2",
        "text": "3ellik@gmail.com"
      },
      {
        "item": "phone2",
        "text": "+7 986 988 35 63"
      },
      {
        "item": "map_marker",
        "text": "Саратов, ул. Зеркальная, д. 4"
      }
    ];
    Object.assign(obj, {
      contacts: contacts,
      text1: "Я веб разработчик из Запорожья. Мне 32 года. Я занимаюсь разработкой современных сайтов и приложений. Мне нравиться делать интересные и современные проекты.",
      text2: "Этот сайт я делал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу свой контент. А пока смотрите, как тут все классно и красиво!"
    });
    res.render('pages/about', obj);
  });
});

module.exports = router;

