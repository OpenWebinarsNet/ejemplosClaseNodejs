// var fs = require('fs');

// fs.readFile('fichero.txt', 'utf8', function(err, leido){
// 	if (err) {
// 		return console.error("Error:", err);
// 	}

// 	console.log(leido);
// })

// console.log("Mensaje");










function imprime(texto, cb) {
	process.nextTick(function(){
		console.log(texto);
		console.log("mivar = ", mivar);
		cb(null, {success: true});
	});
}


console.log("mivar = ", mivar);

imprime("Buenos dias", function(err, result) {
	if (err) {
		return console.log("Ha habido un error");
	}

	return console.log("Todo bien: ", result);

});

console.log("Despues de imprimir");
var mivar = "SI"
