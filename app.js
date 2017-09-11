var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Add by Ignat
var argv = require('minimist')(process.argv.slice(2));
var swagger = require("swagger-node-express");

var index = require('./routes/index');
var user = require('./routes/user');
var task = require('./routes/task');
var reason = require('./routes/reason');

// Add by Ignat
var FixValue = require('./utils/fixvalue.json');
var mysql = require('mysql');
var conn = require('express-myconnection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// Add by Ignat
// Connect to MySQL
app.use(conn(mysql,
  {
    host      : FixValue.Database.strHost,
    user      : FixValue.Database.strUser,
    password  : FixValue.Database.strPassword,
    database  : FixValue.Database.strDatabase
  }, 'request'));

app.use('/', index);

// Add by Ignat
app.use(FixValue.RouterAPIV1.users, user);
app.use(FixValue.RouterAPIV1.tasks, task);
app.use(FixValue.RouterAPIV1.reasons, reason);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
