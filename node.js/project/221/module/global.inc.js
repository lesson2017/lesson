/**
 * @author : by Ghost
 * @date : 2017/2/21
 * @description : for pulic
 * */
exports.getClientIp = function (req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};