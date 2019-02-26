var express = require('express');
var app = express();
var consign = require('consign');


consign().include('./apk/routes').into(app);
app.set('view engine', 'ejs');
app.set('views', './apk/views');

app.use(express.static('./apk/public'));

module.exports = app;