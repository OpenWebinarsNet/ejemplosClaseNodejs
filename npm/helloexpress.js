var express = require('express');
var bodyparser = require('body-parser');



var app = express();

app.use(bodyparser.urlencoded({ extended: false }));


app.get('/', function(req, res) {
	var id = req.query.id;

	res.send("id:"+ id);

});

app.all('*', function(req, res, next) {
	console.log("Asterisco");
	next();
})

app.post('/post', function(req, res) {

	res.send(req.body);
});

app.get('/user/pedro', function(req, res) {
	res.send("Tu no eres Pedro");
})

app.get('/user/:nombre', function(req, res) {
	res.send("Hola "+ req.params.nombre);
});



var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Servidor inicializado en el puerto ", server.address().port)
});
