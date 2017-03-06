/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,进行数据库断线重连
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "admin",
    port : '3306',
    database : 'school'
});

/*function handleDisconnect()
{
    connection.connect(function (err) {
        if(err)
        {
            console.log("正在进行断线重连："+ new Date());
            setTimeout(handleDisconnect,2000);  //2秒重连
            return;
        };
        console.log("连接成功！");
    });
    connection.on('error', function (err) {
        console.log("Error:",err.message);
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
        {
            handleDisconnect();
        }else{
            console.log("Error:"+err.message);
            return;
        };
    });
};*/

function handleDisconnect() {
    //connection = mysql.createConnection(db_config);
    connection.connect(function(err) {
        if(err) {
            console.log("进行断线重连：" + new Date());
            setTimeout(handleDisconnect, 2000);   //2秒重连一次
            return;
        };
        console.log("连接成功");
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
};

handleDisconnect();