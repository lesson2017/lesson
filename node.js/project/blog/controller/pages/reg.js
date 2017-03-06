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
    //header data
    var header_info = {
        title : "实验室-星际实验室！",
        nickname : req.session.nickname || '',
        nav : 'login'
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./pages/reg/index",
            data: {}
        }
    });
};

exports.doReg = function (req,res,next) {
    var ip = global.getClientIp(req).match(/\d+\.\d+\.\d+\.\d+/)[0];
    var formData = {
        "id" : Date.now(),
        "email" : req.body.email,
        "nickname" : req.body.nickname,
        "sex" : req.body.sex,
        "password" : req.body.password,
        "inn" : JSON.stringify(req.body.inn),
        "ip" : ip
    };
    //增加数据
    var sql = 'INSERT INTO blog_user(id,email,nickname,sex,password,inn,datetime,ip) VALUES(?,?,?,?,?,?,now(),?)';
    var param = [formData.id,formData.email,formData.nickname,formData.sex,formData.password,formData.inn,formData.ip];
    db.query(sql,param, function (rows) {
        if(rows.affectedRows === 1)
        {
            console.log("affectedRows :" + rows.affectedRows);
            console.log("注册成功");
            return res.redirect('/');
            //res.send('注册成功');
        };
    });
};