const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const currentStatic = require('./gulp/config').root;
const config = require('./config.json');
const uploadDir = config.upload;

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/*mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
  user: config.db.user,
  pass: config.db.password
}).catch(e => {
  console.error(e);
  throw e;
});*/
mongoose.connect(config.mongo);

//Models
require('./models/blog');
require('./models/work');
require('./models/skills');
require('./models/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, currentStatic)));
app.use(session({
  secret: 'secret',
  key: 'keys',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use('/', require('./routes/index'));
app.use('/works(.html)?', require('./routes/works'));
app.use('/about(.html)?', require('./routes/about'));
app.use('/blog(.html)?', require('./routes/blog'));
app.use('/contact', require('./routes/contact'));
app.use('/admin(.html)?', require('./routes/admin'));
app.use('/addpost', require('./routes/addpost'));
app.use('/addwork', require('./routes/addwork'));
app.use('/addskills', require('./routes/addskills'));
app.use('/login', require('./routes/login'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err.stack);

  // render the error page
  res.status(err.status || 500);
  res.render('500');
});

server.listen(3000, 'localhost');
server.on('listening', function () {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  console.log('Express server started on port %s at %s', server.address().port, server.address())
});

//module.exports = app;