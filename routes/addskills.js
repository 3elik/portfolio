const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const isAdmin = function (req, res, next) {
  if (req.session.isAdmin) {
    return next();
  }
  res.json({status: 'У Вас нет прав админа!'});
};

var modelUpdate = function (title, data, cb) {
  console.log(title);
  console.log(data);
  const Model = mongoose.model('skills');
  Model.update({
    title: title
  }, {
    $set: {
      title: title,
      dia: data
    }
  }, {
    upsert: true
  }).then(
    (i) => {
      if (cb) {
        cb();
      }
    },
    (e) => {
      const error = Object
        .keys(e.errors)
        .map(key => e.errors[key].message)
        .join(', ');
      res.json({status: 'При добавление записи произошла ошибка: ' + error});
    }
  );
};

router.post('/', isAdmin, (req, res) => {
  modelUpdate("Frontend", req.body.frontend, function () {
    modelUpdate("Backend", req.body.backend, function () {
      modelUpdate("Workflow", req.body.workflow, function () {
        return res.json({status: 'Скилы успешно сохранены!'});
      });
    });
  });
});

module.exports = router;