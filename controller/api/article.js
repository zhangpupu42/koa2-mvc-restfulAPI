const BaseController = require('../base.controller.js')

class Article extends BaseController {
	
	constructor(arg='') {
	    super(arg);
	}
	
	index(ctx,next){
		return async (ctx,next)=>{
			let data = await this.Model.Article.getAll();
			ctx.rest({data});
		}
	}
	
}
module.exports = new Article();