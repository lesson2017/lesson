/**
 * @author : by Ghost
 * @date : 2017/1/20
 * @description : 三种实例化Buffer类的方式
 * */

//第一种
var size = 128; //缓存区大小单位字节
var buf_1 = new Buffer(size);
console.log(buf_1.length); //128

//第二种
var arr = [0,1,2];
var buf_2 = new Buffer(arr);
console.log(buf_2.length);
buf_2.fill(100,1,1);
console.log(buf_2); //缓存区的数据可以被更新不能在每次运行时删除旧数据写入新数据

//第三种
var str = "你好";
var buf_3 = new Buffer(str);
console.log(buf_3);
buf_3.fill("约翰",7);
console.log("buf_3:"+buf_3);