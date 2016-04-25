// Distinct

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

mongoose.connection.on('error', function(err) {
	console.error("Error mongo:", err);
})

var Car = mongoose.model('car', new Schema({
	model: String,
	year: Number
}))


car1 = {
	model: "Opel",
	year: 2008
}

car2 = { model: "Renault", year: 2010 };
car3 = {model: "Opel", year: 2020 };
car4 = {model: "Citroen", year: 2008 };
car5 = {model: "Mercedes", year: 2010 };

Car.create([car1,car2,car3,car4,car5], function(err, creados) {
	if (err) throw err;
	console.log("Creados:", creados);
})

Car.distinct('year', function(err, years) {
	if (err) throw err;
	console.log("Años:", years);
});