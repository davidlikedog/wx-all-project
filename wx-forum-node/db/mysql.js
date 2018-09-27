var mysql = require('mysql');
var config = require('./dbConfig');

const database = config.databases;

class Db {
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }

    constructor() {
        this.db = null;
        this.connectMysql();
    }

    connectMysql() {
        this.db = mysql.createPool({
            host: database.HOST,
            user: database.USER,
            password: database.PASSWORD,
            database: database.DATABASE
        })
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this.db.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    connection.query(sql, (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }
                    })
                }
            })
        }).catch(err => {
            console.log(error, 'Promise error');
        })
    }
}

module.exports = Db;
