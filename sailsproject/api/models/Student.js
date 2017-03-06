/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	rollNum: {
  		type: 'int'
  	},
  	firstName: {
  		type: 'string'
  	},
  	lastName: {
  		type: 'string'
  	},
  	emailId: {
  		type: 'string'
  	},
  	sClass: {
  		type: 'string'
  	},
  	course: {
  		type: 'string'
  	}
  },

  add: function(data, callback) {
  	Student.findOne({"$or": [{rollNum: data.rollNum}, {emailId: data.emailId}]}).exec(function(err, studentData) {
  		if(!err && studentData) {
  			studentData = "Student already exists!"
  			callback(null, studentData);
  		} else if(studentData == undefined) {
  			Student.create(data).exec(function(err, studentData) {
  				if(!err && studentData) {
  					sails.log.debug("StudentData: ", studentData);
  					callback(null, studentData);
  				} else{
  					callback(err);
  				}
  			});
  		} else {
  			callback(err);
  		}
  	});
  },

  showData: function(callback) {
    Student.find().exec(function(err, studentData) {
      if(!err && studentData) {
        sails.log.debug("Whole Data: ", studentData);
        callback(err, studentData);
      } else if(studentData == undefined) {
        //studentData = "No record found!";
        callback(err, studentData);
      } else {
        callback(err);
      }
    });
  },

  findData: function(data, callback) {
    Student.findOne({rollNum: data.id}).exec(function(err, studentData) {
      if(!err && studentData) {
        sails.log.debug("Whole findData: ", studentData);
        callback(err, studentData);
      } else if(studentData == undefined) {
        sails.log.debug("Whole findData undefined: ", studentData);
        //studentData = "No record found!";
        callback(err, studentData);
      } else {
        callback(err);
      }
    });
  },

  updateData: function(data, callback) {
    sails.log.debug("data: ", data); 
    sails.log.debug("Type(data.rollNum): ", data.rollNum);
    Student.update({rollNum: data.rollNum}, {firstName: data.firstName, lastName: data.lastName, emailId: data.emailId, sClass: data.sClass, course: data.course}).exec(function(err, studentData) {
      if(!err && studentData) {
        sails.log.debug("update: ", studentData);
        callback(err, studentData);
      } else if(studentData == undefined) {
          sails.log.debug("update undefined: ", studentData);
          //studentData = "No record found!";
          callback(err, studentData);
      } else {
        callback(err);
      }
    });
  },

  deleteData: function(data, callback) {
    Student.destroy({"rollNum": data.rollNum}).exec(function(err, studentData) {
      if(!err && studentData) {
        sails.log.debug("delete: ", studentData);
        callback(err, studentData);
      } else if(studentData == undefined) {
          sails.log.debug("delete undefined: ", studentData);
          //studentData = "No record found!";
          callback(err, studentData);
      } else {
        callback(err);
      }
    });
  }

};

