var koa = require('koa');
var MineRouter = require('./route/route');
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');
// var session = require('koa-session');

const koaJwt = require('koa-jwt');
const jwtSecret = 'jwtSecret';

var app = new koa();

app.use(cors({
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'HEAD', 'PATCH', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Content-Length', 'Accept', 'X-Requested-With'],
    origin: 'http://localhost:4200',
}));

app.use(function (ctx, next) {
    return next().catch((err) => {
        if (401 === err.status) {
            ctx.status = 401;
            ctx.body = {
                status: 401,
                msg: '请登录'
            };
        } else {
            throw err;
        }
    });
});

app.use(koaJwt({secret: jwtSecret}).unless({
    path: [/.*?\/sp.*?/, /^\/bc\/login/]
}));

// app.use(koaJwt({secret: jwtSecret}).unless({path: [/.*?\/sp.*?/, /^\/bc\/login/]}));

app.use(bodyParser());
var router = MineRouter();
app.use(router.routes()).use(router.allowedMethods());

// app.use(koaJwt({secret: jwtSecret}).unless({
//     path: [/.*?\/sp.*?/, /^\/bc\/login/]
// }));

app.listen(8081, () => {
    console.log('listening localhost:8081')
});