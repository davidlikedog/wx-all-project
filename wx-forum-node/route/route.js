var router = require('koa-router')();
var db = require('../db/mysql');

module.exports = function r() {
    return router.get('/', async ctx => {
        ctx.body = '133333';
    }).get('/home', async ctx => {
        ctx.body = 'this is home page';
    }).get('/sql', async ctx => {
        var sqlDb = db.getInstance();
        var result = null;
        try {
            result = await sqlDb.query('select * from bc_user');
        } catch (e) {
            console.log(e);
        }
        ctx.body = result;
    }).get('/getAll', async ctx => {
        var sqlDb = db.getInstance();
        var result = null;
        try {
            result = await sqlDb.query('select * from all_forum');
        } catch (e) {
            console.log(e);
        }
        ctx.body = result;
    }).post('/login', async ctx => {
        console.log(ctx.request.body);
        ctx.body = ctx.request.body;
    }).post('/bc/login', async ctx => {
        ctx.cookies.set('name', 'david', {
            maxAge: 60 * 1000 * 60,
            // path: '/news' // 配置允许访问的路径
            httpOnly: true // 表示这个cookie只允许http访问，前端js不能访问
        });
        ctx.session.userinfo = 'david';
        var getData = ctx.request.body;
        if (getData.account === '' || getData.password === '') {
            ctx.body = {
                result: getData,
                msg: 'account or password is empty',
                status: 404
            }
        }
        var sqlDb = db.getInstance();
        var result = null;
        try {
            result = await sqlDb.query(`select id from bc_user where account=${getData.account} and password=${getData.password}`);
        } catch (e) {
            console.log(e);
        }
        if (result.length === 0) {
            ctx.body = {
                result: result,
                msg: 'not exit',
                status: 404
            }
        } else {

            ctx.body = {
                result: result,
                msg: 'ok',
                status: 200
            }
        }
    }).get('/bc/login', async ctx => {
        console.log('get bc login');
        ctx.body = 'data';
    });
};

