var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())

var routes = require('./routes');
app.use('/', routes);

module.exports = app;