var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	}
	,
	email: {
		type: String,
		required: true
	}
	,
	password: {
		type: String,
		required: true
	},
	rol: {
		type: String,
		enum: ['cliente', 'admin'],
		default: 'cliente'
	}
})

// Metodo estático para buscar por username
userSchema.statics.findByUsername = function(username, cb) {
	this.model('user').findOne({username: username}, cb);
}


module.exports = mongoose.model('user', userSchema);