/**
 * @author : by ghost
 * @date : 2016/12/06
 * @description : node.js连接mysql并且在mysql连接断掉10秒后自动重连
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

handleDisconnect();
//建立连接
function handleDisconnect()
{
    createConnection.connect(function (err) {
        if(err){
            console.log("MySql连接失败!");
            return;
        };
        console.log("MySql连接成功!");
    });
    //通过监听createConnection对象的error事件，在数据库服务器断开链接10s后自动重连
    createConnection.on('error', function (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
        {
            console.log("与mysql数据库之间的连接丢失");
            //10S后重连
            setTimeout(function () {
                handleDisconnect();
            },30000);
        }else{
            throw err;
        };
    });
};


app.listen(1337,function(){
    console.log("The service is started,listen on port 1337");
});