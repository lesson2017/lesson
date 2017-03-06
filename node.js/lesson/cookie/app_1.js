/**
 * Created by byzy on 2016/8/24.
 * cookie study
 * 依赖模块：cookie-parser
 */
var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();

//使用cookie-parser中间件
app.use(cookieParser());

//设置路由
app.get('/index.html', function (req,res) {
    res.cookie('name', 'john', { maxAge: 900000, httpOnly: true });
    res.send(req.cookies);
});

//设置服务端口监听
app.listen(4000, function (err) {
    console.log('server is started listen port 4000');
});