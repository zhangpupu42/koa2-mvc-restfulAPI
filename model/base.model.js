const path = require('path')
//引入建立连接的 db.js
const Sequelize = require('../config/db.js').sequelize
//引入 model 配置
const modelConfig = require('../config/config.js').modelConfig

class BaseModel {
	mbbb = 'mbbb'
	constructor(arg) {
		
		let modulePath = path.join(__dirname, modelConfig.baseDir, modelConfig.prefix + arg.table) //将配置文件的路径合并，便于找到模型文件
		
		this.model = Sequelize.import(modulePath);
	}

}

module.exports = BaseModel;
