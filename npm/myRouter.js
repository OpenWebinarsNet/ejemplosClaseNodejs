var express = require('express');
var router = express.Router();

var segundo_enrutador = express.Router();

router.use(function(req, res, next) {
	req.user = {
		name: "JC"
	}
	next()
})

router.use(function(req, res, next) {
	if (req.user != undefined) return next()

	res.status(403).send()
});

router.get('/', function(req, res) {
	res.send("Peticion raiz");
});

router.get('/about', function(req, res) {
	res.send("Sobre mi...");
});


segundo_enrutador.get('/', function(req, res) {
	res.send("Segundo enrutador!");
})

var salida = {
	primero: router,
	segundo: segundo_enrutador
}


module.exports = salida