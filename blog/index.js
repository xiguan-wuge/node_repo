const path = require('path')
const express = require('express')
const session = require('express-session')
// session（用户会话）：存放在内存，mongodb放在数据库里
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite')(__dirname);
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
// 静态服务器
// public/
// 分布式， 不止一台服务器， 很多台电脑，通过负载均衡来实现，服务器扩容
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port, () => {
  console.log(`listen on port ${config.port}`);
});
