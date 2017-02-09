/**
 * @author : by Ghost
 * @date : 2017/1/22
 * @description : Buffer对象的合并
 * */
var str1 = new Buffer("我");
log(str1);
var str2 = new Buffer("喜");
log(str2);
var str3 = new Buffer("爱");
log(str3);
var str4 = new Buffer("编");
log(str4);
var str5 = new Buffer("程");
log(str5);
var buf = Buffer.concat([str1,str2,str3,str4,str5]);
log(buf);
log(buf.toString());
function log(str){
    console.log(str);
};