var koa = require('koa');
var MineRouter = require('./route/route');
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');

var app = new koa();

// app.use((ctx, next) => {
//     console.log(ctx.request.url);
//     next();
// });

app.keys = ['some secret key'];// cookie的签名

const CONFIG = {
    key: 'koa:sess', // 默认
    maxAge: 60 * 1000, // 过期时间  【需要修改】
    overwrite: true, // 没有效果，默认即可
    httpOnly: true, // 表示只有服务器端可以获取cookie
    signed: true, // 默认签名
    rolling: false, // 表示每次访问时，重新设置过期时间
    renew: true // 当请求过来时如果session快过期的时候重新设置 【需要修改】
};

app.use(session(CONFIG, app));

app.use(bodyParser());

var router = MineRouter();

app.use(cors({
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    origin: '*',
}));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8081);