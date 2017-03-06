/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {
		if(!req.body.stuRollNum || !req.body.stuFName || !req.body.stuLName || !req.body.stuEmail || !req.body.stuClass || !req.body.stuCourse) {
			return res.badRequest({"message": "RollNum/FirstName/LastName/Email/Class/Course missing!"});
		}
		Student.add({rollNum:req.body.stuRollNum, firstName: req.body.stuFName, lastName: req.body.stuLName, emailId: req.body.stuEmail, sClass: req.body.stuClass, course: req.body.stuCourse}, function(err, result) {
			if(!err && result) {
				return res.redirect('/showHomePg');
			} else {
				res.negotiate(err)
			}
		});
	},

	showUpdateData: function(req, res) {
		Student.findData({id: req.params.input}, function(err, result) {
			if(!err && result) {
				sails.log.debug("showUpdateData: ", result);
				res.view('updatePg', {title: "Update Student Details!", res: result});
			} else {
				res.negotiate(err);
			}
		});
	},

	update: function(req, res) {
		if(!req.body.stuRoll || !req.body.stuFName || !req.body.stuLName || !req.body.stuEmail || !req.body.stuClass || !req.body.stuCourse) {
			return res.badRequest({"message": "RollNum/FirstName/LastName/Email/Class/Course missing!"});
		}
		Student.updateData({rollNum: req.body.stuRoll, firstName: req.body.stuFName, lastName: req.body.stuLName, emailId: req.body.stuEmail, sClass: req.body.stuClass, course: req.body.stuCourse}, function(err, result) {
			if(!err && result) {
				return res.redirect('/showHomePg');
			} else {
				res.negotiate(err);
			}
		});
	},	

	showDeleteData: function(req, res) {
		Student.findData({id: req.params.input}, function(err, result) {
			if(!err && result) {
				sails.log.debug("showDeleteData: ", result);
				res.view('deletePg', {title: "Delete Student Details!", res: result});
			} else {
				res.negotiate(err);
			}
		});
	},

	deleteData: function(req, res) {
		if(!req.body.stuRoll || !req.body.stuFName || !req.body.stuLName || !req.body.stuEmail || !req.body.stuClass || !req.body.stuCourse) {
			return res.badRequest({"message": "RollNum/FirstName/LastName/Email/Class/Course missing!"});
		}
		Student.deleteData({rollNum: req.body.stuRoll, firstName: req.body.stuFName, lastName: req.body.stuLName, emailId: req.body.stuEmail, sClass: req.body.stuClass, course: req.body.stuCourse}, function(err, result) {
			if(!err && result) {
				return res.redirect('/showHomePg');
			} else {
				res.negotiate(err);
			}
		});
	},

	showHome: function(req, res) {
		Student.showData(function(err, result) {
			if(!err && result) {
				res.view('homePg', {title: "Student Details!", res: result});
			} else {
				res.negotiate(err);
			}
		});
	} 
};

