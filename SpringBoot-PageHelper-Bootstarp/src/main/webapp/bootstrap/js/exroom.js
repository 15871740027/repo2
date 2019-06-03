$(document).ready(function () {
    $('#exroom_add,#exroom_edit').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '360px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px">科目名称:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<label style="font-size: 15px">考试人数:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});