module.exports = {
  checkNotLogin: (ctx) => {
    if(ctx.session && ctx.session.user) { //检车 数据库中 _mysql_session_store 有没该用户
      ctx.redirect('/posts');
      return false;
    }
    return true;
  },
  checkLogin: (ctx) => {
    if(!ctx.session || !ctx.session.user) {
      ctx.redirect('/signin');
      return false;
    }
    return true;
  }
}