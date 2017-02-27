/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var db = require('../../module/db_mysql_pool');
exports.index = function (req,res) {
    var sql = "SELECT * FROM blog_list WHERE id = '"+ id +"'";
    db.query(sql,function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        res.layout('./pages/public/layout', {title:"博客"}, {
            body: {
                block: "./pages/blog/index",
                data: {}
            }
        });
    });
}