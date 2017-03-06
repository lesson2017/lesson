/**
 * @author : by Ghost
 * @date : 2017/3/6
 * @description : domain模块进行错误监控
 * */
var domain = require('domain');
var dm = domain.create();
dm.on('error', function (err) {
    console.error("error:"+err);
});
dm.run(function () {
    console.log(a);
});