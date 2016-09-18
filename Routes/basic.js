/**
 * Created by Gabriel H. Maia on 17/09/2016.
 */
var express     = require('express');
var router      = express.Router();

router.get("/", function (req, res) {
	res.render('index');
});

module.exports = router;