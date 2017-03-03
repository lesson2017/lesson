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
var pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "admin",
    port : '3306',
    database : 'blog'
});
//pool.getConnection(function (err,connection) {
//    connection.query('SELECT * FROM student;', function (err,rows) {
//        if(err)
//        {
//            console.log('error:'+err.message);
//            return;
//        };
//        for(var i=0;i<rows.length;i++)
//        {
//            console.log(rows[i]);
//        };
//    });
//
//    connection.query('insert into student(name,age) values("李牧",38)', function (err,rows) {
//        if(err)
//        {
//            console.log('error:'+err.message);
//            return;
//        };
//        console.log(rows.affectedRows);
//        connection.release(); //释放连接
//    });
//});

//执行sql
exports.query = function (sql,param,callback) {
    pool.getConnection(function (err,connection) {
        //connection.query(sql,param, callback);

        connection.query(sql,param, function (err,rows) {
            if(err)
            {
                console.log('error:'+err.message);
                return;
            };
            console.log(rows.affectedRows);
            connection.release(); //释放连接
        });
    });
};

exports.query = function (sql,param,callback) {
    pool.getConnection(function (err,connection) {
        connection.query(sql,param, function (err, rows) {
            if (err) {
                console.log('error:' + err.message);
                return;
            };
            callback(rows);
        });
        connection.release(); //释放连接一定要在这里是否链接
    });
};