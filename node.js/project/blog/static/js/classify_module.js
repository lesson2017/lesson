/**
 * @author : by Ghost
 * @date : 2017/3/7
 * @description : admin分类模块管理
 * */
$(function () {
    /**
     * @author : by Ghost
     * @date : 2017/3/7
     * @description : 添加分类功能，多个分类可以用英文逗号分隔
     * */
    if($("#doAddClassifyFormBtn").length > 0)
    {
        $("#doAddClassifyFormBtn").on("click", function () {
            var formData = $("#doAddClassifyForm").serialize(); //获取数据
            $.post('/admin/classify/doAddClassify',formData, function (data) {
                if(data.result === 1)
                {
                    layer.msg(data.resultMsg,{time:1500});
                }else{
                    layer.msg(data.resultMsg,{time:1500});
                };
            });
        });
    };

    /**
     * @author : by Ghost
     * @date : 2017/3/7
     * @description : 删除分类
     * */

    if($(".classifyDelBtn").length > 0)
    {
        $(".classifyDelBtn").on('click', function () {
            var This = $(this);
            var id = $(this).data('number');
            $.post('/admin/classify/delClassify',{id:id},function(data) {
                if(data.result === 1)
                {
                    layer.msg(data.resultMsg,{time:1500}, function () {
                        This.parents('tr').hide();
                    });
                }else{
                    layer.msg(data.resultMsg,{time:1500});
                };
            });
        });
    };

});
