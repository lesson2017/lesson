/**
 * Created by Ghost on 2016/7/18.
 */
//引入文件操作模块
var file = require('../models/file');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');
//index
exports.showIndex = function (req,res) {
    /*res.render('index',{
        "albums":file.getAllAlbums()
    });*/
    file.getAllAlbums(function (err,allAlbums) {
        if(err)
        {
            res.send(err);
            return;
        };
        res.render('index',{
            'albums':allAlbums
        });
    })
};
//albumList
exports.showAlbum = function (req, res,next) {
    //获取相册名称
    var albumName = req.params.albumName;

    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if(err)
        {
            next();
            //res.render('error');
            return;
        };
        //具体业务操作交给models
        //遍历相册图片
        res.render('album',{
            "albumName" : albumName,
            "images" : imagesArray
        });
    });
};

//显示照片上传表单
exports.showForm = function (req,res) {
    file.getAllAlbums(function (err,allAlbums) {
        res.render('upload',{
            "albumName" : allAlbums
        });
    });
};

//实现上传
exports.doPost = function (req,res) {
    var form = new formidable.IncomingForm();

    //设置文件上传路径
    form.uploadDir = path.normalize(__dirname+'/../tempup/');

    //解析表单数据
    form.parse(req, function (err,fields,files,next) {
        if(err)
        {
            next(); //这个中间件不受理，继续往下面走
            return;
        };

        //判断图片size
        var size = parseInt(files.upload.size);
        console.log(size);
        if(size > 1024*1024)
        {
            res.send('图片大小不能超过1024KB');
            //删除图片
            fs.unlink(files.upload.path);
            return;
        }
        //改名
        var oldPath = files.upload.path;
        var folder = fields.chooseAlbum;
        var extName = path.extname(files.upload.name)
        var random = parseInt(Math.random()*89999 + 10000);
        var newFileName = sd.format(new Date(), 'YYYYMMDDHHmmss') + random + extName;

        console.log(newFileName);
        var newPath = path.normalize(__dirname +'/../uploads/'+ folder +'/'+ newFileName);
        fs.rename(oldPath,newPath, function (err) {
            if(err)
            {
                res.send("改名失败");
            };
            res.send('成功');
        });
    });
};