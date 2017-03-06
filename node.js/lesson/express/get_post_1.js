/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、get、post学习
 */

var express = require('express');
var app = express();

app.get('/', function (req,res) {
    console.log(req.query);
    res.send();
});

app.listen(3000, function () {
    console.log('Server is started listen port 3000');
});