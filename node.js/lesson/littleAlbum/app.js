/**
 * Created by Ghost on 2016/7/18.
 */

//引入模块
var express = require('express');
var app = express();
var route = require('./controller/route');

//设置模板引擎
app.set('view engine','ejs');

//设静态资源文件服务的路由中间件
//app.use('/static',express.static('./public'));
app.use(express.static('./public'));
app.use(express.static('./uploads'));

//首页
app.get('/',route.showIndex);

//显示某个相册列表
app.get('/:albumName',route.showAlbum);

//上传表单
app.get('/upload',route.showForm);

//接收表单数据
app.post('/upload',route.doPost);

//设置404
app.use(function (req,res) {
    res.render('error');
});

//监听3000端口
app.listen(4000, function () {
    console.log("server is started listen port 4000");
});
