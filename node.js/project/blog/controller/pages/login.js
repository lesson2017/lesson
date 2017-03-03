/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : login
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
exports.index = function (req, res, next) {
    //header data
    var header_info = {
        title : "登录-星际实验室！",
        nickname : req.session.nickname || ''
    };
    res.layout('./pages/public/layout', header_info, {
        body: {
            block: "./pages/login/index",
            data: {
                nav: "Matthew1321"
            }
        }
    });
};
exports.doLogin = function (req,res) {
    //点击登录
    var sql = "SELECT * FROM blog_user WHERE email = '"+ req.body.email +"'";
    var param = [];
    db.query(sql, param,function (rows) {
        var data = rows[0];
        if(data.password == req.body.password)
        {
            //登录成功后将用nickname存入session
            req.session.nickname = data.nickname;
            res.cookie('nickname',data.nickname,{path: '/'});
            return res.redirect('/');
        }else{
            return res.send('密码或邮箱错误！');
        };
    });
};