var express = require('express');
var router = express.Router();
var Order = require('../models/order.model');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: "cursoopenwebinar@gmail.com",
		pass: "cursocursocurso"
	}
})

var mailOptions = {
    from: 'Pizzería Condor ✔ <cursoopenwebinar@gmail.com>', // sender address
    to: '', // list of receivers
    subject: 'Su pedido está listo', // Subject line
    text: '', // plaintext body
    // html: '<b>Hello world ✔</b>' // html body
};


router.get('/', function(req, res) {
	Order.find({})
	.populate('customer')
	.exec(function(err, orders) {
		if (err) throw err;
		res.render('admin', {orders: orders});
	})

})


router.get('/order/:order/:state', function(req, res) {
	Order.update({_id: req.params.order}, {"$set": {state: req.params.state}})
	.exec(function(err, updated) {
		if (err) throw err;

		if (req.params.state == "ready") {
			// Mandaremos el email
			Order.findOne({_id: req.params.order})
			.populate('customer')
			.exec(function(err, order) {
				if (err) throw err;
				if (order.email_on_ready) {
					mailOptions.to = order.customer.email;
					mailOptions.text = "Hola " + order.customer.username + ". Su pedido está listo. Puede pasar a recogerlo cuando quiera";
					transporter.sendMail(mailOptions, function(err, info) {
						if (err) throw err;
						console.log("Info email:", info);
					});
				} else {
					console.log("El usuario no quiere notificación por email");
				}
			});

		}

		res.redirect('/admin');
	})
});

module.exports = router