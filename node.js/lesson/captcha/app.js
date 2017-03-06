/**
 * Created by byzy on 2016/9/1.
 * 基于ccap实现的验证码
 * 1、需要python环境
 * 2、linux和windows有使用区别
 */

var express = require('express');
var captchapng = require('captchapng');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');

app.get('/captcha.png', function (req,res) {
    //console.log(parseInt(Math.random()*9000+1000).toString(16));
    console.log(parseInt(Math.random()*9000+1000).toString(10));
    var p = new captchapng(120,30,parseInt(Math.random()*9000+1000));
     // width,height,numeric captcha
    p.color(255, 255, 255, 255);  // First color: background (red, green, blue, alpha)
    p.color(130, 38, 38, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();

    var imgbase64 = new Buffer(img,'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
});

app.listen(3000, function () {
    console.log('ok');
});