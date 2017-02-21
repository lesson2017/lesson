/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : Home pages router
 * */
exports.index = function (req, res, next) {
    res.layout('./pages/public/layout', {title: "Homepage",layout_nav:"reg"}, {
        body: {
            block: "./pages/login/index",
            data: {
                nav: "Matthew1321"
            }
        }
    });
}