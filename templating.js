const render = require('koa-art-template');
const path = require('path');

class Templating {
	constructor(){
	}
	renderring(app){
		render(app,{
			root:path.join(__dirname,'views'),
			extname:'.html',
			debug:process.env.NODE_ENV !== 'production'
		})
	}
}

module.exports = function(){
	return new Templating();
};

