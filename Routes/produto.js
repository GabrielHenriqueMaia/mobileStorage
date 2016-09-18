/**
 * Created by Gabriel H. Maia on 17/09/2016.
 */
var mongoose    = require('mongoose');
var produtoSchema     = require('../Models/Produto');
var express     = require('express');
var router      = express.Router();

var Produto = mongoose.model('produto', produtoSchema);

router.get("/", function (req, res) {
	Produto.find(function (err, produtos) {
		if (err) {
			console.log(err);
		}else{
			res.send(produtos);
		}
	});
});

module.exports = router;