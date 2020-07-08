const router = require('koa-router')()
const Controllers = require('../controller.js')

router.prefix('/admin')

router.get('/',Controllers.AdminLogin.index())

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
