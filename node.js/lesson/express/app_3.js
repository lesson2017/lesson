/**
 * express框架学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、express使用模板引擎
 */

var express = require('express');

var app = express();

//设置模板引擎
app.set('view engine','ejs');

//渲染页面
app.get('/', function (req,res) {
    //express框架默认的页面文件夹就是views
   res.render('index',{
      a:8,
      news:[
         "习近平致电祝贺非洲联盟首脑会议召开",
         "中国共产党问责条例印发 党组织严重违纪可被改组",
         "美国枪击案致警察3死4伤 嫌犯1人被击毙2人在逃(图)",
         "30省份275名艾滋患者遇诈骗 中国疾控中心回应",
         "新型传销：声称投资6万 两年后收入1000万"
      ],
      goods:[
         {
            "title":"诺基亚2001",
            "price":12000
         },
         {
            "title":"HTC",
            "price":1000
         },
         {
            "title":"iPhone 6S",
            "price":5000
         },
         {
            "title":"iPhone 7",
            "price":7000
         },
         {
            "title":"iPhone 6Plus",
            "price":6000
         }
      ]
   });
});

app.listen(3000);