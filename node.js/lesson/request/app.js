var express = require('express');
var request = require('request');

var app = express();

/*request('http://127.0.0.1:8000/test.php', function (error,response,body) {
    if (!error && response.statusCode == 200)
    {
        console.log(body);
    }
});*/

request.post({url:'http://127.0.0.1:8000/test.php', form: {"name" : "john"}}, function (err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});

app.listen(5000,'127.0.0.1', function () {
    console.log('server is started');
});