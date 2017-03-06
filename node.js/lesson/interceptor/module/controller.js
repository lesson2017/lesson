/**
 * @author: By Ghost
 * @date: 2016-09-28
 * @description: 公用模块，拦截器具体实现
 */

exports.loginCheck = function (req,res,next) {
    if(!req.session.username)
    {
        res.redirect('/login');
    }else{
        next();
    }
};