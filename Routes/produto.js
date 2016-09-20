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
			res.render('produtos', {produtos:produtos});
		}
	});
});

router.post("/", function (req, res) {
	produto = new Produto({codigo:req.body.codigo, nome:req.body.nome});
	produto.save(function (err, produto) {
		if (err){
			console.log(err);
		}else{
			res.redirect('/produtos');
		}
	})
});

module.exports = router;