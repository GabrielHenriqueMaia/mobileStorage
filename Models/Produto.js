var mongoose = require('mongoose');

var produtoSchema = mongoose.Schema({
	codigo: Number,
	nome: String,
	codigoBarras: String
});

module.exports = produtoSchema;