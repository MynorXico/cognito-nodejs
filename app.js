var express = require('express');

var app = express();
app.get('/', (req, res) => res.send('Hello Wfrom nodejs authentication servers'));

module.exports = app;