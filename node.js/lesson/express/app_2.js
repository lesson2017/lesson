/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、express的静态资源的伺服能力
 */

var express = require('express');

var app = express();
//设置静态资源服务
app.use(express.static('./public'));

app.listen(3000);
