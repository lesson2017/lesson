/**
 * Created by byzy on 2016/8/24.
 * session study
 * 依赖模块：express-session
 */
var express = require('express');
var session = require('express-session');
var app = express();

//使用express-session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//设置路由
app.get('/index.html', function (req,res) {
    if(req.session.login)
    {
        res.send('欢迎你'+req.session.name);
    }else{
        res.send('您还没有登录');
    };
});

app.get('/login.html', function (req,res) {
    req.session.login = true; //设置session
    req.session.name = 'john'; //设置登录人名字
    res.send('登录成功');
});

//设置服务端口监听
app.listen(4000, function (err) {
    console.log('server is started listen port 4000');
});