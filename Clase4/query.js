var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mydb');

var cocheSchema = new Schema({
	model: String,
	year: Number,
	licenseplate: String,
	pilot: {
		name: String,
		age: {
			type: Number,
			min: 18,
			max: 66
		}
	},
	fuel: {
		type: String,
		enum: ['gasolina','diesel']
	}
})

var Coche = mongoose.model('coche', cocheSchema);

// var coche1 = new Coche

// coche1.model = "Astra"
// coche1.year = 2008
// coche1.licenseplate = "2525GLF"
// coche1.pilot.name = "Abel"
// coche1.pilot.age = 28;
// coche1.fuel = "gasolina";

// coche1.save(function(err, saved) {
// 	if (err) throw err;
// 	console.log("Coche1:", saved);
// })

// var coche2 = new Coche({
// 	model: "Zafira",
// 	licenseplate: "1518GLF",
// 	year: 2010,
// 	pilot: {
// 		name: "Juan",
// 		age: 19
// 	},
// 	fuel: "diesel"
// })

// coche2.save(function(err, saved) {
// 	if (err) return console.log("Error:", err);
// 	console.log("Coche2:", saved);
// })

// var coche3 = new Coche({
// 	model: "Megane",
// 	licenseplate: "1234QWE",
// 	year: 2015,
// 	pilot: {
// 		name: "Alberto",
// 		age: 27
// 	},
// 	fuel: "diesel"
// });
// Coche.create(coche3, function(err, saved) {
// 	if (err) throw err;
// 	console.log("Coche3:", saved);
// });

// Forma 1
Coche.findOne({}, 'year', function(err, result) {
	if (err) throw err;
	console.log("Result: ", result);
})

// Forma 2
Coche.findOne().exec(function(err, result) {
	if (err) throw err;
	console.log("Result2: ", result);
})

// Forma 3
Coche.find({sexo: 'femenino'}, function(err, results) {
	if (err) throw err;
	console.log("Find:", results);
})

// Ejemplo 4
Coche
	.find({
		//"$nor": [{model: "Ostro"}, {model: "Megane"}, {model: "Zafira"}]
		//"$and": [{model: "Megane"}, {year: { "$gt": 2008}}, { sexo: {"$exists": false} }]

	})
	.select("model")
	//.sort('-year')
	.limit(10)
	//.skip(0)
	//.where('pilot.age').gte(20).lte(28)
	.exec(function(err, results) {
		if (err) throw err;
		console.log("Ejemplo4:", results);
	})




