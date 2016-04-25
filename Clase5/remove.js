// Eliminar documentos.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var Car = mongoose.model('car', new Schema({
	model: String
}));

Car.remove({year: { "$gt": 2000 }}, function(err, removed) {
	if (err) throw err;
	console.log("Eliminados:", removed);
})