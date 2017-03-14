/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    //header data
    var header_info = {
        title : "注册-土星实验室！",
        nickname : req.session.nickname || '',
        role : req.session.role || '',
        nav : "about"
    };
    res.layout('./public/layout', header_info, {
        body: {
            block: "./pages/about/index",
            data: {}
        }
    });
}