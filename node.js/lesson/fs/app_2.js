/**
 * @author : by Ghost
 * @date : 2017/1/23
 * @description : fs模块写入数据
 * */
var fs = require("fs");

//writeFile
try {
    fs.writeFile("./demo/message.txt", "我是第一行数据。\r\n我是第二行数据", function (err) {
        if(err) console.log("错误");
        else console.log("成功");
    });
} catch (e) {
    console.log("写入失败");
}

//写入缓存区中数据
try {
    var data = new Buffer("我喜爱编程");
    fs.writeFile("./demo/messageBuffer.txt", data, function (err) {
        if (err) console.log("错误");
        else console.log("缓存区数据写入成功");
    });

    //追加数据
    var options = {
        "flag":"a"
    };
    fs.writeFile("./demo/messageBuffer.txt","\r\n这是追加的文字数据",options, function (err) {
        if (err) console.log("错误");
        else console.log("缓存区数据写入成功");
    });

    //写入图片数据
    fs.readFile('./demo/1.jpg','base64', function (err,data) {
        fs.writeFile('./demo/3.jpg',data.toString(),'base64', function (err) {
            if(err) console.log("图片数据写入失败");
            console.log("图片数据写入成功");
        });
    });

    //使用appendFile方法追加数据
    fs.appendFile('./demo/message.txt','\r\n这是使用appendFile方法插入的数据','utf8', function (err) {
        if(err) console.log(err);
        else console.log('success');
    });

    fs.open('./demo/message.txt','r', function (err,fd) {
        if(err) console.log(err);
        else log('success:');console.log(fd);
    })
} catch (e) {
    console.log("缓存区数据写入失败");
};

function log(str) {
    console.log(str);
};