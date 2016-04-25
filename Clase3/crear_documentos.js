var mongoose = require('mongoose') 
var Schema = mongoose.Schema;

mongoose.model('Coche', new Schema({ modelo: String }));

mongoose.connect('mongodb://localhost/mydb')


// Forma 1
var coche = new mongoose.model('Coche')({
	modelo: "Opel";
})
coche.save(console.log);

// Forma 2

var Coche = mongoose.model('Coche')
var coche = new Coche({ modelo: "Renault" })
coche.save(function(err, coche) {
	if (err) throw err;
})
// Forma 3

var citroen;
Coche.create({marca: "Citroen"}, function(err, coche) {
	if (err) throw err;
	citroen = coche;
})

// Forma 4
var coche = new Coche(cocheDelCliente);


// Forma 5
cocheDelCliente = {
	modelo: "Opel",
	fuel: "Diesel",
	year: 2015
}

//#1
var coche = new Coche(cocheDelCliente);
// -> coche = { modelo: "Opel" }

//#2
Coche.create(cocheDelCliente, function(err) {})







