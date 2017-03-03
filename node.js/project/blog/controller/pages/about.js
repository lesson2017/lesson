/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    //header data
    var header_info = {
        title : "注册-星际实验室！",
        nickname : req.session.nickname || ''
    };
    res.layout('./pages/public/layout', header_info, {
        body: {
            block: "./pages/about/index",
            data: {}
        }
    });
}