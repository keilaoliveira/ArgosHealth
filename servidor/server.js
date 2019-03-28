var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', './apk/views');
app.use(express.static('./apk/public'));
app.use(bodyParser.urlencoded({extended : true}));
consign()
.include('./apk/routes')
.include('./servidor/connectionMysql.js')
.include('./apk/models')
.into(app);
module.exports = app;