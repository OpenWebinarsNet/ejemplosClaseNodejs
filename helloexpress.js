var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send("Hola mundo");
});


var server = app.listen(3000, function(){
	console.log("Servidor inicializado en el puerto ", server.address().port)
});

console.log("Servidor iniciado");