/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : for admin
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
var path = require('path');
var fs = require('fs');
var unzip = require('unzip');
//blog
exports.blogList = function (req,res) {
    var sql = 'SELECT * FROM blog_list';
    db.query(sql, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
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
    var id = req.params.id || '';
    if(!id)
    {
        res.layout('./admin/public/layout', {title: "博客发表"}, {
            body: {
                block: "./admin/blog/blog_form",
                data: {
                    "status":"1"
                }
            }
        });
    }else{
        var sql = "SELECT * FROM blog_list WHERE id = '"+ id +"'";
        db.query(sql,function (err,rows) {
            if(err)
            {
                console.log("error:"+err.message);
                return false;
            };
            res.layout('./admin/public/layout', {title: "博客发表"}, {
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
    }
};
exports.blogDel = function (req,res) {
    //DELETE FROM 表名称 WHERE 列名称 = 值
    var sql = "DELETE FROM blog_list WHERE id = '"+ req.body.id +"'";
    db.query(sql, function (err,rows) {
        if(err)
        {
           return res.json({"result":1,"resultMsg":err.message})
        };
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
        "title" : req.body.title,
        "content" : req.body.editorValue,
        "author" : "ghost",
        "classify" : req.body.classify
    };
    if(!id)
    {
        //增加数据
        var sql = 'INSERT INTO blog_list(title,content,author,datetime,classify) VALUES(?,?,?,now(),?)';
        var param = [formData.title,formData.content,formData.author,formData.classify];
    }else{
        //更新数据 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        var sql = "UPDATE blog_list SET title = '"+ formData.title +"',content='"+ formData.content +"',datetime=now(),classify='"+ formData.classify +"' WHERE id = '"+ id + "'";
    };
    db.query(sql,param, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        return res.redirect('/admin/blog/list');
    });
};

//labs
exports.labsList = function (req,res) {
    res.layout('./admin/public/layout', {title: "博客列表"}, {
        body: {
            block: "./admin/labs/labs_list",
            data: {}
        }
    });
};
exports.labsUnzip = function(req,res){
    var zipPath = __dirname+'/../../static/upload/zip/test.zip';
    var outputPath = __dirname+'/../../views/output';
    var extract = unzip.Extract({ path: outputPath}); //写入数据
    var file = fs.createReadStream(zipPath).pipe(extract);
    file.on('finish', function () {
        console.log('finish');
    });
    file.on('error', function (err) {
        console.log(err);
    });
    res.send('success');
};
//读取解压后的文件
exports.labsDemo = function (req,res) {
    var id = req.params.id;
    res.layout('./admin/public/layout', {title: "博客列表"}, {
        body: {
            block: "./output/"+id+"/index",
            data: {
                id : id
            }
        }
    });
};
exports.labsUpload = function (req,res) {};
exports.labsDoUpload = function (req,res) {};
exports.labsDel = function (req,res) {};