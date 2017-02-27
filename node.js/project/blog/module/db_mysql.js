/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : 数据库常用操作
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'blog',
    user : 'root',
    password : 'admin'
});

//连接数据库
function connectDB(callback)
{
    connection.connect(function (err) {
        if(err){
            console.log("MySql连接失败!");
            //关闭数据库
            connection.end();
            return;
        };

        console.log("MySql连接成功!");
        callback();

        //关闭链接
        connection.end(function (err) {
            if(err)
            {
                console.log("关闭mysql数据库操作失败");
                return;
            };
            console.log("关闭mysql数据库操作成功");
        });
    });
};

//执行sql
exports.query = function (sql,param,callback) {
    connectDB(function () {
        connection.query(sql,param,callback);
    });
};