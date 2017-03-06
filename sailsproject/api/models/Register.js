/**
 * Register.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		user_name: {
			type: 'string'
		},
		email_id: {
			type: 'string'
		},
		mobile_num: {
			type: 'string'
		},
		password: {
			type: 'string'
		}
	},

	add: function(data, callback) {
		Register.findOne({email: data.email}).exec(function(err, studentData) {
			if(!err && studentData) {
				callback(null, studentData);
			} else if(studentData == undefined) {
				Register.create(data).exec(function(err, newStudentData) {
					if(!err && newStudentData) {
						callback(null, newStudentData);
					} else {
						callback(err);
					}
				});
			} else {
				callback(err);
			}
		});
	},

	details: function(data, callback) {
		Register.find().exec(function(err, studentData) {
			if(!err && studentData) {
				callback(null, studentData);
			} else {
				callback(err);
			}
		});
	},

	login: function(data, callback) {
		Register.find({name: data.name}).exec(function(err, studentData) {
			if(!err && studentData) {
				sails.log.debug("studentData: ", studentData);
				sails.log.debug("studentData: ", studentData[0]["name"]);
				/*if(studentData[0]["password"] == data.password) {
					studentData = "Found";
				} else {
					studentData = "NotFound";
				}*/
				callback(null, studentData);
			} else if(studentData == undefined) {
				//sails.log.debug("studentData: ", studentData);
				callback(null, studentData);
			} else {
				callback(err);
			}
		});
	}
};

