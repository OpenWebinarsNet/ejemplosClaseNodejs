// Metodos de instancia

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mydb');

var dogSchema = new Schema({
	name: String,
	type: String
});

dogSchema.methods.ladrido = function(cb) {
	return console.log("%s: Guau Guau", this.name);
}
dogSchema.methods.findSimilar = function(cb) {
	this.model('dog').find({type: this.type}, cb);
}

var Dog = mongoose.model('dog', dogSchema);


var Chapi = new Dog({name: "Chapi", type: "Labrador"});

Chapi.ladrido();

Chapi.findSimilar(function(err, result) {
	if (err) throw err;
	console.log("Perros similares:", result);
})