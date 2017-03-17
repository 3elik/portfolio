'use strict';

const mongoose = require('mongoose');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const config = require('./config.json');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo);

let login = '',
  password = '';

rl.question('Логин: ', answer => {
  login = answer;

  rl.question('Пароль: ', answer => {
    password = answer;

    rl.close();
  });
});

rl.on('close', () => {
  require('./models/user');

  const User = mongoose.model('user'),
    adminUser = new User({login: login, password: password});

  User
    .findOne({login: login})
    .then(u => {
      if (u) {
        throw new Error('Такой пользователь уже существует!');
      }

      return adminUser.save();
    })
    .then(u => console.log('ok!'), e => console.error(e.message))
    .then(() => process.exit(0));
});
