const app = require('koa')();


const port = app.get('port') || 3005



// 如果错误发生在 请求/响应 环节，并且其不能够响应客户端时，Contenxt 实例也会被传递到 error 事件监听器的回调函数里。
app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

// http.createServer(app.callback()).listen(3000);
// 这意味着您可以同时支持 HTTPS 和 HTTPS，或者在多个端口监听同一个应用。
app.listen(port)
