/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req,res,next) {
    res.layout('./pages/public/layout', {title:"实验室","nav":"labs"}, {
        body: {
            block: "./pages/labs/index",
            data: {}
        }
    });
}