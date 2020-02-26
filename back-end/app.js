var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');
var runersRouter = require('./routes/runers');
var productsRouter = require('./routes/products');
var deliveriesRouter = require('./routes/deliveries');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/companies', companiesRouter);
app.use('/api/v1/runers', runersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/deliveries', deliveriesRouter);

module.exports = app;
