/**
 * @author : by Ghost
 * @date : 2016/12/06
 * @description : 创建一个自定义中间件，用来定义服务器端所以返回的状态码、响应头以及返回页面中<head>标签中的内容
 */

function setHead()
{
    return function(req,res,next){
        res.statusCode = 200;
        res.header = {'Content-Type':'text/html'};
        res.head = '<head><meta charset="utf-8"><title>我是一个自定义的中间件</title></head>';
        next();
    };
};
exports.setHead = setHead();