var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  let obj = {
    blog: {
      "articles": [
        {
          "id": 4,
          "title": "Самое важное в SCSS",
          "date": "22 ноября 2016",
          "text": "<p>Quisque egestas elementum risus ut laoreet. Sed egestas nunc eget magna euismod ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante ut augue sodales elementum in id nulla. Sed finibus nulla non dolor pretium, eget suscipit diam porttitor. Sed elementum nulla sed est cursus, et vestibulum tortor lobortis. Morbi tristique non dolor vel iaculis. Pellentesque id auctor diam. Donec vel auctor elit. Nam vitae ullamcorper sapien. Sed at consectetur est, id vulputate elit. Ut sodales posuere lobortis. Donec elit turpis, egestas congue magna id, tincidunt efficitur mauris. Pellentesque urna quam, lacinia at sapien eget, maximus aliquam sem. Morbi ullamcorper turpis rutrum venenatis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Sed varius quis ex eu consectetur. Duis pulvinar auctor orci a tempus. Maecenas metus nunc, ultricies id porttitor ut, mattis quis libero. Donec aliquam ipsum sed posuere fringilla. In libero purus, dictum at condimentum ac, auctor et neque. Aliquam a molestie arcu. Curabitur eu nisi vitae elit ullamcorper pulvinar.</p>"
        },
        {
          "id": 3,
          "title": "Приёмы верстки, без которых необходится не один сайт",
          "date": "13 ноября 2016",
          "text": "<p>Quisque egestas elementum risus ut laoreet. Sed egestas nunc eget magna euismod ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante ut augue sodales elementum in id nulla. Sed finibus nulla non dolor pretium, eget suscipit diam porttitor. Sed elementum nulla sed est cursus, et vestibulum tortor lobortis. Morbi tristique non dolor vel iaculis. Pellentesque id auctor diam. Donec vel auctor elit. Nam vitae ullamcorper sapien. Sed at consectetur est, id vulputate elit. Ut sodales posuere lobortis. Donec elit turpis, egestas congue magna id, tincidunt efficitur mauris. Pellentesque urna quam, lacinia at sapien eget, maximus aliquam sem. Morbi ullamcorper turpis rutrum venenatis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Sed varius quis ex eu consectetur. Duis pulvinar auctor orci a tempus. Maecenas metus nunc, ultricies id porttitor ut, mattis quis libero. Donec aliquam ipsum sed posuere fringilla. In libero purus, dictum at condimentum ac, auctor et neque. Aliquam a molestie arcu. Curabitur eu nisi vitae elit ullamcorper pulvinar.</p>"
        },
        {
          "id": 2,
          "title": "Самый необходимый набор Gulp плагинов",
          "date": "3 ноября 2016",
          "text": "<p>Quisque egestas elementum risus ut laoreet. Sed egestas nunc eget magna euismod ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante ut augue sodales elementum in id nulla. Sed finibus nulla non dolor pretium, eget suscipit diam porttitor. Sed elementum nulla sed est cursus, et vestibulum tortor lobortis. Morbi tristique non dolor vel iaculis. Pellentesque id auctor diam. Donec vel auctor elit. Nam vitae ullamcorper sapien. Sed at consectetur est, id vulputate elit. Ut sodales posuere lobortis. Donec elit turpis, egestas congue magna id, tincidunt efficitur mauris. Pellentesque urna quam, lacinia at sapien eget, maximus aliquam sem. Morbi ullamcorper turpis rutrum venenatis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Sed varius quis ex eu consectetur. Duis pulvinar auctor orci a tempus. Maecenas metus nunc, ultricies id porttitor ut, mattis quis libero. Donec aliquam ipsum sed posuere fringilla. In libero purus, dictum at condimentum ac, auctor et neque. Aliquam a molestie arcu. Curabitur eu nisi vitae elit ullamcorper pulvinar.</p>"
        },
        {
          "id": 1,
          "title": "Почему я выбрал Pug",
          "date": "3 ноября 2016",
          "text": "<p>Quisque egestas elementum risus ut laoreet. Sed egestas nunc eget magna euismod ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante ut augue sodales elementum in id nulla. Sed finibus nulla non dolor pretium, eget suscipit diam porttitor. Sed elementum nulla sed est cursus, et vestibulum tortor lobortis. Morbi tristique non dolor vel iaculis. Pellentesque id auctor diam. Donec vel auctor elit. Nam vitae ullamcorper sapien. Sed at consectetur est, id vulputate elit. Ut sodales posuere lobortis. Donec elit turpis, egestas congue magna id, tincidunt efficitur mauris. Pellentesque urna quam, lacinia at sapien eget, maximus aliquam sem. Morbi ullamcorper turpis rutrum venenatis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Sed varius quis ex eu consectetur. Duis pulvinar auctor orci a tempus. Maecenas metus nunc, ultricies id porttitor ut, mattis quis libero. Donec aliquam ipsum sed posuere fringilla. In libero purus, dictum at condimentum ac, auctor et neque. Aliquam a molestie arcu. Curabitur eu nisi vitae elit ullamcorper pulvinar.</p>"
        }
      ]
    }
  };
  res.render('pages/blog', obj);
});

module.exports = router;

