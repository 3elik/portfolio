const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const currentStatic = require('./gulp/config').root;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, currentStatic)));

app.use('/', require('./routes/index'));
app.use('/works(.html)?', require('./routes/works'));
app.use('/about(.html)?', require('./routes/about'));
app.use('/blog(.html)?', require('./routes/blog'));
app.use('/contact', require('./routes/contact'));

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
  console.log('Express server started on port %s at %s', server.address().port, server.address())
});

//module.exports = app;