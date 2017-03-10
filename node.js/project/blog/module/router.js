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
var admin_blog = require('../controller/admin/blog'); //后台博客模块
var admin_labs = require('../controller/admin/labs'); //后台实验室博客
var admin_classify = require('../controller/admin/classify'); //分类管理
var global = require('../module/global.inc');

//解析表单提交
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({limit:'5mb'}); //发送json
var urlencodedParser = bodyParser.urlencoded({ limit:'5mb',extended: false });

module.exports = function (app) {
    //home
    app.get('/',home.index);

    //blog
    app.get('/blog/:page/:id?',blog.index);
    app.get('/blogDetails/:id',blog.blogDetails);

    //labs
    app.get('/labs/:page/:id?',labs.index);
    app.get('/labs/demo/:id',labs.labsDemo);

    //about
    app.get('/about',about.index);

    //login
    app.get('/login',login.index);
    app.post('/doLogin',urlencodedParser,login.doLogin);
    //logout
    app.get('/logout',login.logout);

    //reg
    app.get('/reg',reg.index);
    app.post('/doReg',urlencodedParser,reg.doReg);

    //admin blog
    app.get('/admin/blog/list/:page?',global.fnLoginCheck,admin_blog.blogList);
    app.get('/admin/blog/publish/:id?',global.fnLoginCheck,admin_blog.blogPublish);
    app.post('/admin/blog/del',urlencodedParser,admin_blog.blogDel);
    app.post('/admin/blog/doEdit/:id?',urlencodedParser,admin_blog.doEdit);

    //admin labs
    app.get('/admin/labs/list/:page?',global.fnLoginCheck,admin_labs.labsList);
    app.get('/admin/labs/demo/upload/:id?',global.fnLoginCheck,admin_labs.labsUpload);
    app.post('/admin/labs/unzip',urlencodedParser,admin_labs.labsUnzip); //解压压缩包
    app.post('/admin/labs/doUpload/:id?',urlencodedParser,admin_labs.labsDoUpload);
    app.post('/admin/labs/del',urlencodedParser,admin_labs.labsDel);

    //admin
    app.get('/admin/classify/list/:page?',global.fnLoginCheck,admin_classify.classifyList);
    app.get('/admin/classify/add',global.fnLoginCheck,admin_classify.classifyAdd);
    app.post('/admin/classify/doAddClassify',urlencodedParser,admin_classify.doAddClassify);
    app.post('/admin/classify/findList',global.fnLoginCheck,urlencodedParser,admin_classify.findList);
    app.post('/admin/classify/delClassify',global.fnLoginCheck,urlencodedParser,admin_classify.delClassify);
}