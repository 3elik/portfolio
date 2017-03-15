var express = require('express');
var router = express.Router();

/* GET works page. */
router.get('/', function(req, res, next) {
  let obj = {
    about: {
      "skills": {
        "text": "Больше всего меня привлекает Backend разработка, но я также знаком и могу решать не сложные задачи на Frontend. Но давайте по порядку",
        "skills": {
          "frontend": {
            "title": "Frontend",
            "dia": [
              {
                "title": "HTML5",
                "value": 70
              },
              {
                "title": "CSS3",
                "value": 60
              },
              {
                "title": "JavaScript & jQuery",
                "value": 60
              }
            ]
          },
          "backend": {
            "title": "Backend",
            "dia": [
              {
                "title": "PHP",
                "value": 80
              },
              {
                "title": "mySQL",
                "value": 75
              },
              {
                "title": "Node.js & npm",
                "value": 40
              },
              {
                "title": "Mongo.db",
                "value": 40
              }
            ]
          },
          "workflow": {
            "title": "WorkFlow",
            "dia": [
              {
                "title": "Git",
                "value": 75
              },
              {
                "title": "Gulp",
                "value": 80
              },
              {
                "title": "Bower",
                "value": 60
              }
            ]
          }
        }
      },
      "text": {
        "p1": "Я веб разработчик из Запорожья. Мне 32 года. Я занимаюсь разработкой современных сайтов и приложений. Мне нравиться делать интересные и современные проекты.",
        "p2": "Этот сайт я делал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу свой контент. А пока смотрите, как тут все классно и красиво!"
      },
      "contacts": [
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
      ]
    }
  };
  res.render('pages/about', obj);
});

module.exports = router;

