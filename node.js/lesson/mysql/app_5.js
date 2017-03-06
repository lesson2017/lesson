/**
 * @author : by ghost
 * @date : 2016/12/07
 * @description : node.js连接mysql,查询数据
 */

var db = require('./db_mysql');
var sql = "SELECT * FROM student";
var param = ["仝小晴",14];
db.query(sql,param, function (err, rows) {
    if(err)
    {
        console.log("ERROR:"+err.message);
        return;
    };
    for(var i=0;i<rows.length;i++)
    {
        console.log(rows[i]);
    };
});