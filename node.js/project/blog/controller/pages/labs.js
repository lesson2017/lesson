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
        var sql = "SELECT COUNT(*) FROM blog_labs";
        var param = [];
    }else{
        var sql = "SELECT COUNT(*) FROM blog_labs WHERE classify_id =?";
        var param = [classify_id];
    };

    db.query(sql,param, function (rows) {
        //获取总共有多少条数据
        itemTotal = rows[0]["COUNT(*)"];
        if(!classify_id){
            var sql = "SELECT * FROM blog_labs ORDER BY datetime DESC limit ?,?;SELECT id,className FROM blog_classify";
            var param = [(currentPage-1) * pageNum,pageNum];
        }else{
            var sql = "SELECT * FROM blog_labs WHERE classify_id=? ORDER BY datetime DESC limit ?,?;SELECT id,className FROM blog_classify";
            var param = [classify_id,(currentPage-1) * pageNum,pageNum];
        };

        db.query(sql,param,function (rows) {
            rows[0].forEach(function (item) {
                item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
            });

            //header data
            var header_info = {
                title : "实验室-土星实验室！",
                nickname : req.session.nickname || '',
                role : req.session.role || '',
                nav : "labs"
            };

            res.layout('./public/layout', header_info, {
                body: {
                    block : "./pages/labs/index",
                    data : {
                        "data" : rows[0],
                        "classData" : rows[1],
                        "pages" : {
                            currentPage : parseInt(currentPage),
                            totalPage : parseInt(Math.ceil(itemTotal / pageNum)),
                            typePage : 'labs'
                        }
                    }
                }
            });
        });
    });
};
//详情
exports.labsDemo = function (req,res) {
    var id = req.params.id;
    //header data
    var header_info = {
        title : "实验室-土星实验室！",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav : "labs"
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./output/"+id+"/demo/index",
            data: {
                id : id
            }
        }
    });
};