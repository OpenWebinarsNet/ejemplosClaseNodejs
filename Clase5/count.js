// Contar número de documentos de un modelo.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var Car = mongoose.model('car', new Schema({
	model: String,
	year: Number
}))

Car.count({model: 'Ferrary'}, function(err, count) {
	if (err) throw err;
	console.log("Hay",count,"coches");
})