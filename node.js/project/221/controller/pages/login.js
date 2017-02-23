/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : login
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
exports.index = function (req, res, next) {
    res.layout('./pages/public/layout', {title: "Homepage"}, {
        body: {
            block: "./pages/login/index",
            data: {
                nav: "Matthew1321"
            }
        }
    });
};
exports.doLogin = function (req,res) {
    //增加数据
    var sql = "SELECT * FROM blog_user WHERE email = '"+ req.body.email +"'";
    db.query(sql, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return;
        };
        var data = rows[0];
        if(data['password'] == req.body.password)
        {
            return res.redirect('/');
        }else{
            return res.send('密码或邮箱错误！');
        };
    });
};