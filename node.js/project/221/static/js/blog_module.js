/**
 * @author : by Ghost
 * @date : 2017/2/23
 * @description : for blog module
 * */
$(function () {
    //del blog
    if($(".delBtn").length > 0)
    {
        $(".delBtn").on('click', function () {
            layer.confirm("该条博客删除后将不可恢复，您确定要删除吗？", function (){
                $.post('/admin/blog/del',{"id":$(this).data("id")}, function (data) {
                    console.log(data);
                    if(data.result === 1)
                    {
                        layer.msg(data.resultMsg,{time:2000}, function () {
                            window.location.reload();
                        });
                    }else{
                        layer.msg(data.resultMsg,{time:2000});
                    };
                });
            });
        });
    };
});