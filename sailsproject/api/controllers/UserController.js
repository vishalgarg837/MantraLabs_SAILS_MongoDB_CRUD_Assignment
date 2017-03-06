/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hello: function(req, res) {

		// Query  : req.query
		// Params : req.params
		// Body	  : req.body

		sails.log.debug("get req query",req.body);
		res.send("request received");
	}
}		
	