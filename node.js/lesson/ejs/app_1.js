/**
 * 模板引擎ejs学习
 * @Author:By Ghost
 * @Date: 2016/7/18
 * @Description:
 *
 */

//引入模块
var ejs = require('ejs');

//字符串
var string = "我今天买了一个iphone<%= a%>s";

//模拟数据
var data = {
    a:6
}

//拼装渲染
html = ejs.render(string,data);

//控制台输出
console.log(html);