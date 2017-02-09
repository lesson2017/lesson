/**
 * @author : by Ghost
 * @date : 2017/1/22
 * @description : fs模块读取文件
 * */
var fs = require('fs');
fs.readFile('./demo/test.txt',{encoding:'utf8'}, function (err,data) {
    if(err) console.log("文件读取失败");
    else console.log(data);
});
fs.readFile('./demo/test.txt',function (err,data) {
    if(err) console.log("文件读取失败");
    else console.log(data.toString());
});

try{
    fs.readFileSync('./demo/test.txt','utf8');
    console.log(data);
}catch(ex){
    console.log("文件读取失败");
}

try{
    fs.readFile('./demo/1.jpg', function (err,data) {
        console.log(data);
        fs.writeFile('./demo/2.jpg',data, function (err) {
            if(err) console.log(err);
            else console.log("写入成功");
        });
    });
}catch(ex){
    console.log("操作失败");
}