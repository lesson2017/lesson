/**
 * 模板引擎ejs学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 * 1、引入http、ejs模块
 * 2、创建服务器
 * 3、设置路由读取静态页面
 * 4、输出数据
 */

//引入模块
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

//创建服务器
var server = http.createServer(function (req,res) {
    if(req.url === '/'){
        fs.readFile('./views/index.ejs', function (err,data) {
            if(err)
            {
                throw Error('find error By Ghost');
            };
            //fs.readFile读取回来的是二进制文件，所以需要用toString()方法转为字符串
            var template = data.toString();
            var data = {
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
                        "title":"诺基亚",
                        "price":2000
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
            };
            var html = ejs.render(template,data);
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            res.end(html);
        });
    };
});
//监听3000端口
server.listen(3000,'127.0.0.1', function () {
   console.log("server is started listen port 3000");
});