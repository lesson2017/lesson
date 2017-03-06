/**
 * @author : by Ghost
 * @date : 2017/2/8
 * @description :电影网站实例-mysql版，主程序入口文件
 * */

var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var ejs_layouts = require('ejs-layouts');
var router = require('./module/router');
var app = express();

//使用cookie中间件
app.use(cookieParser());
//使用express-session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 5 * 60 * 1000 }
}));

//只要用户操作，session自动续期
app.use(function(req, res, next){
    req.session._garbage = Date();
    req.session.touch();
    next();
});
//静态资源配置
app.use(express.static('static'));
app.use(express.static('./views/output')); //这是第二个静态服务
//视图模板配置
app.set('views',__dirname + '/views');

//模板引擎设置
//设置ejs模板后缀为html
app.engine('.html',ejs.__express);

//设置视图模板的默认后缀为.html,避免每次渲染时要知道后缀
app.set('view engine','html');

//调用中间件ejs_layouts
app.use(ejs_layouts.express);
/*路由处理*/
router(app);

/*错误处理*/
app.use(function (req,res,next) {
    //获取登录名和token
    var header_info = {
        title : "404,您请求的内容不存在",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav:"home"
    };
    res.status(404).layout('./public/layout',header_info,{
        body:{
            block :"./pages/error/404"
        }
    });
});
app.use(function(err, req, res, next) {
    var header_info = {
        title : "500,服务器内部错误",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav:"home"
    };
    res.status(500).layout('./public/layout',header_info,{
        body:{
            block :"./pages/error/500"
        }
    });
});

//设置监听端口
app.listen(5000, function (err) {
    if (err) {
        throw err;
    };
    console.log("The server is started,listen on port 5000");
});