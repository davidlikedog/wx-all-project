var router = require('koa-router')();
var db = require('../db/mysql');


const jwt = require('jsonwebtoken');

const jwtSecret = 'jwtSecret';
// const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;

module.exports = function r() {
    return router.get('/', async ctx => {
        ctx.body = '132';
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
    }).get('/bc/getAll', async ctx => {
        var token = ctx.header.authorization;
        let payload = null;
        try {
            payload = jwt.verify(token.split(' ')[1], jwtSecret);
        } catch (e) {
            console.log(e);
            ctx.body = {
                status: 'bad token',
                msg: 'your token is not true'
            }
        }
        var sqlDb = db.getInstance();
        var result = null;
        try {
            result = await sqlDb.query('select * from all_forum');
        } catch (e) {
            console.log(e);
        }
        ctx.body = result;
    }).get('/bc/getMine/:who', async ctx => {
        var token = ctx.header.authorization;
        let payload = null;
        try {
            payload = jwt.verify(token.split(' ')[1], jwtSecret);
        } catch (e) {
            console.log(e);
            ctx.body = {
                status: 'bad token',
                msg: 'your token is not true'
            }
        }
        var who = ctx.params.who;
        var sqlDb = db.getInstance();
        var result = null;
        try {
            result = await sqlDb.query(`select all_forum.* from all_forum join bc_user on all_forum.who_send=bc_user.id where bc_user.account='${who}'`);
        } catch (e) {
            console.log(e);
        }
        ctx.body = result;
    }).post('/login', async ctx => {
        ctx.body = ctx.request.body;
    }).post('/bc/login', async ctx => {
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
            result = await sqlDb.query(`select id from bc_user where account='${getData.account}' and password='${getData.password}'`);
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

            let payload = {
                // exp: Date.now() + tokenExpiresTime,
                // exp: Math.floor(Date.now() / 1000) + (60 * 60),
                name: getData.account
            };

            let token = jwt.sign({ // token 编译，并且设置1小时过期
                data: payload
            }, jwtSecret, {expiresIn: '1h'});

            // let token = jwt.sign(payload, jwtSecret);

            function t(token) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({
                            user: getData.account,
                            status: 200,
                            token
                        })
                    }, 3000)
                })
            }

            ctx.body = await t(token);
        }
    }).get('/bc/test', async ctx => { // token 翻译
        var token = ctx.header.authorization;
        let payload = jwt.verify(token.split(' ')[1], jwtSecret);
        ctx.body = {
            data: payload
        }
    }).get('/sp', async ctx => {
        ctx.body = `this is test sp, see if it not verify`;
    })
};

