/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、get、post学习
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine','ejs');
app.get('/', function (req,res) {
    console.log(req.ip);
    res.render('form');
});

//调用body-parser解析表达提交
app.use(bodyParser.urlencoded({extended:false}));
app.post('/', function (req,res) {
    console.log(req.body);
});
app.listen(4000, function () {
    console.log('Server is started listen port 4000');
});