/**
 * @author : by Ghost
 * @date : 2017/3/7
 * @description : main 入口
 * */
$(function () {
    /**
     * @author : by Ghost
     * @date : 2017/3/7
     * @description : 显示分类信息
     * */
    var classify_wrap = $(".classify-wrap");
    var classifyid = classify_wrap.data("classifyid") || '';
    if(classify_wrap.length>0)
    {
        $.post('/admin/classify/findList', function (data) {
            console.log(data);
            if(data.result === 1)
            {
                $.each(data.resultData, function (i,d) {
                    var compiled = _.template($('#classifyTpl').html());
                    var html = compiled({
                        "className" : d.className,
                        "classifyid" : classifyid,
                        "id" : d.id
                    });
                    classify_wrap.append(html);
                });
            }else{
                console.log(data.resultMsg);
            };
        });
    };
});