const fs = require('fs');
const path = require('path');

class Router {

	constructor(dir = 'router') {
		this.router = require('koa-router')();
		this.filePath = path.join(__dirname, dir);
		this.loadRoutes(this.filePath);
	}

	loadRoutes(filePath) {

		const files = fs.readdirSync(filePath);

		files.forEach(file => {

			let newFilePath = path.join(filePath, file);

			if (fs.statSync(newFilePath).isDirectory()) { // 是目录

				this.loadRoutes(newFilePath); // 递归

			} else { // 是文件
			
				if(file.endsWith('.js')){
					
					let route = require(newFilePath);

					this.router.use(route.routes())
					this.router.use(route.allowedMethods())
					
				}
				
			}

		})

	}

}
module.exports = function(dir = 'router') {
	return new Router(dir);
};
