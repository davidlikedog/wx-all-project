var router = require('koa-router')();
var db = require('../db/mysql');


const jwt = require('jsonwebtoken');

const jwtSecret = 'jwtSecret';
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;

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
        console.log(`get data`);
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

            let token = jwt.sign({
                data: payload
            }, jwtSecret, {expiresIn: '1h'});
            // let token = jwt.sign(payload, jwtSecret);
            console.log(token);

            ctx.body = {
                user: getData.account,
                status: 200,
                token
            };
        }
    }).get('/bc/test', async ctx => {
        var token = ctx.header.authorization;
        console.log(token);
        let payload = jwt.verify(token.split(' ')[1], jwtSecret);
        console.log(payload);
        ctx.body = {
            data: payload
        }
    }).get('/sp', async ctx => {
        ctx.body = '123';
    })
};

