const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const Router = require('./router.js')('routes')
const Templating = require('./templating.js')()
const rest = require('./rest.js')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
	enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/view-admin'))

//注册模板
Templating.renderring(app)

app.use(rest.restify());
// logger
// app.use(async (ctx, next) => {
// 	try{
// 		const start = new Date()
// 		await next()
// 		const ms = new Date() - start
// 		console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// 		if(!ctx.body){
// 			ctx.render('not-found')
// 		}
// 	}catch(err){
// 		console.log('have a mistake on: '+err)
// 		ctx.response.status = 200;
// 		await ctx.render('error')
// 	}
// })


// routes
app.use(Router.router.routes(), Router.router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
});

module.exports = app
