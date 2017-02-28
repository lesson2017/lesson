/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
exports.index = function (req,res) {
    var sql = "SELECT * FROM blog_list";
    db.query(sql,function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        rows.forEach(function (item) {
            item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
        });
        res.layout('./pages/public/layout', {title:"博客列表"}, {
            body: {
                block: "./pages/blog/index",
                data: {
                    data : rows
                }
            }
        });
    });
}