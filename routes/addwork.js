const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../config.json');

router.post('/', (req, res) => {
  let form = new formidable.IncomingForm();
  form.uploadDir = config.upload;
  form.parse(req, function (err, fields, files) {
    if (err) {
      return res.json({status: "Не удалось загрузить картинку!"});
    }
    if (!fields.title) {
      return res.json({status: "Не указано название сайта"});
    }
    if (!fields.tech) {
      return res.json({status: "Не указаны технологии"});
    }
    if (!fields.link) {
      return res.json({status: "Не указана ссылка на сайт"});
    }

    const Model = mongoose.model('work');
    const uniq = (+new Date()).toString();

    fs
      .rename(files.img.path, path.join(config.upload, uniq + files.img.name), function (err) {
        if (err) {
          fs.unlink(path.join(config.upload, uniq + files.img.name));
          fs.rename(files.img.path, files.img.name);
        }
        let dir = config.upload.substr(config.upload.indexOf('/'));
        const item = new Model({
          title: fields.title,
          tech: fields.tech,
          link: fields.link,
          img: path.join(dir, uniq + files.img.name)
        });
        item.save().then(work => {
          res.json({status: 'Работа успешно добавлена!'})
        });
      })

  });
});

module.exports = router;