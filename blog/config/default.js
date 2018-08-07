// 配置config
module.exports = {
  port: 3000,
  session: { //用于识别用户
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000   //毫秒为单位，即30天
  }, 
  // 连接mongodb
  mongodb: 'mongodb://localhost:27017/myblog'
}