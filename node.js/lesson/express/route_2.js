/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、app.use 中间件学习
 */

var express = require("express");
var app = express();
//设置静态资源文件
app.use('/jingtai',express.static('./public'));

//设置路由
app.get('/', function (req,res) {
    res.send('success');
});

//设置404
app.use(function (req,res) {
   res.status(404).send('没有这个页面');
});
//设置端口监听
app.listen(3000, function () {
    console.log('server is started listen port 3000');
});
