const BaseController = require('./base.controller.js')

class HomeController extends BaseController {
	
	constructor(arg = null) {
		super(arg)
	}
	
	home(ctx, next) {
		return async (ctx, next)=>{
			let list = await this.Model.Article.getAll()
			let info = {
				a:'这是a',
				b:'这是b',
				c:'这是c',
				d:'这是d',
				e:'这是e',
				f:'这是f'
			}
			await ctx.render('default/article/home', {
				title: '首页',
				list,
				info
			})
		}
	}
	
	detail(ctx,next){
		return async (ctx,next)=>{
			let id = ctx.params.id;
			let info = await this.Model.Article.getOneById(id);
			await ctx.render('default/article/detail',{
				title:'详情页',
				info
			})
		}
	}
	
	signUp(ctx,next){
		return async (ctx,next)=>{
			let data = {
				username:'测试'+(Math.random()*1000).toFixed(2),
				password:'000000'
			}
			let res = await this.Model.User.signUp(data);
			console.log('res::',res)
			ctx.status = 200;
			ctx.body = '注册情况'
		}
	}
	
}

module.exports = new HomeController();