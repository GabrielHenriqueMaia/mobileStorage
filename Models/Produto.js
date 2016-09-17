var mongoose = require('mongoose');

var produtoSchema = mongoose.Schema({
	name: String
});

module.exports = produtoSchema;