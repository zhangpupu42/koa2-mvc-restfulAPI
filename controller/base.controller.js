const Model = require('../model.js')

class BaseController {
	
	constructor(arg){
		this.Model = Model;
	}
	
}

module.exports = BaseController;