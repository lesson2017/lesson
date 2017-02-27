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
var admin = require('../controller/admin/admin');
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
    app.post('/doLogin',urlencodedParser,login.doLogin);

    //reg
    app.get('/reg',reg.index);
    app.post('/doReg',urlencodedParser,reg.doReg);

    //admin blog
    app.get('/admin/blog/list',admin.blogList);
    app.get('/admin/blog/publish/:id?',admin.blogPublish);
    app.post('/admin/blog/del',urlencodedParser,admin.blogDel);
    app.post('/admin/blog/doEdit/:id?',urlencodedParser,admin.doEdit);

    //admin labs
    app.get('/admin/labs/list',admin.labsList);
    app.get('/admin/labs/demo/upload',admin.labsUpload);
    app.get('/admin/labs/unzip/:id',admin.labsUnzip);
    app.post('/admin/labs/doUpload',admin.labsDoUpload);
    app.post('/admin/labs/del',urlencodedParser,admin.labsDel);
}