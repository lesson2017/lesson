/**
 * @author : by Ghost
 * @date : 2017/3/6
 * @description : 使用crypto模块实现数据的加解密
 * */
var crypto = require('crypto');
console.log(crypto.getCiphers()); //查看所有可以用来加密的方式
console.log(crypto.getHashes());  //查看所有散列算法
var md5 = crypto.createHash("md5");
var str = '111111aaabbb@@@';
var ud = md5.update(str);
var d = md5.digest('hex');
console.log(d);
//8c6c74365806ccd9f7b4a244ea3f702f