/**
 * Created by byzy on 2016/8/18.
 * node.js 连接 mongodb实例
 */

//引入模块
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

//实例化express
var app = express();

//设置路由
app.get('/', function (req,res) {
    //连接数据库
    var url = 'mongodb://127.0.0.1:27017/mytest'; //设置连接的url

    //连接
    MongoClient.connect(url, function (err,db) {
        if(err)
        {
            console.log('数据库连接失败');
            return false;
        };

        console.log('数据库连接成功');
        //在user集合里面写入一条数据
        db.collection('user').insertOne({
            'name':'Tom',
            'age': parseInt(Math.random()*100)+10
        }, function (err,result) {
            if(err)
            {
                console.log('插入失败');
                return false;
            };

            //输出数据库操作结果
            res.send(result);

            //关闭链接
            db.close();
        });
    });
});

//设置监听端口
app.listen(3000,'127.0.0.1', function () {
    console.log('server is started listen is 3000 port');
});