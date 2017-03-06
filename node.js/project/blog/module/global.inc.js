var path = require('path');
var fs = require('fs');
/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : for pulic
 * */
exports.getClientIp = function (req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};
/**
 * @author : by Ghost
 * @date : 2016/09/21
 * @description : 将时间毫秒格式化
 */
exports.format = function (time, format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        };
    });
};

//文件上传
exports.fnUploadDeal = function (file,newFileName,res){
    //判断文件size
    var size = parseInt(file.size);
    if(size > 1024*1024*10)
    {
        res.send('文件大小不能超过10M');
        //删除文件
        fs.unlink(file.path);
        return;
    }
    //改名
    var oldPath = file.path;
    /*var extName = path.extname(file.name);
    var random = parseInt(Math.random()*89999 + 10000);
    var newFileName = sd.format(new Date(), 'YYYYMMDDHHmmss') + random + extName;*/

    //如果是图存入images文件夹，否则存入zip文件夹
    if(file.type === 'image/jpeg')
    {
        var newPath = path.normalize(__dirname +'/../static/img/labs/'+ newFileName);
    }else{
        var newPath = path.normalize(__dirname +'/../static/upload/'+ newFileName);
    };

    fs.rename(oldPath,newPath, function (err,next) {
        if(err)
        {
            console.log("改名失败");
            return;
        };
        next;
    });
};

//登录状态检测
//req.cookies.isLogin
exports.fnLoginCheck = function (req,res,next) {
    var nickname = req.session.nickname;
    var role = req.session.role;
    if(nickname && role === '1')
    {
        next();
    }else{
        return res.redirect('/login');
    };
};