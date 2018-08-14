const Koa = require('koa');
const path = require('path');
const session = require('koa-session-minimal')
const bodyParser = require('koa-body-parser');
const router = require('koa-router');
// EJS是一个JavaScript模板库，用来从JSON数据中生成HTML字符串。
const ejs = require('ejs');
const views = require('koa-views');
const MysqlStore = require('koa-mysql-session');
const staticCache = require('koa-static-cache')
const config = require('./config/default.js');

const app = new Koa();

const sessionMysqlConfig = {  // 中间件
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
};

app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

app.use(staticCache(path.join(__dirname, './public'), { 
  dynamic: true
}, {
  maxAge: 24*60*60
}));

app.use(staticCache(path.join(__dirname, './images'), {
  dynamic: true
}, {
  maxAge: 24*60*60
}));

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

app.use(bodyParser({
  formLimit: '1mb' //限制头像大小不能超过1mb
})) 
app.use(require('./routes/posts.js').routes());
app.use(require('./routes/signup.js').routes());
app.use(require('./routes/signin.js').routes());
app.use(require('./routes/signout.js').routes());

app.listen(config.port);
console.log(`listen on port  ${config.port}`);