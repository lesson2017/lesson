var express = require('express');
var request = require('request');

var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(require('body-parser')());

app.post('/api/test', function (req,res) {
    console.log('success');
    console.log(req.body);
    res.json({name:req.body.name,info:'您的手机号已经存在，谢谢惠顾。'});
});

app.listen(3000,'127.0.0.1', function () {
    console.log('server is started');
});