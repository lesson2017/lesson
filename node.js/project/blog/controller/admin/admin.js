/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : for admin
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');
var unzip = require('unzip');
//blog
exports.blogList = function (req,res) {
    var sql = 'SELECT * FROM blog_list ORDER BY datetime DESC';
    db.query(sql, function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        rows.forEach(function (item) {
            item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
        });
        res.layout('./public/layout', {title: "博客列表"}, {
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
        res.layout('./public/layout', {title: "博客发表"}, {
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
            res.layout('./public/layout', {title: "博客发表"}, {
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
        "id" : Date.now(),
        "title" : req.body.title,
        "content" : req.body.editorValue,
        "author" : "ghost",
        "classify" : req.body.classify,
        "description" : req.body.description
    };
    if(!id)
    {
        //增加数据
        var sql = "INSERT INTO blog_list(id,title,content,author,datetime,classify,description) VALUES(?,?,?,?,now(),?,?)";
        var param = [formData.id,formData.title,formData.content,formData.author,formData.classify,formData.description];
    }else{
        //更新数据 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        var sql = "UPDATE blog_list SET title = '"+ formData.title +"',content='"+ formData.content +"',datetime=now(),classify='"+ formData.classify +"',description='"+ formData.description +"' WHERE id = '"+ id + "'";
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
    var sql = "SELECT * FROM blog_labs";
    db.query(sql,function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        res.layout('./public/layout', {title: "Demo列表"}, {
            body: {
                block: "./admin/labs/labs_list",
                data: {
                    "data" : rows
                }
            }
        });
    });
};

exports.labsUpload = function (req,res) {
    res.layout('./public/layout', {title: "发布Demo"}, {
        body: {
            block: "./admin/labs/labs_upload",
            data: {}
        }
    });
};
exports.labsDoUpload = function (req,res) {
    var form = new formidable.IncomingForm();
    var filesArr = [];
    //设置文件上传路径
    form.uploadDir = path.normalize(__dirname+'/../../static/temp/');

    //解析表单数据
    form.parse(req, function (err,fields,files) {
        if(err)
        {
            next(); //这个中间件不受理，继续往下面走
            return;
        };

        filesArr.push(files);

        //获取文件后缀名,给文件进行重命名
        var ext_name_img = path.extname(filesArr[0].upload_img.name);
        var ext_name_zip = path.extname(filesArr[0].upload_code_zip.name);
        var random = parseInt(Math.random()*89999 + 10000);
        var new_name = sd.format(new Date(), 'YYYYMMDDHHmmss') + random;
        var newFileName_img = new_name + ext_name_img;
        var newFileName_zip = new_name + ext_name_zip;

        filesArr.forEach(function (item) {
            global.fnUploadDeal(item.upload_img,newFileName_img);
            global.fnUploadDeal(item.upload_code_zip,newFileName_zip);
        });
        
        //上传成功后执行写入数据库
        var formData = {
            "id" : new_name,
            "title" : fields.title,
            "description" : fields.description,
            "author" : "ghost",
            "classify" : fields.classify,
            "imgPath" : newFileName_img,
            "zipPath" : newFileName_zip,
            "pv" : 99
        };
        console.log(formData);
        //增加数据
        var sql = "INSERT INTO blog_labs(id,title,classify,description,author,imgPath,zipPath,pv,datetime) VALUES(?,?,?,?,?,?,?,?,now())";
        var param = [formData.id,formData.title,formData.classify,formData.description,formData.author,formData.imgPath,formData.zipPath,formData.pv];
        db.query(sql,param, function (err,rows) {
            if(err)
            {
                console.log("error:"+err.message);
                return false;
            };
            return res.redirect('/admin/labs/list');
        });
    });
};

exports.labsDel = function (req,res) {};

//博客解压压缩包
exports.labsUnzip = function (req,res) {
    var id = req.params.id;
    //创建文件夹
    fs.exists('./views/output/'+req.params.id, function (exists) {
        console.log(exists);
        if(!exists)
        {
            fs.mkdir('./views/output/'+req.params.id);
            var zipPath = './static/upload/'+ id +'.zip';
            var outputPath = './views/output/'+req.params.id;
            var extract = unzip.Extract({ path: outputPath}); //写入数据
            var file = fs.createReadStream(zipPath).pipe(extract);
            file.on('finish', function () {
                console.log('finish');
            });
            file.on('error', function (err) {
                console.log(err);
            });
            res.json({'abc':'123'});
        };
    });
};