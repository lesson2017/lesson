/**
 * Created by byzy on 2016/8/18.
 * 这里面封装了所有的对数据库的常用操作
 */
var MongoClient = require('mongodb').MongoClient;
var settings = require('../settings');
//链接数据库
function connectDB(callback)
{
    var url = settings.dburl;
    MongoClient.connect(url, function (err,db) {
        if(err)
        {
            callback(err,null);
            db.close();
            return;
        };
        callback(err,db);
    });
};

//写入数据
exports.insertOne = function (collectionsName,json,callback) {
    connectDB(function (err,db) {
        db.collection(collectionsName).insertOne(json, function (err,result) {
            callback(err,result);
            db.close();
        });
    });
};

//查询数据
exports.find = function (collectionsName,json,args,callback) {
    //存储结果集
    var result = [];
    //容错处理
    if(arguments.length != 4)
    {
        callback('find函数参数必须为3个',null);
        return false;
    };

    //跳过的条数
    var skipNum = args.pageamount * args.page;

    //要求查出的条数
    var limitNum = args.pageamount;

    //var json = json || {};
    connectDB(function (err,db) {

        var cursor = db.collection(collectionsName).find(json).skip(skipNum).limit(limitNum);
        cursor.each(function (err,doc) {
            if(err)
            {
                callback(err,null);
                db.close();
                return false;
            };
            if(doc != null)
            {
                result.push(doc); //放入结果数组
            }else{

                //表示遍历结束
                callback(null,result);
                db.close();
            }
        });
    });
};

//删除
exports.deleteMany = function (collectionsName,json,callback) {
    //链接数据库
    connectDB(function (err,db) {
        //执行删除操作
        db.collection(collectionsName).deleteMany(json, function (err,results) {
            callback(err,results);
            db.close();
        });
    })
};

//修改
exports.updateMany = function (collectionsName,json1,json2,callback) {
    //连接数据库
    connectDB(function (err,db) {
        //执行更新操作
        db.collection(collectionsName).updateMany(json1,json2, function (err,resultes) {
            callback(err,resultes);
            db.close();
        });
    });
};