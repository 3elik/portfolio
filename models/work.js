'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Введите заголовок сайта']
  },
  tech: {
    type: String,
    required: [true, 'Введите используемые технологии']
  },
  link: {
    type: String,
    required: [true, 'Введите ссылку на сайт']
  },
  img: {
    type: String,
    required: [true, 'Загрузите скриншот']
  }
});
mongoose.model('work', WorkSchema);