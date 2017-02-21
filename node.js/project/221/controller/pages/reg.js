/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var mysql = require('mysql');
//var db = require('../../module/db_mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
exports.index = function (req,res,next) {
    res.layout('./pages/public/layout', {title:"欢迎注册",layout_nav:"reg"}, {
        body: {
            block: "./pages/reg/index",
            data: {}
        }
    });
};

exports.doReg = function (req,res,next) {
    var ip = global.getClientIp(req).match(/\d+\.\d+\.\d+\.\d+/)[0];
    var formData = {
        "email" : req.body.email,
        "nickname" : req.body.nickname,
        "sex" : req.body.sex,
        "password" : req.body.password,
        "inn" : JSON.stringify(req.body.inn),
        "ip" : ip
    };
    console.log(formData);
    //增加数据
    var sql = 'INSERT INTO blog_user(email,nickname,sex,password,inn,datetime,ip) VALUES(?,?,?,?,?,now(),?)';
    var param = [formData.email,formData.nickname,formData.sex,formData.password,formData.inn,formData.ip];
    db.query(sql,param, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return;
        };
        console.log("affectedRows :" + rows.affectedRows);
        console.log("注册成功");
        return res.redirect('/');
        //res.send('注册成功');
    });
};