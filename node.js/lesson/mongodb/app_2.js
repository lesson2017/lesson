/**
 * Created by byzy on 2016/8/18.
 *
 */

//引入模块
var express = require('express');
var db = require('./model/db');

//实例化express
var app = express();

//设置路由
app.get('/', function (req,res) {
    db.insertOne('teacher', {'name':'小莲','age':parseInt(Math.random()*100)+10}, function (err,result) {
        if(err)
        {
            console.log('写入数据出错');
            return false;
        };
        res.send(result);
    })
});

//读取数据
app.get('/du', function (req,res) {
    //获取当前page
    var page = req.query.page ? req.query.page : 0;
    db.find('teacher',{},{'pageamount':4,'page': page}, function (err,result) {
        if(err)
        {
            console.log(err);
            return;
        };
        res.send(result);
    })
});

//删除数据
app.get('/delete', function (req,res) {
    db.deleteMany('teacher',{'name':"王二柱"}, function (err,results) {
        if(err)
        {
            console.log(err);
            return;
        };
        res.send(results);
    });
});

//修改数据
app.get('/update', function (req,res) {
    db.updateMany('teacher',{'name':'王大柱'},{$set:{'name':'我登科'}}, function (err,resultes) {
        if(err)
        {
            console.log(err);
            return;
        };
        res.send(resultes);
    })
});

//设置监听端口
app.listen(3000,'127.0.0.1', function () {
    console.log('server is started listen is 3000 port');
});