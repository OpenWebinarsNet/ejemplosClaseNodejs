var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mydb')	



var Schema = mongoose.Schema;

var tiposDeDatos = new Schema({
	nombre: String,
	activo: {
		type: Boolean,
		default: true
	},
	edad: {
		type: Number,
		min: 18,
		max: 60
	},
	binario: Buffer,
	ultima_actualizacion: {
		type: Date,
		default: Date.now
	},
	mixed: {},
	_unico: Schema.Types.ObjectId,
	array: [],
	arrayNombres: [String],
	arrayNumeros: [Number],
	arrayFechas: [Date],
	arrayBuffers: [Buffer],
	arrayBooleanos: [Boolean],
	arrayMixtos: [{}],
	arrayIds: [Schema.Types.ObjectId],
	anidado: {
		subnombre: {
			type: String,
			lowercase: true,
			trim: true
		}
	}
})

var Tipos = mongoose.model('tipos', tiposDeDatos);

var tipos = new Tipos;
tipos.nombre = "Juan Carlos";
tipos.binario = new Buffer(10);
tipos.activo = false;
tipos.ultima_actualizacion = new Date;
tipos.edad = 25;
tipos.mixed = { cualquier: { cosa: 'que queramos' }}
tipos._unico = new mongoose.Types.ObjectId;
tipos.array.push(10);
tipos.arrayNombres = ['Juan','Carlos'];
tipos.arrayNumeros.unshift(1,2,3,4,5);
tipos.arrayFechas.addToSet(new Date);
tipos.arrayBuffers.pop();
tipos.arrayBooleanos.push(true);
tipos.arrayMixtos = [1, {clave: "valor"}, [], 'cinco'];
tipos.anidado.subnombre = "Carlos";



db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.on('open', function(err) {
	if (err) throw err;
	console.log("Mongoose conectado a nuestra base de datos");

	doThings();
})



function doThings() {
	Tipos.findOne({}, function(err, resultado) {
		if (err) { throw err; }
		console.log("Obtenido:"+ resultado);
		resultado.nombre = "hexley";
		resultado.mixed.clave = 1234567;
		resultado.markModified('mixed');
		resultado.save(function(err, actualizado) {
			if (err) throw err;
			console.log("Actualizado:", actualizado);
		})
	})

}
