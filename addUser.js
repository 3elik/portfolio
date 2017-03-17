'use strict';

const mongoose = require('mongoose'),
  readline = require('readline'),
  rl = readline.createInterface({input: process.stdin, output: process.stdout});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tester:12tester34@ds131510.mlab.com:31510/loft');

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
