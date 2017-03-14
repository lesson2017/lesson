/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
exports.index = function (req,res) {
    var sql = "SELECT id,imgPath,title,description FROM blog_labs ORDER BY datetime DESC LIMIT 0,4;SELECT id,title,author,datetime FROM blog_list ORDER BY datetime DESC LIMIT 0,10;";
    var param = [];
    db.query(sql,param, function (rows) {
        rows[1].forEach(function (item) {
            item.datetime = global.format(item.datetime,"yyyy-MM-dd HH:mm:ss");
        });

        var header_info = {
            title : "欢迎访问土星实验室！",
            nickname : req.session.nickname || '',
            role : req.session.role || '',
            nav:"home"
        };
        res.layout('./public/layout', header_info, {
            body: {
                block: "./pages/home/index",
                data: {
                    labsData : rows[0],
                    blogData : rows[1]
                }
            }
        });
    });
};