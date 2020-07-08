const router = require('koa-router')()
const Controllers = require('../../controller.js')

router.prefix('/api')

router.get('/article/list', Controllers.ApiArticle.index())

module.exports = router;
