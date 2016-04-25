var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var Car = mongoose.model('car', new Schema({
	model: String,
	year: Number
}))

Car.findOne().select('_id').exec(function(err, coche) {
	if (err) throw err;
	console.log("Id obtenida:", coche._id);
	var id = coche._id;

	// coche.model = "Ford";
	// coche.save(function(err, coche) {
	// 	if (err) throw err;
	// 	console.log("Coche actualizado:", coche);
	// })

	var query = {model: "Seat"};
	var updateTo = {model: "Opel"};
	var options = {multi: true};
	Car.update(query, updateTo, options, function(err, updated) {
		if (err) throw err;
		console.log("Resultado:", updated);
	})

	
	// Car.findByIdAndUpdate(id, {model: "Seat"}, function(err, coche) {
	// 	if (err) throw err;
	// 	console.log("Coche antiguo:", coche);
	// });


});