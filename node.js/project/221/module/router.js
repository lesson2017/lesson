/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : 路由配置
 * */
var home = require('../controller/pages/home');
var blog = require('../controller/pages/blog');
var labs = require('../controller/pages/labs');
var about = require('../controller/pages/about');
var login = require('../controller/pages/login');
var reg = require('../controller/pages/reg');
//解析表单提交
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
    //home
    app.get('/',home.index);

    //blog
    app.get('/blog',blog.index);

    //labs
    app.get('/labs',labs.index);

    //about
    app.get('/about',about.index);

    //login
    app.get('/login',login.index);

    //reg
    app.get('/reg',reg.index);
    app.post('/doReg',urlencodedParser,reg.doReg);
}