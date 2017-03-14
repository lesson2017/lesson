/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
var settings = require('../../config/settings');
exports.index = function (req,res) {
    //分页
    var currentPage = req.params.page || 1; //当前页
    var itemTotal = 0; //总条数
    var pageNum = settings.pages.page_num;
    var classify_id = req.params.id;
    if(!classify_id)
    {
        var sql = "SELECT COUNT(*) FROM blog_list";
        var param = [];
    }else{
        var sql = "SELECT COUNT(*) FROM blog_list WHERE classify_id =?";
        var param = [classify_id];
    };

    //查询总数
    db.query(sql,param,function (rows) {
        //获取总共有多少条数据
        itemTotal = rows[0]["COUNT(*)"];
        if(!classify_id)
        {
            //查询分页数据
            var sql = "SELECT * FROM blog_list ORDER BY datetime DESC limit ?,?;SELECT id,className FROM blog_classify";
            /*
             * currentPage 1,2,3,4
             * (1-1)*2 = 0
             * (2-1)*2 = 2
             * (3-1)*2 = 4
             * (4-1)*2 = 6
             * 0,2 = 1,2
             * 2,2 = 3,4
             * 4,2 = 5,6
             * 6,2 = 7,8
             * */
            var param = [(currentPage-1) * pageNum,pageNum];
        }else{
            //查询分页数据
            var sql = "SELECT * FROM blog_list WHERE classify_id=? ORDER BY datetime DESC limit ?,?;SELECT id,className FROM blog_classify";
            /*
             * currentPage 1,2,3,4
             * (1-1)*2 = 0
             * (2-1)*2 = 2
             * (3-1)*2 = 4
             * (4-1)*2 = 6
             * 0,2 = 1,2
             * 2,2 = 3,4
             * 4,2 = 5,6
             * 6,2 = 7,8
             * */
            var param = [classify_id,(currentPage-1) * pageNum,pageNum];
        };

        db.query(sql,param,function (rows) {
            rows[0].forEach(function (item) {
                item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
            });

            //header data
            var header_info = {
                title : "博客-土星实验室！",
                nickname : req.session.nickname || '',
                role : req.session.role || '',
                nav : "blog"
            };
            res.layout('./public/layout', header_info, {
                body: {
                    block: "./pages/blog/index",
                    data: {
                        data : rows[0],
                        classData : rows[1],
                        pages : {
                            currentPage : parseInt(currentPage),
                            totalPage : parseInt(Math.ceil(itemTotal / pageNum)),
                            typePage : "blog",
                            classify_id : classify_id
                        }
                    }
                }
            });
        });
    });
};

//详情
exports.blogDetails = function (req,res) {
    var id = req.params.id;
    var sql = "SELECT * FROM blog_list WHERE id='"+ id +"'";
    var param = [];
    db.query(sql,param,function (rows) {
        rows.forEach(function (item) {
            item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
        });

        //header data
        var header_info = {
            title : "博客-土星实验室！",
            nickname : req.session.nickname || '',
            role : req.session.role || '',
            nav : "blog"
        };
        res.layout('./public/layout', header_info, {
            body: {
                block: "./pages/blog/blog_details",
                data: {
                    data : rows[0]
                }
            }
        });
    });
};