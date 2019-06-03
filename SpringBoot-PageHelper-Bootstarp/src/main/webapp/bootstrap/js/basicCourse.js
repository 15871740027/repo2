$(document).ready(function () {
    $('#basicCourse_add,#basicCourse_edit').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '180px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px;width: 70px;text-align: right">课程名称:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 30px">'+
                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});