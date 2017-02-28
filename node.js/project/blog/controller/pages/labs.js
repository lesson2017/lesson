/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
var db = require('../../module/db_mysql_pool');
var global = require('../../module/global.inc');
exports.index = function (req,res,next) {
    var sql = "SELECT * FROM blog_labs";
    db.query(sql,function (err,rows) {
        if(err)
        {
            console.log("error:"+err.message);
            return false;
        };
        rows.forEach(function (item) {
            item.datetime = global.format(item.datetime,'yyyy-MM-dd HH:mm:ss');
        });
        res.layout('./pages/public/layout', {title:"实验室"}, {
            body: {
                block : "./pages/labs/index",
                data : {
                    "data" : rows
                }
            }
        });
    });
}
//详情
exports.labsDemo = function (req,res) {
    var id = req.params.id;
    res.layout('./pages/public/layout', {title: id}, {
        body: {
            block: "./output/"+id+"/test/index",
            data: {
                id : id
            }
        }
    });
};