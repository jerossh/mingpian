'use strict';

require('source-map-support').install();
require("babel-polyfill");
const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const log4js = require('log4js');
var fs = require('fs')
var path = require('path')
var koaStaticPlus = require('koa-static-plus')


const convert = require('koa-convert');
// import Koa from 'koa';
// import views from 'koa-views';
// import router from 'koa-router';

// koa需要用new
const app = new Koa();

const router = new Router();

const LOG = log4js.getLogger('file')

app.use(koaStaticPlus(path.join(__dirname, '/dist'), {
    pathPrefix: ''
}))

// 模板引擎设置
app.use(views(path.join(__dirname + '/views'), {
  map: {
    html: 'pug'
  },
  extension: 'pug'
}));
// app.use(views(__dirname + '/views', {
//   extension: 'jade'
// }));


// app.use(router.get('/', function *() {
// 	yield this.render(clawler);
//   // await ctx.render('clawler.pug')
// }));

// router.get('/k', function *() {
// 	yield this.render('clawler.pug');
//   // await ctx.render('clawler.pug')
// });

router.get('/k', async function (ctx, next) {
  // ctx.state = {
  //   title: 'koa2 title'
  // };

  await ctx.render('clawler.pug', {
  });
})


app.use(function (ctx, next) {
    console.log(ctx.method, ctx.url)
    // Router.match(ctx, next)
})
// const port = app.get('port') || 3005;



// 如果错误发生在 请求/响应 环节，并且其不能够响应客户端时，Contenxt 实例也会被传递到 error 事件监听器的回调函数里。
app.on('error', function(err, ctx){
  LOG.error('server error', err, ctx);
});

// http.createServer(app.callback()).listen(3000);
// 这意味着您可以同时支持 HTTPS 和 HTTPS，或者在多个端口监听同一个应用。
app.listen(5000, function(){
  console.log('应用已经启动，端口5000');
});

module.exports = app
