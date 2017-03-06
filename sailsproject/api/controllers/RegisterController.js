/**
 * RegisterController
 *
 * @description :: Server-side logic for managing Registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	register: function(req, res) {
		if(!req.body.uName || !req.body.uEmailId || !req.body.uMobileNum || !req.body.uPassword1) {
			return res.badRequest({"message": "userName/email/mobile-number/password missing"});
		}
		Register.add({name: req.body.uName, email: req.body.uEmailId, mobileNum: req.body.uMobileNum, password: req.body.uPassword1}, function(err, result) {
			if(!err && result) {
				res.send(result);
			} else {
				res.negotiate(err);
			}
		});
	},

	details: function(req, res) {
		Register.details(req, function(err, result) {
			if(!err && result) {
				res. send(result);
			} else {
				res.negotiate(err);
			}
		});
	},

	login: function(req, res) {
		if(!req.body.uName || !req.body.uPassword) {
			return res.badRequest({"message": "userName/Password missing!"});
		}
		Register.login({name: req.body.uName, password: req.body.uPassword}, function(err, result) {
			if(!err && result[0]["password"] == req.body.uPassword) {
				sails.log.debug("studentData: ", result);
				//return res.badRequest({"message": "Password entered!"});
				return res.redirect('/showHomePg');
				/*Student.showData(function(err, result) {
					if(!err && result) {
						res.view('homePg', {title: "Student Details!", res: result});
					} else {
						res.negotiate(err);
					}
				});*/
			} else if(!err && result[0]["password"] != req.body.uPassword) {
				sails.log.debug("studentData: ", result);
				return res.badRequest({"message": "Wrong password entered!"});
			}else if(studentData == undefined) {
				return res.badRequest({"message": "No data exists!"});
			} else {
				return res.negotiate(err);
			}
		});
	}
}

