const BaseModel = require('./base.model.js')

let table = 'article'

class ArticleModel extends BaseModel {
	
	constructor(arg = null) {
	    super(arg)
	}
	
	async getAll(){
		let data = await this.model.findAll()
		// console.log('data',data)
		return data;
	}
	
	async getOneById(id){
		let data = await this.model.findByPk(id)
		// console.log('data',data)
		return data;
	}
	
}

module.exports = new ArticleModel({table});