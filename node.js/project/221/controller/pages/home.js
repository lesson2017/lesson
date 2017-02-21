/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    res.layout('./pages/public/layout', {title:"首页","nav":"home",layout_nav:"main"}, {
        body: {
            block: "./pages/home/index",
            data: {}
        }
    });
}