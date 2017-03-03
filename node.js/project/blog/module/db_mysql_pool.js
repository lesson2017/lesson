/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description :
 * */
/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,连接池的使用方式
 */

var mysql = require('mysql');
var settings = require('../config/settings');
var pool = mysql.createPool({
    host : settings.db.host,
    user : settings.db.user,
    password : settings.db.password,
    port : settings.db.port,
    database : settings.db.database
});

//执行sql
exports.query = function (sql,param,callback) {
    pool.getConnection(function (err,connection) {
        connection.query(sql,param,function (err, rows) {
            if (err) {
                console.log('error:' + err.message);
                return;
            };
            callback(rows);
        });
        connection.release(); //释放连接一定要在这里是否链接
    });
};