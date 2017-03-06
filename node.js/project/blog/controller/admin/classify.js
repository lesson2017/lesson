/**
 * @author : by Ghost
 * @date : 2017/3/6
 * @description : 分类模块
 * */
var mysql = require('mysql');
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
var settings = require('../../config/settings');

//分类列表
exports.classifyList = function (req,res) {
    var sql = 'SELECT COUNT(*) FROM blog_classify';
    var param = [];

    //分页
    var currentPage = req.params.page || 1; //当前页
    var itemTotal = 0; //总条数
    var pageNum = settings.pages.page_num;

    db.query(sql,param, function (rows) {
        //获取总共有多少条数据
        itemTotal = rows[0]["COUNT(*)"];

        var sql = "SELECT * FROM blog_classify ORDER BY datetime DESC limit "+ (currentPage-1) * pageNum +"," + pageNum;
        var param = [];
        db.query(sql,param, function (rows) {
            rows.forEach(function (item) {
                item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
            });

            //header data
            var header_info = {
                title : "分类管理-星际实验室！",
                nickname : req.session.nickname || '',
                role : req.session.role || '',
                nav : "admin"
            };
            res.layout('./public/layout', header_info, {
                body: {
                    block: "./admin/classify/classify_list",
                    data: {
                        data: rows,
                        pages : {
                            currentPage : parseInt(currentPage),
                            totalPage : parseInt(Math.ceil(itemTotal / pageNum)),
                            typePage : 'admin/blog/list'
                        }
                    }
                }
            });
        });
    });
};

//分类添加form
exports.classifyAdd = function (req,res) {
    //header data
    var header_info = {
        title : "分类管理-星际实验室！",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav : "admin"
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./admin/classify/classify_form",
            data: {
                data: []
            }
        }
    });
};

//分类添加实现
exports.doAddClassify = function (req,res) {}

//分类显示接口
exports.findList = function (req,res) {}