var express = require('express');
var bodyparser = require('body-parser');

var primero = require('./myRouter').primero;
var segundo = require('./myRouter').segundo;


var app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/primero', primero);
app.use('/segundo', segundo);




var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Servidor inicializado en el puerto ", server.address().port)
});
