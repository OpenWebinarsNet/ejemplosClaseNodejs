var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var personSchema = new Schema({
	nombre: String,
	apellidos: String
})

personSchema.virtual('nombre_completo').get(function() {
	return this.nombre + " " + this.apellidos;
})


personSchema.virtual('nombre_completo').set(function(input) {
	this.nombre = input.split(" ")[0]
	this.apellidos = input.split(" ")[1]
})

var Person = mongoose.model('person', personSchema);

var alberto = new Person({nombre_completo: "Alberto Mato"})

console.log("Alberto:", alberto);


// Person.findOne().exec(function(err, person) {
// 	if (err) throw err;

// 	console.log("Nuestra persona se llama "+ person.nombre_completo);
// })