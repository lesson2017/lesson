/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    res.layout('./pages/public/layout', {title:"关于","nav":"about"}, {
        body: {
            block: "./pages/about/index",
            data: {}
        }
    });
}