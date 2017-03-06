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
        nickname : req.session.nickname || '',
        nav : 'login'
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./pages/login/index",
            data: {}
        }
    });
};
exports.doLogin = function (req,res) {
    var formData = {
        "email" : req.body.email,
        "password" : req.body.password
    };
    //点击登录
    var sql = "SELECT id,nickname,password,role FROM blog_user WHERE email = '"+ formData.email +"'";
    var param = [];
    db.query(sql, param,function (rows) {
        var data = rows[0];
        if(data.password == formData.password)
        {
            //登录成功后将用nickname存入session
            req.session.nickname = data.nickname;
            req.session.role = data.role;
            return res.redirect('/');
        }else{
            return res.send('密码或邮箱错误！');
        };
    });
};
//退出
exports.logout = function (req,res) {
    req.session.nickname = null;
    req.session.role = null;
    return res.redirect('/');
};