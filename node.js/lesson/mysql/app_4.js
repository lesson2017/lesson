/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,更新数据
 */

var db = require('./db_mysql');
var sql = "UPDATE student SET name = ? WHERE id = ?";
var param = ["仝小晴",14];
db.query(sql,param, function (err, rows) {
    if(err)
    {
        console.log("ERROR:"+err.message);
        return;
    };
    console.log("操作成功："+rows.affectedRows);
});