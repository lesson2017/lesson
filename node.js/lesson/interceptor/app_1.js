/**
 * @author: By Ghost
 * @date: 2016-09-28
 * @description: 登录拦截器实验(师傅推荐的方法)
 */

var express = require('express');
var app = express();
var session = require('express-session');
var controller = require('./module/controller');

//使用express-session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 30 * 60 * 1000 }
}));

//只要用户操作，session自动续期
app.use(function(req, res, next){
    req.session._garbage = Date();
    req.session.touch();
    next();
});

app.get('/', controller.loginCheck, function (req,res) {
    res.send('欢迎'+ req.session.username +'访问星际实验官网');
});

app.get('/login', function (req,res) {
    req.session.username = "钢铁侠";
    res.send('欢迎登录');
});

app.listen(3000, function (err) {
    if(err)
    {
        throw err;
    }
    console.log('server is started listen to port 3000');
});

