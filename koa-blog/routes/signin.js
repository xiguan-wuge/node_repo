const router = require('koa-router')();
const controller = require('../controller/c-signin');
router.get('/signin', controller.getSignin); //请求表单
router.post('/signin', controller.postSignin); //解析表单


module.exports = router;