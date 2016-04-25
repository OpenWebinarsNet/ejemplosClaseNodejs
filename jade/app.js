var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.set('views', './plantillas')

app.set('view engine', 'jade');

app.use(middleware);

var visitas = 0;

app.get('/', function(req, res) {
	authMiddleware(req, res, function() {

	});
	obj = {
		nombre: "Juan",
		edad: 26,
		pais: "España",
		visitas: visitas
	}
	res.render('index', obj)
})

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Servidor inicializado en el puerto ", server.address().port)
});

function authMiddleware(req, res, next) {
	if (req.user.isAdmin == true) next()
	else res.status(404).send(); next();
}