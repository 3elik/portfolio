const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const isAdmin = function (req, res, next) {
  if (req.session.isAdmin) {
    return next();
  }
  res.json({status: 'У Вас нет прав админа!'});
};

router.post('/', isAdmin, (req, res) => {
  console.log(req.body);
  if (!req.body.title || !req.body.date || !req.body.content) {
    return res.json({status: 'Укажите данные!'});
  }
  const Model = mongoose.model('blog');
  let item = new Model({title: req.body.title, date: req.body.date, content: req.body.content});
  item.save().then(
    (i) => {return res.json({status: 'Запись успешно добавлена'});},
    (e) => {
      const error = Object
        .keys(e.errors)
        .map(key => e.errors[key].message)
        .join(', ');
      res.json({status: 'При добавление записи произошла ошибка: ' + error});
    }
  );
});

module.exports = router;