$(document).ready(function () {
    $('#room_add,#room_edit').on('click', function(){
        layer.open({
            type: 1,
            area: ['300px', '360px'],
            title:'编辑',
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;">' +
                '<div style="margin: 0 auto;width: 280px">' +
                '<label style="font-size: 15px;width: 70px;text-align: right">地点:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">教室号:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">校区:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">楼栋:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+
                '<br/>'+
                '<label style="font-size: 15px;width: 70px;text-align: right">教室容量:</label>'+
                '<input type="text" style="height: 25px;margin-bottom: 8px">'+

                '<button style="margin-left: 100px" class="btn btn-primary">确认</button>'+
                '</div>' +
                '</div>'
        });
    });

});