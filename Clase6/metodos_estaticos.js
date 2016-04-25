var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

mongoose.connection.on('open', function(err) {
	if (err) throw err;
	console.log("Conectados a nuestra base de datos");
})

var libroSchema = new Schema({
		nombre: String,
		tipo: {
			type: String,
			enum: ['drama', 'terror', 'amor', 'scifi']
		},
		activo: Boolean
	});

libroSchema.statics.findByName = function(name, cb) {
	return this.find({nombre: new RegExp(name, 'i')}, cb);
}

libroSchema.statics.findActives = function(query, cb) {
	var query = query || {};

	query.activo = true;
	return this.find(query, cb);
}

var Libro = mongoose.model('libro', libroSchema);


// Libro.create({nombre: "Quijote", tipo: "drama"}, function(err, result) {
// 	if (err) throw err;
// 	console.log("Libro creado:", result);

// })

Libro.findActives(undefined, function(err, result) {
	if (err) throw err;
	console.log("Result:", result);
})
