const router = require('koa-router')()
const Controller = require('../controller.js')

router.get('/', Controller.Home.home())
router.get('/index', Controller.Home.home())
router.get('/home', Controller.Home.home())
router.get('/detail', Controller.Home.detail())
router.get('/detail/:id', Controller.Home.detail())
router.get('/signup', Controller.Home.signUp())

module.exports = router
