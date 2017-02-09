/**
 * @author : by Ghost
 * @date : 2017/1/24
 * @description : fs模块创建与读取目录
 * */
var fs = require('fs');

//创建目录
/*fs.mkdir('./test', function (err) {
    if (err) {
        log(err);
    } else {
        log("目录创建成功！");
    };
});*/

//读取目录
/*fs.readdir(path, function (err, files) {
    //do something;
});*/
fs.readdir('./test', function (err,files) {
    if(err){
        log(err);
    }else{
        log("读取的文件："+files)
    };
});

//查看文件或目录的信息
fs.stat('./demo/message.txt', function (err,stats) {
    log(stats);
});

//检查文件或文件夹是否存在
fs.exists('./demo/message.txt', function (exists) {
   log(exists);
});

function log(str) {
    console.log(str);
};