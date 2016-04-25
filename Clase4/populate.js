var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var cocheSchema = new Schema({
	model: String,
	year: Number,
	licenseplate: String,
	pilot: {
		type: Schema.Types.ObjectId,
		ref: 'piloto'
	},
	fuel: {
		type: String,
		enum: ['gasolina','diesel']
	}
})

var pilotoSchema = new Schema({
	name: String,
	age: Number,
	cars: [{
		type: Schema.Types.ObjectId,
		ref: 'coche'
	}]
});

var Coche = mongoose.model('coche', cocheSchema);
var Piloto = mongoose.model('piloto', pilotoSchema);

var opel = new Coche({
	model: 'Opel',
	year: 2015,
	licenseplate: "2525GLF",
	fuel: "diesel"
});

var renault = new Coche({
	model: 'Renault',
	year: 2010,
	licenseplate: "2525GLF",
	fuel: "gasolina"
});


var ford = new Coche({
	model: 'Ford',
	year: 2009,
	licenseplate: "2115GLF",
	fuel: "diesel"
});

var pilot = new Piloto({
	name: "Juan",
	age: 25,
	cars: [opel._id, renault._id, ford._id]
});

opel.pilot = pilot._id;

// renault.save(function(err, saved) {
// 	if (err) throw err;
// 	console.log("Renault saved");
// });

// ford.save(function(err, saved) {
// 	if (err) throw err;
// 	console.log("Renault saved");
// });

// opel.save(function(err, saved) {
// 	if (err) throw err;
// 	console.log("Opel:", saved);
// });

// pilot.save(function(err, piloto) {
// 		if (err) throw err;
// 		console.log("Piloto:", piloto)
// });

// Coche
// 	.find()
// 	.populate('pilot')
// 	.exec(function(err, coches) {
// 		if (err) throw err;
// 		console.log("Coches:", coches);
// })

Piloto.find()
	.populate({
		path: 'cars',
		match: { fuel: "gasolina" },
		limit: 10
	})
	.exec(function(err, pilotos) {
		if (err) throw err;
		console.log("Pilotos:", pilotos);
	})

