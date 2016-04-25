var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydb')

db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.on('open', function(err) {
	if (err) throw err;
	console.log("Mongoose conectado a nuestra base de datos");
})
