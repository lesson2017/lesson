/**
 * Created by byzy on 2016/8/24.
 * 真实登录
 */

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var crypto = require('crypto');
var ejs = require('ejs');
var db = require('./model/db');
var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
//设置ejs模板后缀为html
app.engine('.html',ejs.__express);

//设置视图模板的默认后缀为.html,避免每次渲染时要知道后缀
app.set('view engine','html');

app.get('/index.html', function (req,res) {
    if(req.session.login)
    {
        res.send('欢迎您，'+req.session.username)
    }else{
        res.send('登录失败');
    };
});

app.get('/login.html', function (req,res) {
    res.render('login',{"test":"我是一个<font color='red'>测试标签</font>"});
});

app.get('/login', function (req,res) {
    var username = req.query.username;
    var password = req.query.password;
    console.log(username);
    //根据用户输入的数据去数据库查找对应数据
    db.find('users',{'username':username},{},function (err,results) {
        if(err)
        {
            console.log(err);
            return;
        };

        if(results.length == 0)
        {
            res.send('用户名不存在');
            return;
        };

        if( password == results[0].password )
        {
            req.session.login = true;
            req.session.username = results[0].username;
            res.send('登录成功，欢迎您'+results[0].username);
        }else{
            res.send('密码不正确');
            return;
        };
    })
});

app.listen('5000', function (err) {
    console.log('server is started listen port 5000');
});