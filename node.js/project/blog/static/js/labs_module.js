/**
 * @author : by Ghost
 * @date : 2017/3/3
 * @description : labs模模块js操作
 * */
$(function () {
    //admin
    /**
     * @author : by Ghost
     * @date : 2017/3/3
     * @description : 异步解压zip
     * */
    if($(".unzipBtn").length>0)
    {
        $(".unzipBtn").on('click', function () {
            var id = $(this).data('id');
            var This = $(this);
            $.post('/admin/labs/unzip',{id:id}, function (data) {
                if(data.result === 1)
                {
                    layer.msg(data.resultMsg,{time:1500}, function () {
                        This.hide();
                    });
                }else{
                    layer.msg(data.resultMsg,{time:1500});
                }
            });
        });
    };

    /**
     * @author : by Ghost
     * @date : 2017/3/3
     * @description : 删除labs实例
     * */
    if($(".delBtn").length > 0)
    {
        $(".delBtn").on('click', function () {
            var This = $(this);
            layer.confirm("删除后将不可恢复，您确定要删除吗？", function () {
                var id = This.data('id');
                $.post('/admin/labs/del',{id:id}, function (data) {
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
        });
    };

    //pages
});