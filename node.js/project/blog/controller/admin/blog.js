/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : for admin
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
var settings = require('../../config/settings');
//blog
exports.blogList = function (req,res) {
    var sql = 'SELECT COUNT(*) FROM blog_list';
    var param = [];
    //分页
    var currentPage = req.params.page || 1; //当前页
    var itemTotal = 0; //总条数
    var pageNum = settings.pages.page_num;

    db.query(sql,param, function (rows) {
        //获取总共有多少条数据
        itemTotal = rows[0]["COUNT(*)"];

        var sql = "SELECT * FROM blog_list ORDER BY datetime DESC limit "+ (currentPage-1) * pageNum +"," + pageNum;
        var param = [];
        db.query(sql,param, function (rows) {
            rows.forEach(function (item) {
                item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
            });

            //header data
            var header_info = {
                title : "博客管理-星际实验室！",
                nickname : req.session.nickname || '',
                role : req.session.role || '',
                nav : "admin"
            };
            res.layout('./public/layout', header_info, {
                body: {
                    block: "./admin/blog/blog_list",
                    data: {
                        data: rows,
                        pages : {
                            currentPage : parseInt(currentPage),
                            totalPage : parseInt(Math.ceil(itemTotal / pageNum)),
                            typePage : 'admin/blog/list'
                        }
                    }
                }
            });
        });
    });
};
exports.blogPublish = function (req,res) {
    var id = req.params.id || '';
    if(!id)
    {
        //header data
        var header_info = {
            title : "博客发布-星际实验室！",
            nickname : req.session.nickname || '',
            role : req.session.role || '',
            nav : "admin"
        };
        res.layout('./public/layout', header_info, {
            body: {
                block: "./admin/blog/blog_form",
                data: {
                    "status":"1"
                }
            }
        });
    }else{
        var sql = "SELECT * FROM blog_list WHERE id = '"+ id +"'";
        var param = [];
        db.query(sql,param,function (rows) {

            //header data
            var header_info = {
                title : "博客发布-星际实验室！",
                nickname : req.session.nickname || '',
                role : req.session.role || '',
                nav : "admin"
            };
            res.layout('./public/layout', header_info, {
                body: {
                    block: "./admin/blog/blog_form",
                    data: {
                        "status" : "0",
                        "data" : rows[0],
                        "id" : id
                    }
                }
            });
        });
    };
};
exports.blogDel = function (req,res) {
    //DELETE FROM 表名称 WHERE 列名称 = 值
    var sql = "DELETE FROM blog_list WHERE id = '"+ req.body.id +"'";
    var param = [];
    db.query(sql,param, function (rows) {
        if(rows.affectedRows === 1)
        {
            return res.json({"result":1,"resultMsg":"删除成功！"});
        }else{
            return res.json({"result":0,"resultMsg":"删除失败！"});
        };
    });
};
exports.doEdit = function (req,res) {
    var id = req.params.id || '';
    var formData = {
        "id" : Date.now(),
        "title" : req.body.title,
        "content" : req.body.editorValue,
        "author" : "ghost",
        "classify" : JSON.parse(req.body.classify),
        "description" : req.body.description
    };
    console.log(formData);
    if(!id)
    {
        //增加数据
        var sql = "INSERT INTO blog_list(id,title,content,author,datetime,classify_name,classify_id,description) VALUES(?,?,?,?,now(),?,?,?)";
        var param = [formData.id,formData.title,formData.content,formData.author,formData.classify.className,formData.classify.id,formData.description];
    }else{
        //更新数据 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        //var sql = "UPDATE blog_list SET title = '"+ formData.title +"',content='"+ formData.content +"',datetime=now(),classify='"+ formData.classify +"',description='"+ formData.description +"' WHERE id = '"+ id + "'";
        var sql = "UPDATE blog_list SET title=?,content=?,datetime=now(),classify_id=?,classify_name=?,description=? WHERE id=?";
        var param = [formData.title,formData.content,formData.classify.id,formData.classify.className,formData.description,id];
    };
    db.query(sql,param, function (rows) {
        console.log(rows);
        if(rows.affectedRows == 1)
        {
            return res.redirect('/admin/blog/list');
        };
    });
};