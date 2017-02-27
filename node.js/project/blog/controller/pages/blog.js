/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    res.layout('./pages/public/layout', {title:"博客","nav":"blog"}, {
        body: {
            block: "./pages/blog/index",
            data: {}
        }
    });
}