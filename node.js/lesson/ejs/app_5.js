/**
 * Created by byzy on 2016/8/10.
 */
var express = require('express');
var ejs = require('ejs');
//使用ejs_layout模块实现ejs的layout布局
var ejs_layout = require('ejs-layouts');
var app = express();

//设置ejs模板后缀为html
app.engine('.html',ejs.__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(ejs_layout.express);

//设置路由
app.get('/', function (req,res) {
    res.layout('./public/layout', {title:"Homepage"}, {
        body:{
            block:"app_5",
            data:{
                "title":"局部模板测试",
                "comment":[
                    {"user":"gainover","content":"test1"},
                    {"user":"zongzi","content":"test2"},
                    {"user":"maomao","content":"test3"}
                ]
            }
        }
    });

});

//设置路由监听
app.listen(3000,'127.0.0.1', function (err) {
    console.log("server is started listen to port 3000");
});

