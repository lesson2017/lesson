/**
 * Created by byzy on 2016/8/10.
 */
var express = require('express');
var ejs = require('ejs');
var app = express();

//设置ejs模板后缀为html
app.engine('.html',ejs.__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

//设置路由
app.get('/', function (req,res) {
    res.render('app_3',{
        name:"东方不败1"
    });
});

//设置路由监听
app.listen(3000,'127.0.0.1', function (err) {
    console.log("server is started listen to port 3000");
});