var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var usersRouter = require('./routes/users');
var sessionsRouter = require('./routes/sessions');
var pagesRouter = require('./routes/pages');
var indexRouter = require('./routes/index');

var app = express();
const mongo_uri = 'mongodb://localhost:27017';

MongoClient.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 10 })
.then(client => {
  const db = client.db('books');
  app.locals.db = db;
}).catch(error => console.error(error));

// listen for the signal interruption (ctrl-c)
process.on('SIGINT', () => {
  client.close();
  process.exit();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/marketing');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/pages', pagesRouter);
app.use('/sessions', sessionsRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
