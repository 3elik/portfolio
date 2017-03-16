'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiaSchema = mongoose.Schema({
  title: String,
  value: Number
});

const SkillsSchema = new Schema({
  title: String,
  dia: [ DiaSchema ]
});
mongoose.model('skills', SkillsSchema);