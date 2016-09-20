var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path    = require('path');
const config = require('./local_modules/config');

var produtoRoutes = require('./Routes/produto');
var basicRoutes = require('./Routes/basic');

var app = express();

//middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//logger
app.use(function (req, res, next) {
	console.log(req.method + ' ' + req.url);
	next();
});

//Roteamento
app.use('/', basicRoutes);
app.use('/produtos', produtoRoutes);

//Iniciando o servidor
app.listen(config.port, function () { console.log('Servidor rodando na porta 3000') });


//conecao com o banco
mongoose.connect(config.connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Database connection sucess');
});
