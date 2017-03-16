'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Введите заголовок статьи']
  },
  date: {
    type: String,
    required: [true, 'Введите дату публикации']
  },
  content: {
    type: String,
    required: [true, 'Введите содержимое статьи']
  }
});
mongoose.model('blog', BlogSchema);