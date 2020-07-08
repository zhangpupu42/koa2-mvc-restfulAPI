const {
	Sequelize
} = require('sequelize')

const {
	host,
	dbName,
	username,
	password
} = require('./config.js').db

const sequelize = new Sequelize(dbName, username, password, {
	host,
	dialect: 'mysql',
	dialectOptions: {
		// 字符集
		charset: "utf8mb4",
		collate: "utf8mb4_general_ci",
		supportBigNumbers: true,
		bigNumberStrings: true,
		dateStrings:true
	},
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	timezone: '+08:00', //东八时区
	query:{
		raw:true
	}
})

module.exports = {
	sequelize
}
