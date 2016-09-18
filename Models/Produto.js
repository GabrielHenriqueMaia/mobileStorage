var mongoose = require('mongoose');

var produtoSchema = mongoose.Schema({
	codigo: Number,
	name: String,
	codigoBarras: String
});

module.exports = produtoSchema;