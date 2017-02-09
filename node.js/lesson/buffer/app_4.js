/**
 * @author : by Ghost
 * @date : 2017/1/22
 * @description : Buffer对象间的复制缓存数据
 * */
var buf_a = Buffer("我喜爱编程");
var buf_b = Buffer(128);
console.log(buf_a);
console.log(buf_b);
console.log(buf_b.fill(0));
console.log(buf_a.copy(buf_b,10));
