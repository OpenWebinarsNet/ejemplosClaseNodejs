var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var carSchema = new Schema({
	model: String,
	year: Number,
	licenseplate: String,
	pilot: {
		name: String,
		age: Number
	},
	fuel: String
})

// Validadores
carSchema.path('model').validate(function(value) {
	return /Opel|Renault|Citroen|Ford|Mercedes/.test(value)
}, 'Modelo de coche no soportado');

carSchema.pre('save', function(next) {
	// Pre middleware
	next();
});


carSchema.post('save', function(doc) {
	console.log("Se guardó el documento: ", doc)
})

carSchema.post('validate', function(doc) {
	console.log("El documento se ha validado");
});

carSchema.post('init', function(doc) {
	console.log("El documento se ha iniciado:", doc);
})

carSchema.post('remove', function(doc) {
	console.log("Se ha eliminado el documento");
})

var Car = mongoose.model('car', carSchema);

myCar = new Car({model: 'Default'});
myCar.model = "Opel";
myCar.year = 2012;
myCar.fake = true;

myCar.save(function(err, saved) {
	if (err) throw err;
	console.log("Saved:", saved);
})