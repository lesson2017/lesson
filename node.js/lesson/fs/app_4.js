/**
 * @author : by Ghost
 * @date : 2017/2/28
 * @description :
 * */
var fs = require('fs');
fs.exists("./demo/hello", function (exists) {
    if(exists){
        console.log(exists);
        return;
    };
    fs.mkdir('./demo/hello', function (err) {
        if(err)
        {
            console.log(err);
            return;
        };
        console.log('Ok');
    });
});