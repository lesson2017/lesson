/**
 * @author : by Ghost
 * @date : 2017/1/20
 * @description : Buffer对象与字符串之间的转换
 * */
var stringDecoder = require("string_decoder").StringDecoder;
var decoder = new stringDecoder();
var str = "我喜爱编程";
var buf = new Buffer(str);
console.log(decoder.write(buf));