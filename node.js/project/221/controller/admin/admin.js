/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description :
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
exports.blogList = function (req,res) {
    var sql = 'SELECT * FROM blog_list';
    db.query(sql, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return;
        };
        rows.forEach(function (item) {
            item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
        });
        res.layout('./admin/public/layout', {title: "博客列表"}, {
            body: {
                block: "./admin/blog/blog_list",
                data: {
                    data: rows
                }
            }
        });
    });
};
exports.blogPublish = function (req,res) {
    res.layout('./admin/public/layout', {title: "博客发表"}, {
        body: {
            block: "./admin/blog/blog_form",
            data: {
                nav: ""
            }
        }
    });
};
exports.blogDel = function (req,res) {
    //DELETE FROM 表名称 WHERE 列名称 = 值
    var sql = "delete from blog_list where id = '"+ req.body.id +"'";
    db.query(sql, function (err,rows) {
        if(err || rows.affectedRows != 1)
        {
           return res.json({"result":1,"resultMsg":err.message})
        };
        if(rows.affectedRows === 1)
        {
            return res.json({"result":1,"resultMsg":"删除成功！"});
        }
    });
};
exports.doEdit = function (req,res) {
    var formData = {
        "title" : req.body.title,
        "content" : req.body.editorValue,
        "author" : "ghost",
        "classify" : req.body.classify
    };
    //增加数据
    var sql = 'INSERT INTO blog_list(title,content,author,datetime,classify) VALUES(?,?,?,now(),?)';
    var param = [formData.title,formData.content,formData.author,formData.classify];
    db.query(sql,param, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return;
        };
        return res.redirect('/admin/blog/list');
    });
};