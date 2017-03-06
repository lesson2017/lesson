/**
 * @author : by ghost
 * @date : 2016/12/06
 * @description : node.js连接mysql
 */

var express = require('express');
var mysql = require('mysql');
var app = express();

//创建连接对象
var createConnection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'school',
    user : 'root',
    password : 'admin'
});

//建立连接
createConnection.connect(function (err) {
    if(err){
        console.log("MySql连接失败!");
        return;
    };
    console.log("MySql连接成功!");
    //关闭链接
    createConnection.end(function (err) {
        if(err)
        {
            console.log("关闭mysql数据库操作失败");
            return;
        };
        console.log("关闭mysql数据库操作成功");
    });
});


app.listen(1337,function(){
    console.log("The service is started,listen on port 1337");
});