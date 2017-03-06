/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    var header_info = {
        title : "欢迎访问星际实验室！",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav:"home"
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./pages/home/index",
            data: {}
        }
    });
}