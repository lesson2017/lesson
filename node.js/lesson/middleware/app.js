/**
 * @author : by Ghost
 * @date : 2016/12/06
 * @description : 调用实例中间件
 */

var express = require('express');
var middleware = require('./middleware/middleware');
var app = express();
//调用中间件
//app.use(middleware.setHead());//中间件第一种调用方式

//中间件第二种调用方式
app.get('/',middleware.setHead,function(req,res){
    res.writeHead(res.statusCode,res.header);
    res.write(res.head);
    res.end("hello world 你好");
});

app.listen(1337,function(){
    console.log("The service is started, listen on port 1337");
});