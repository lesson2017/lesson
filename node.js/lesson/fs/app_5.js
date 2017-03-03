/**
 * @author : by Ghost
 * @date : 2017/3/3
 * @description : fs模块创建和删除文件的硬链接
 * */
var fs = require('fs');
var rmdir = require('rmdir');
//创建
/*fs.link('../fs/demo.txt','./test/test_1.txt', function (err) {
    if(err){
        console.log("创建硬链接失败:"+err);
        return;
    };
    console.log("创建硬链接成功");
});*/
//删除
/*fs.unlink('../fs/test', function (err) {
    if(err){
        console.log("文件删除失败："+err);
        return;
    };
    console.log("删除成功");
});*/

rmdir('../fs/test', function (err, dirs, files) {
    console.log(dirs);
    console.log(files);
    console.log('all files are removed');
});