const config = {
	db:{
		host:'localhost',
		username:'my_blob',
		password:'meiyoumima',
		dbName:'my_blob'
	},
	modelConfig:{
		baseDir:'../schema', //模型存放目录
		prefix:'mb_' //模型文件的前缀
	},
	base:{
		controller:'controller',
		model:'model'
	}
};
module.exports = config;