const BaseController = require('../base.controller.js')
class Login extends BaseController {
	
	constructor(arg = '') {
	    super(arg);
	}
	
	index(ctx,next){
		return async (ctx,next)=>{
			await ctx.render('admin/login',{title:'后台登录222'})
		}
	}
	
}
module.exports = new Login();