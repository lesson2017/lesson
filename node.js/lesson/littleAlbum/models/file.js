/**
 * Created by Ghost on 2016/7/19.
 */

//引入模块
var fs = require('fs');

//获取所有图片文件夹名称
exports.getAllAlbums = function (callback)
{
    fs.readdir('./uploads', function (err,files) {
        if(err)
        {
            callback('没有找到uploads文件夹',null)
        };
        //声明变量存储结构
        var allAlbums = [];

        //自定义迭代器
        (function iterator(i) {
            if(i>=files.length)
            {
                //遍历结束，输出一下结果集
                console.log(allAlbums);

                //用回调函数将数据传递回去
                callback(null,allAlbums);

                //结束函数
                return;
            };
            fs.stat('./uploads/'+files[i], function (err,stats) {
                if(stats.isDirectory())
                {
                    allAlbums.push(files[i]);
                };
                //调用
                iterator(i+1);
            });
        })(0);
    });
};

//获取指定文件夹下的所有图片
exports.getAllImagesByAlbumName = function (albumName,callback) {
    fs.readdir('./uploads/'+albumName,function(err,files){
        if(err)
        {
            callback('没有找到文件夹',null)
            return;
        };

        //声明变量存储图片
        var allImages = [];

        (function iterator(i) {
            //如果遍历完成后，终止程序
            if(i>=files.length)
            {
                //遍历结束，输出一下结果集
                console.log(allImages);

                //用回调函数将数据传递回去
                callback(null,allImages);

                //结束函数
                return;
            };

            //迭代图片
            fs.stat('./uploads/'+albumName+'/'+files[i], function (err,stats) {
                if(err){
                    callback('没有找到文件夹',null)
                    return;
                }
                if(stats.isFile())
                {
                    allImages.push(files[i]);
                };
                //回调
                iterator(i+1);
            })
        })(0);
    });
};