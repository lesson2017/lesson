/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,执行插入数据操作
 */
var express = require('express');
var db = require('./db_mysql');
var app = express();

//增加数据
var sql = 'INSERT INTO student(name,age) VALUES(?,?)';
var param = ['爱新觉罗·玄烨','56'];
db.query(sql,param, function (err,rows) {
    if(err)
    {
        console.log("error:"+err.message);
        return;
    };
    console.log("affectedRows :" + rows.affectedRows);
});

app.listen(1337, function () {
    console.log('The service is started,listen on port 1337;');
});