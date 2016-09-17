var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const config = require("./local_modules/config");

var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/////////////////////////

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Database connection suceed");
});
var produtoSchema = mongoose.Schema({
	name: String
});
var Produto = mongoose.model('Produto', produtoSchema);


/////////////////////////////

app.get("/", function (req, res) {
	res.send("Funcionou carai");
});

app.listen(config.port);
console.log("Servidor Rodando");
