/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,删除数据
 */

var db = require('./db_mysql');
var sql = "DELETE FROM student WHERE name= ?";
var param = ["������"];
db.query(sql,param, function (err, rows) {
    if(err)
    {
        console.log("ERROR:"+err.message);
        return;
    };
    console.log(rows.affectedRows);
});