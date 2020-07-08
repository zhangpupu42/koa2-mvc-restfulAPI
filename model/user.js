const BaseModel = require('./base.model.js')

let table = 'user'

class UserModel extends BaseModel {
	
	constructor(arg = null) {
	    super(arg)
	}
	
	async getAll(){
		let data = await this.model.findAll()
		return data;
	}
	
	async signUp(obj = null){
		await this.model.create(obj)
		let res = await this.model.findOrCreate({where:obj})
		return res;
	}
	
}

module.exports = new UserModel({table});