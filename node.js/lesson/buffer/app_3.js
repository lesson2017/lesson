/**
 * @author : by Ghost
 * @date : 2017/1/20
 * @description : Buffer对象与json对象之间的转换
 * */
var str = "我喜爱编程";
var buf = new Buffer(str);
var json = JSON.stringify(buf);
var parseArr = JSON.parse(json);
var copy = new Buffer(parseArr);
console.log(copy.toString()); //我喜爱编程