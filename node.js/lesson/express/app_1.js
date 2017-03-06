/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、express的路由能力
 * 2、express的静态资源的伺服能力
 */

var express = require('express');

var app = express();

app.get('/', function (req,res) {
    res.send('hello express');
});

app.get('/haha', function (req,res) {
    res.send('哈哈哈哈哈哈');
});

app.get(/^\/student\/([\d]{10})$/, function (req,res) {
    res.send('你的学生id是：'+req.params[0]);
});

app.get("/teacher/:id", function (req,res) {
    res.send('你的老师id是：'+req.params.id);
});

app.listen(3000);
