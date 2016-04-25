var express = require('express');
var bodyparser = require('body-parser');

var primero = require('./myRouter').primero;
var segundo = require('./myRouter').segundo;


var app = express();

app.use(bodyparser.urlencoded({ extended: false }));

var visitas;

app.use(function(req, res, next) {
	visitas = visitas +1;
	next()
})

function middlewareLog(req, res, next) {
	console.log("Petición realizada a las", new Date());
	next()
}

function blockAccess(req, res, next) {
	return res.status(304).send("Acceso restringido");
}

app.get('/', middlewareLog, middlewareLog, function(req, res) {
	// res.send("Hola mundo cruel. Eres el visitante numero:" + visitas);
	myjson = {
		clave: "Valor"
	}

	res.json(myjson)
})


app.use('/myrouter', primero);

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Servidor inicializado en el puerto ", server.address().port)
	visitas = 0;
});
