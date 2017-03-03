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
var settings = require('../../config/settings');
var rmdir = require('rmdir');

//labs列表
exports.labsList = function (req,res) {
    //分页
    var currentPage = req.params.page || 1; //当前页
    var itemTotal = 0; //总条数
    var pageNum = settings.pages.page_num;

    var sql = "SELECT COUNT(*) FROM blog_labs";
    var param = [];
    db.query(sql,param, function (rows) {
        itemTotal = rows[0]["COUNT(*)"];
        var sql = "SELECT * FROM blog_labs ORDER BY datetime DESC limit "+ (currentPage-1) * pageNum +"," + pageNum;
        var param = [];
        db.query(sql,param,function (rows) {
            rows.forEach(function (item) {
                item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
            });
            res.layout('./admin/public/layout', {title: "Demo列表"}, {
                body: {
                    block: "./admin/labs/labs_list",
                    data: {
                        "data" : rows,
                        "pages" : {
                            currentPage : parseInt(currentPage),
                            totalPage : parseInt(Math.ceil(itemTotal / pageNum)),
                            typePage : 'admin/labs/list'
                        }
                    }
                }
            });
        });
    });
};

//上传demo表单
exports.labsUpload = function (req,res) {
    var id = req.params.id || '';
    if(!id)
    {
        res.layout('./admin/public/layout', {title: "发布Demo"}, {
            body: {
                block: "./admin/labs/labs_upload",
                data: {
                    "id" : id
                }
            }
        });
    }else{
        var sql = "SELECT * FROM blog_labs WHERE id = '"+ id +"'";
        var param = [];
        db.query(sql,param,function (rows) {
            res.layout('./admin/public/layout', {title: "发布Demo"}, {
                body: {
                    block: "./admin/labs/labs_upload",
                    data: {
                        "data" : rows[0],
                        "id" : id
                    }
                }
            });
        });
    };
};

//上传demo
exports.labsDoUpload = function (req,res) {
    var id = req.params.id || '';
    console.log(id);
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

        if(!id)
        {
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
            //增加数据
            var sql = "INSERT INTO blog_labs(id,title,classify,description,author,imgPath,zipPath,pv,datetime) VALUES(?,?,?,?,?,?,?,?,now())";
            var param = [formData.id,formData.title,formData.classify,formData.description,formData.author,formData.imgPath,formData.zipPath,formData.pv];
        }else{
            var formData = {
                "title" : fields.title,
                "description" : fields.description,
                "author" : "ghost",
                "classify" : fields.classify,
                "pv" : 99
            };
//更新数据 UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
            var sql = "UPDATE blog_labs SET title = '"+ formData.title +"',description='"+ formData.description +"',datetime=now(),classify='"+ formData.classify +"' WHERE id = '"+ id + "'";
        };

        //执行sql
        db.query(sql,param, function (rows){
            return res.redirect('/admin/labs/list');
        });
    });
};

//删除demo
exports.labsDel = function (req,res) {
    //先进行数据库删除，完成后进行文件硬链接删除
    var id = req.body.id;
    var sql = "DELETE FROM blog_labs WHERE id='"+ id +"'";
    var param = [];
    db.query(sql,param, function (rows) {
        if(rows.affectedRows == 1)
        {
            //进行文件删除，删除文件硬链接,需要删除的文件有2个，1个是图片，一个解压后的文件
            rmdir('./static/img/labs/'+id+'.jpg', function (err, dirs, files) {
                if(err)
                {
                    return res.json({"result":0,"resultMsg":err});
                };

                //删除解压后的文件
                rmdir('./views/output/'+id, function (err, dirs, files) {
                    if(err)
                    {
                        return res.json({"result":0,"resultMsg":err});
                    };
                    return res.json({"result":1,"resultMsg":"删除成功"});
                });
            });
        }else{
            return res.json({"result":0,"resultMsg":"删除失败，请重试！"});
        };
    });
};

//解压压缩包
exports.labsUnzip = function (req,res) {
    var id = req.body.id;
    //创建文件夹
    fs.exists('./views/output/'+id, function (exists) {
        if(!exists)
        {
            fs.mkdir('./views/output/'+id);
            var zipPath = './static/upload/'+ id +'.zip';
            var outputPath = './views/output/'+id;
            var extract = unzip.Extract({ path: outputPath}); //写入数据
            var file = fs.createReadStream(zipPath).pipe(extract);
            file.on('finish', function () {
                //解压完成后删除压缩包
                fs.unlink(zipPath, function (err) {
                    if(err)
                    {
                        console.log("压缩包删除失败："+err);
                        return res.json({"result":0,"resultMsg":err});
                    };
                    //删除成功后,修改数据库对应状态，然后返回解压完成
                    var sql = "UPDATE blog_labs SET status = 1 WHERE id = '"+ id +"'";
                    var param = [];
                    db.query(sql,param, function (rows) {
                        if(rows.affectedRows == 1)
                        {
                            return res.json({"result":1,"resultMsg":"解压成功"});
                        };
                    });
                });
            });
            file.on('error', function (err) {
                console.log(err);
            });
        };
    });
};