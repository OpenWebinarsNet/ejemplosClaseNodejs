var n = 0;

for (var i=0; i < 10; i++) {
	process.nextTick(function() {
		console.log("Ene vale:", n);
		n = n+1;	
	})
	
}

console.log("DESPUES DEL FOR");

setTimeout(function() {
	console.log("HEEY");
}, 0);
