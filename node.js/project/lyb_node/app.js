/**
 * Created by byzy on 2016/8/22.
 * node.js版留言板
 */

//引入模块
var express = require('express');
var db = require('./model/db');
var ejs = require('ejs');
var ejs_layouts = require('ejs-layouts');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

//实例化express
var app = express();

//设置中间件
app.use(express.static('./public'));
app.use(bodyParser());

//模板引擎设置

//设置ejs模板后缀为html
app.engine('.html',ejs.__express);

//设置视图模板的默认后缀为.html,避免每次渲染时要知道后缀
app.set('view engine','html');

//调用中间件ejs_layouts
app.use(ejs_layouts.express);

//设置路由
app.get('/', function (req,res) {

    //获取总共有多少条数据
    db.getAllCount('message', function (count) {
        res.layout('./main/layout',{title:'小小留言板'},{
            body: {
                block : "home",
                data : {
                    "page" : {
                        pageAmount : Math.ceil( count / 5 )
                    }
                }
            }
        });
    });
});


//接收用户提交的数据并且存入数据库
app.post('/', function (req,res) {
    db.insertOne('message',{
        'username' : req.body.username,
        'message': req.body.message,
        'datetime' : new Date()
    }, function (err,results) {
        if(err)
        {
            res.json({'results': '-1' });
            return;
        };
        res.json({'results': '1' });
    });
});

//读取留言列表
app.get('/list', function (req,res) {
    var page = parseInt(req.query.page) || 0;
    db.find('message',{},{'sort':{'datetime':-1},'pageamount' : 5,page:page}, function (err,results) {
        if(err)
        {
            res.json({'results': '-1' });
            return;
        };
        res.json({'results': '1', 'res' : results});
    });
});

//删除
app.get('/delete', function (req,res) {
    var id = req.query.id;
    db.deleteMany('message',{'_id' : ObjectId(id)}, function (err,result) {
        res.redirect('/'); //重定向
    })
});

//设置监听端口
app.listen(3000, function () {
    console.log('server is started listen is 3000 port');
});