/**
 * @author : by Ghost
 * @date : 2017/2/8
 * @description :电影网站实例-mysql版，主程序入口文件
 * */
var express = require('express');
var ejs = require('ejs');
var ejs_layouts = require('ejs-layouts');
var app = express();

//静态资源配置
app.use(express.static('static'));
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
app.get('/',function(req,res){
    res.layout('./pages/public/layout', {title:"Homepage"}, {
        body: {
            block: "./pages/login/login",
            data: {name: "Matthew"}
        }
    });
});

/*错误处理*/
app.use(function (req,res,next) {
    //获取登录名和token
    res.status(404).layout('./pages/public/layout',{title:'404,您请求的内容不存在'},{
        body:{
            block :"./pages/error/404"
        }
    });
});
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).layout('./pages/public/layout',{title:'500,服务器内部错误'},{
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