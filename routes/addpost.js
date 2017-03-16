const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/', (req, res) => {
  //требуем наличия заголовка, даты и текста
  console.log(req.body);
  if (!req.body.title || !req.body.date || !req.body.content) {
    //если что-либо не указано - сообщаем об этом
    return res.json({status: JSON.stringify(req.body)});
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