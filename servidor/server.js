var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use(expressSession({
    secret : 'amhvdQ==',
    resave : false,
    saveUninitialized : false 
}));

consign()
    .include('./routes')
    .then('./servidor/connectionMysql.js')
    .then('./models')
    .then('./controllers')
    .into(app);

module.exports = app;