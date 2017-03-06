/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、express使用模板引擎
 */

var express = require('express');

var app = express();

//渲染页面
app.use('/admin', function (req,res) {
    res.write(req.originalUrl + "\n");
    res.write(req.baseUrl + "\n");
    res.write(req.path + "\n");
    res.end('Ok');
});
app.listen(3000);